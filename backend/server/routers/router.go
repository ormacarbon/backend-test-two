package routers

import (
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/ronanzindev/backend-test-two/controllers"
)

func ConfigRoutes(router *gin.Engine) *gin.Engine {
	router.Use(cors.New(cors.Config{
		AllowAllOrigins:  true,
		AllowMethods:     []string{"GET", "POST", "UPDATE", "DELETE", "PATCH", "PUT"},
		AllowHeaders:     []string{"Content-type"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	main := router.Group("api/v1")
	{
		main.GET("/beer", controllers.GetAllProducts)
		main.GET("/beer/:id", controllers.GetProductById)
		main.GET("/beers", controllers.GetAllProductsPaginate)
		main.POST("/beer", controllers.CreateProduct)
		main.PUT("/beer/:id", controllers.UpdateProduct)
		main.DELETE("/beer/:id", controllers.DeleteProduct)
	}
	return router
}
