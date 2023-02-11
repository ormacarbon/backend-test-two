package main

import (
	"backend-test-two/controllers"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {

	//CONFIG
	router := gin.Default()
	router.Use(cors.Default())
	router.Static("/statics", "./statics/")
	router.LoadHTMLGlob("views/*.html")

	//API
	router.POST("/api/location", controllers.CreateLocation)
	router.GET("/api/location", controllers.GetAllLocations)
	router.GET("/api/location/:id", controllers.GetLocationById)
	router.PUT("/api/location/:id", controllers.UpdateLocationsById)
	router.DELETE("/api/location/:id", controllers.DeleteLocationById)

	//PAGES
	router.GET("/", controllers.Index)

	//RUN
	router.Run("localhost:9090")

}
