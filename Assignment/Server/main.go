package main

import (
	"context"
	"fmt"
	"net/http"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var mongoClient *mongo.Client
var coffeeCollection *mongo.Collection

const mongoUri = "mongodb://localhost:27017"
const mongoDbName = "coffeeDB"

type Coffee struct {
	Id         primitive.ObjectID `json:"id" bson:"_id,omitempty"`
	Number      string             `json:"number" bson:"number"`
	Type       string             `json:"type" bson:"type"`
	Category   string             `json:"category" bson:"category"`
	SugarLevel string             `json:"sugar_level" bson:"sugar_level"`
	Price      float64            `json:"price" bson:"price"`
}

func connectToMongo() {
	var err error
	mongoClient, err = mongo.Connect(context.TODO(), options.Client().ApplyURI(mongoUri))
	if err != nil {
		fmt.Println("Mongo DB Connection Error!" + err.Error())
		return
	}
	coffeeCollection = mongoClient.Database(mongoDbName).Collection("coffees")
}

func readAllCoffees(c *gin.Context) {
	var coffees []Coffee
	cursor, err := coffeeCollection.Find(context.TODO(), bson.M{})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Server Error.\n" + err.Error()})
		return
	}
	defer cursor.Close(context.TODO())

	if err = cursor.All(context.TODO(), &coffees); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Server Error.\n" + err.Error()})
		return
	}
	c.JSON(http.StatusOK, coffees)
}

func readCoffeeById(c *gin.Context) {
	id := c.Param("id")
	coffeeId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID.\n" + err.Error()})
		return
	}

	var coffee Coffee
	err = coffeeCollection.FindOne(context.TODO(), bson.M{"_id": coffeeId}).Decode(&coffee)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Coffee Not Found."})
		return
	}
	c.JSON(http.StatusOK, coffee)
}

func createCoffee(c *gin.Context) {
	var coffee Coffee
	if err := c.BindJSON(&coffee); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid Input.\n" + err.Error()})
		return
	}

	coffee.Id = primitive.NewObjectID()
	_, err := coffeeCollection.InsertOne(context.TODO(), coffee)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create coffee.\n" + err.Error()})
		return
	}
	c.JSON(http.StatusCreated, gin.H{"message": "Coffee Created Successfully.", "coffee": coffee})
}

func updateCoffee(c *gin.Context) {
	id := c.Param("id")
	coffeeId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID.\n" + err.Error()})
		return
	}

	var oldCoffee Coffee
	err = coffeeCollection.FindOne(context.TODO(), bson.M{"_id": coffeeId}).Decode(&oldCoffee)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Coffee Not Found."})
		return
	}

	var updatedCoffee Coffee
	if err := c.BindJSON(&updatedCoffee); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid Input.\n" + err.Error()})
		return
	}

	_, err = coffeeCollection.UpdateOne(context.TODO(),
		bson.M{"_id": coffeeId},
		bson.M{"$set": bson.M{
			"type":       updatedCoffee.Type,
			"category":   updatedCoffee.Category,
			"sugar_level": updatedCoffee.SugarLevel,
			"price":      updatedCoffee.Price,
		}})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update coffee.\n" + err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Coffee Updated Successfully.", "coffee": updatedCoffee})
}

func deleteCoffee(c *gin.Context) {
	id := c.Param("id")
	coffeeId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID.\n" + err.Error()})
		return
	}

	result, err := coffeeCollection.DeleteOne(context.TODO(), bson.M{"_id": coffeeId})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete coffee.\n" + err.Error()})
		return
	}

	if result.DeletedCount == 0 {
		c.JSON(http.StatusNotFound, gin.H{"error": "Coffee Not Found."})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Coffee Deleted Successfully."})
}

func main() {
	connectToMongo()
	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5174"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	r.GET("/coffees", readAllCoffees)
	r.GET("/coffees/:id", readCoffeeById)
	r.POST("/coffees", createCoffee)
	r.PUT("/coffees/:id", updateCoffee)
	r.DELETE("/coffees/:id", deleteCoffee)

	r.Run(":8080")
}
