package main

import (
	"backend-test-two/controllers"

	"github.com/gin-gonic/gin"
)

func main() {

	router := gin.Default()

	router.POST("/api/location", controllers.CreateLocation)
	router.GET("/api/location", controllers.GetAllLocations)
	router.GET("/api/location/:id", controllers.GetLocationById)
	router.PUT("/api/location/:id", controllers.UpdateLocationsById)
	router.DELETE("/api/location/:id", controllers.DeleteLocationById)

	router.Run("localhost:9090")
	
}