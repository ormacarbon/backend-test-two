package Routes

import(

	"test-two/companyx/Controllers"

	"github.com/gin-gonic/gin"
	
)

// Sets up routes using Gin.
// In this case, the routes are Rest endpoints.
func SetupRouter() *gin.Engine {
	
	r := gin.Default()

	r.POST( "/beers", Controllers.CreateBeer )
	r.GET( "/beers", Controllers.GetBeers )
	r.GET( "/beers/:id", Controllers.GetBeer )
	r.PUT( "/beers/:id", Controllers.UpdateBeer )
	r.DELETE( "/beers/:id", Controllers.DeleteBeer )

	return r
	
}
