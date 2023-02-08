package Controllers

import(

	
	"test-two/companyx/Config"
	"test-two/companyx/Models"

	"github.com/gin-gonic/gin"
	"net/http"

)

//create beer
func CreateBeer( c *gin.Context ) {

	var beer Models.Beer
	c.BindJSON( &beer )
	err := Models.CreateBeer( Config.Db, &beer )
	
	if err != nil {

		c.AbortWithStatusJSON( http.StatusInternalServerError, gin.H{"error": err} )
		return
	
	}

	c.JSON(http.StatusOK, beer)

}