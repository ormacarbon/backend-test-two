package Controllers

import(

	
	"test-two/companyx/Config"
	"test-two/companyx/Models"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"net/http"
	"strconv"
	"errors"

)

// Prepare to create a new beer.
// Sends back OK status and data created via http if successful;
// Sends back error status and message otherwise. 
func CreateBeer( c *gin.Context ) {

	// Creates a variable for our model, which will be used for response
	// It also defines what will be looked for on DB
	var beer Models.Beer

	// Serializes JSON to Go Struct
	c.BindJSON( &beer )
	
	// Sets coodinates received in JSON as array to its own
	// attributes, so it can be saved on DB properly
	beer.Latitude = beer.Coordinates[0]
	beer.Longitude = beer.Coordinates[1]

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

// Prepare to get identified beer.
// Sends back OK status and data retrieved via http if successful;
// Sends back error status and message otherwise. 
func GetBeer( c *gin.Context ) {

	// Verifies id for security mesures
	id, err := strconv.Atoi( c.Param( "id" ) )

	// Test errors early, since it will be overwrited later
	if err != nil {
		
		// Sends back an error status if any
		c.AbortWithStatusJSON( http.StatusInternalServerError, gin.H{"error": err} )
		return
	
	}

	// Creates a variable for our model, which will be used for response.
	// It also defines what will be looked for on DB
	var beer Models.Beer

	// Try to find identified beer
	err = Models.GetBeer( Config.Db, &beer, id )
	
	if err != nil {

		// Check and return if it was not found
		if errors.Is(err, gorm.ErrRecordNotFound) {
			c.AbortWithStatus(http.StatusNotFound)
			return
		}

		// Check and return other errors
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": err})
		return
	}

	// Check if Coordinates existed and set them for the original json format
	if( beer.Latitude != 0 || beer.Longitude != 0 ) {

		beer.Coordinates = []float64{ beer.Latitude, beer.Longitude } 

	}

	// Sends back ok status with the data retrieved
	c.JSON(http.StatusOK, beer)

}

// Prepare to get the list of all beers.
// Sends back OK status and data retrieved via http if successful;
// Sends back error status and message otherwise. 
func GetBeers( c *gin.Context ) {

	// Creates a array variable for our model, which will be used for response.
	// It also defines what will be looked for on DB
	var beers []Models.Beer

	// Try to get the beers list
	err := Models.GetBeers( Config.Db, &beers )
	
	if err != nil {
		
		// Sends back an error status if any
		c.AbortWithStatusJSON( http.StatusInternalServerError, gin.H{"error": err} )
		return
	
	}

	// Iterates through all beers, cheking if any have Coordinates,
	// setting them properly in their original json format 
	for index, beer := range beers{
		
		if( beer.Latitude != 0 || beer.Longitude != 0 ) {

			beers[index].Coordinates = []float64{ beer.Latitude, beer.Longitude } 
	
		}

	}

	// Sends back ok status with the data retrieved
	c.JSON(http.StatusOK, beers)

}

// Prepare to update identified beer.
// Sends back OK status and updated data via http if successful;
// Sends back error status and message otherwise. 
func UpdateBeer( c *gin.Context ) {

	// Verifies id for security mesures
	id, err := strconv.Atoi( c.Param( "id" ) )

	// Test errors early, since it will be overwrited later
	if err != nil {
		
		// Sends back an error status if any
		c.AbortWithStatusJSON( http.StatusInternalServerError, gin.H{"error": err} )
		return
	
	}

	// Creates a variable for our model, which will be used for response.
	// It also defines what will be looked for on DB
	var beer Models.Beer

	// Try to get identified beer's old data
	err = Models.GetBeer( Config.Db, &beer, id )

	if err != nil {

		// Check and return if it was not found
		if errors.Is(err, gorm.ErrRecordNotFound) {
			c.AbortWithStatus(http.StatusNotFound)
			return
		}

		// Check and return other errors
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": err})
		return
	}

	// Check if Coordinates existed and set them for the original json format
	if( beer.Latitude != 0 || beer.Longitude != 0 ) {

		beer.Coordinates = []float64{ beer.Latitude, beer.Longitude } 

	}

	// Serializes JSON to Go Struct
	c.BindJSON( &beer )
	
	// Sets coodinates received in JSON as array to its own
	// attributes, so it can be saved on DB properly
	beer.Latitude = beer.Coordinates[0]
	beer.Longitude = beer.Coordinates[1]

	// Try to update identified beer
	err = Models.UpdateBeer( Config.Db, &beer )

	if err != nil {
		
		// Sends back an error status if any
		c.AbortWithStatusJSON( http.StatusInternalServerError, gin.H{"error": err} )
		return
	
	}

	// Sends back ok status with updated data
	c.JSON(http.StatusOK, beer)

}

// Prepare to delete identified beer.
// Sends back OK status and a message confirming it was deleted via http if successful;
// Sends back error status and message otherwise. 
func DeleteBeer( c *gin.Context ) {

	// Verifies id for security mesures
	id, err := strconv.Atoi( c.Param( "id" ) )

	// Test errors early, since it will be overwrited later
	if err != nil {
		
		// Sends back an error status if any
		c.AbortWithStatusJSON( http.StatusInternalServerError, gin.H{"error": err} )
		return
	
	}

	// Creates a variable for our model, since it defines what will be looked for on DB
	var beer Models.Beer

	// Try to delete identified beer
	err = Models.DeleteBeer( Config.Db, &beer, id )

	if err != nil {
		
		// Sends back an error status if any
		c.AbortWithStatusJSON( http.StatusInternalServerError, gin.H{"error": err} )
		return
	
	}

	// Sends back ok status with a message confirming it was deleted
	c.JSON( http.StatusOK, gin.H{"response":"Beer deleted"} )

}