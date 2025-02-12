package main
import(
	// "fmt"
	"github.com/gin-gonic/gin"
	"net/http"
)

type Flight struct{
	Id string
	Number string
	AirlineName string
	Source string
	Destination string
	Capacity int
	Price float32
}
func readAllFlights(c *gin.Context){
	flights :=[] Flight{ {Id:"1001", Number:"AI 845", AirlineName: "AirIndia", Source:"Mumbai",
				Destination:"Abu Dabhi", Capacity:180, Price:15000},
				{Id:"1002", Number:"AI 846", AirlineName: "AirIndia", Source:"Abu Dabhi",Destination:"Mumbai", Capacity:180, Price:15000},}
				c.JSON(http.StatusOK,flights)
}
func main(){
	//router
	r := gin.Default()
	//routes| API Endpoints
	r.GET("/flights", readAllFlights)
	r.Run()
	// flight1 := Flight {Id:"1001", Number:"AI 845", AirlineName: "AirIndia", Source:"Mumbai",
	// 			Destination:"Abu Dabhi", Capacity:180, Price:15000}
// 	fmt.Println(flight1)
 }