package Controllers

import(

	
	"test-two/companyx/Config"
	"test-two/companyx/Models"

	"github.com/gin-gonic/gin"
	"net/http"

)

// Prepare to create a new beer.
// Sends back status and data received via http if successful;
// Sends back error status and message otherwise. 
func CreateBeer( c *gin.Context ) {

	// Creates a variable for our model, which will be returned after used
	var beer Models.Beer
	// Serializes JSON to Go Struct
	c.BindJSON( &beer )
	// Try to create a new beer
	err := Models.CreateBeer( Config.Db, &beer )
	
	if err != nil {
		// Sends back an error status if any
		c.AbortWithStatusJSON( http.StatusInternalServerError, gin.H{"error": err} )
		return
	
	}

	// Sends back ok status with the data received
	c.JSON(http.StatusOK, beer)

}