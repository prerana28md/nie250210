package main
import(
	// "fmt"
	"net/http"
	"github.com/gin-gonic/gin"
)

type Coffee struct{
	Id string
	Category string
	Type string
	SugarLevel string
	Price float32
}
func readAllCoffee(c *gin.Context){
	//c.JSON(http.StatusOK, "Hello World")
	coffees := []Coffee{
	 			{Id:"56",Category:"Filter",Type:"Medium",SugarLevel:"Less",Price:123},
				 {Id:"57",Category:"Instant",Type:"Small",SugarLevel:"Normal",Price:234},
	}
	c.JSON(http.StatusOK, coffees)
}

func readCoffeeById(c *gin.Context){
	//c.JSON(http.StatusOK, "Hello World")
	id := c.Param("id")
	coffee := Coffee{Id:id,Category:"Filter",Type:"Medium",SugarLevel:"Less",Price:123}
	c.JSON(http.StatusOK, coffee)
}
func createCoffee(c *gin.Context){
	var jbodyCoffee Coffee
	err:=c.BindJSON(&jbodyCoffee)
	if err!=nil{
		c.JSON(http.StatusInternalServerError,gin.H{"error":err.Error()})
		return
	}
	createCoffee := Coffee{Id:"56",Category:"Filter",Type:"Medium",SugarLevel:"Less",Price:123}
	c.JSON(http.StatusCreated,gin.H{"message":"Coffee Order Created Sucessfully.","coffee":createCoffee})
}

func updateCoffee(c *gin.Context){
	id := c.Param("id")
	var jbodyCoffee Coffee
	err:=c.BindJSON(&jbodyCoffee)
	if err!=nil{
		c.JSON(http.StatusInternalServerError,gin.H{"error":err.Error()})
		return
	}
	updatedCoffee := Coffee{Id:id,Category:"Filter",Type:"Medium",SugarLevel:"Less",Price:123}
	c.JSON(http.StatusOK,gin.H{"message":"updated Coffee Order Sucessfully.","flight":updatedCoffee})
}
func deleteCoffee(c *gin.Context){
	// id := c.Param("id")
	
	
	c.JSON(http.StatusOK,gin.H{"message":"Coffee Order deleted Sucessfully"})
}

func main(){
	//router
	r := gin.Default()
	//routes| API Endpoints
	r.GET("/coffees", readAllCoffee)
	r.GET("/coffees/:id", readCoffeeById)
	r.POST("/coffees", createCoffee)
	r.PUT("/coffees/:id", updateCoffee)
	r.DELETE("coffees/:id",deleteCoffee)
	r.Run(":8080")
// 	flight1 := Flight {Id:"1001", Number:"AI 845", AirlineName: "AirIndia", Source:"Mumbai",
// 				Destination:"Abu Dabhi", Capacity:180, Price:15000}
// 	fmt.Println(flight1)
 }