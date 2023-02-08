package Routes

import(

	"test-two/companyx/Controllers"

	"github.com/gin-gonic/gin"
	"net/http"

)

// Sets up routes using Gin.
// In this case, the routes are Rest endpoints.
func SetupRouter() *gin.Engine {
	
	r := gin.Default()

	r.GET( "ping", func( c *gin.Context ) {
		c.JSON( http.StatusOK, "pong" )
	})

	r.POST( "/beers", Controllers.CreateBeer )

	return r
	
}
