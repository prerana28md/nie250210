package main
import(
	// "fmt"
	"net/http"
	"time"
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
)

type Flight struct{
	Id string       `json:"id"`
	Number string    `json:"number"`
	AirlineName string  `json:"airline_name"`
	Source string     `json:"source"`
	Destination string `json:"destination"`
	Capacity int    `json:"capacity"`
	Price float32    `json:"price"`
}
func readAllFlights(c *gin.Context){
	//c.JSON(http.StatusOK, "Hello World")
	flights := []Flight{
	 			{Id:"1001", Number:"AI 845", AirlineName: "AirIndia", Source:"Mumbai",
 				Destination:"Abu Dabhi", Capacity:180, Price:15000},
				{Id:"1002", Number:"AI 846", AirlineName: "AirIndia", Source:"Abu Dabhi",
 				Destination:"Mumbai", Capacity:180, Price:15000},
	}
	c.JSON(http.StatusOK, flights)
}

func readFlightById(c *gin.Context){
	//c.JSON(http.StatusOK, "Hello World")
	id := c.Param("id")
	flight := Flight{Id:id, Number:"AI 845", AirlineName: "AirIndia", Source:"Mumbai",
 				Destination:"Abu Dabhi", Capacity:180, Price:15000}
	c.JSON(http.StatusOK, flight)
}
func createFlight(c *gin.Context){
	var jbodyFlight Flight
	err:=c.BindJSON(&jbodyFlight)
	if err!=nil{
		c.JSON(http.StatusInternalServerError,gin.H{"error":err.Error()})
		return
	}
	createFlight:=Flight{Id:"1001", Number:"AI 845", AirlineName: "AirIndia", Source:"Mumbai",
	Destination:"Abu Dabhi", Capacity:180, Price:15000}
	c.JSON(http.StatusCreated,gin.H{"message":"Flight Created Sucessfully.","flight":createFlight})
}

func updateFlight(c *gin.Context){
	id := c.Param("id")
	var jbodyFlight Flight
	err:=c.BindJSON(&jbodyFlight)
	if err!=nil{
		c.JSON(http.StatusInternalServerError,gin.H{"error":err.Error()})
		return
	}
	updatedFlight:=Flight{Id:id, Number:"AI 845", AirlineName: "AirIndia", Source:"Mumbai",
	Destination:"Abu Dabhi", Capacity:180, Price:15000}
	c.JSON(http.StatusOK,gin.H{"message":"updated flight Sucessfully.","flight":updatedFlight})
}
func deleteFlight(c *gin.Context){
	// id := c.Param("id")
	
	
	c.JSON(http.StatusOK,gin.H{"message":"flight deleted Sucessfully"})
}

func main(){
	//router
	r := gin.Default()
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"}, // React frontend URL
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))
	//routes| API Endpoints
	r.GET("/flights", readAllFlights)
	r.GET("/flights/:id", readFlightById)
	r.POST("/flights", createFlight)
	r.PUT("/flights/:id", updateFlight)
	r.DELETE("flights/:id",deleteFlight)
	r.Run(":8080")
// 	flight1 := Flight {Id:"1001", Number:"AI 845", AirlineName: "AirIndia", Source:"Mumbai",
// 				Destination:"Abu Dabhi", Capacity:180, Price:15000}
// 	fmt.Println(flight1)
 }