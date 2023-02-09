package Routes

import(

	"test-two/companyx/Controllers"

	"github.com/gin-gonic/gin"
	
)

// Sets up routes using Gin.
// In this case, the routes are Rest endpoints.
func SetupRouter() *gin.Engine {
	
	r := gin.Default()

	r.POST( "/beer", Controllers.CreateBeer )
	r.POST( "/beers", Controllers.CreateBeers )
	r.GET( "/beers", Controllers.GetBeers )
	r.GET( "/beer/:id", Controllers.GetBeer )
	r.PUT( "/beer/:id", Controllers.UpdateBeer )
	r.DELETE( "/beer/:id", Controllers.DeleteBeer )

	return r
	
}
