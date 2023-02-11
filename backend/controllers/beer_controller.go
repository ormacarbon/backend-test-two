package controllers

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/ronanzindev/backend-test-two/database"
	"github.com/ronanzindev/backend-test-two/models"
	"github.com/ronanzindev/backend-test-two/utils/errors"
	"github.com/ronanzindev/backend-test-two/utils/paginate"
)

func GetAllProducts(c *gin.Context) {
	db := database.GetDataBase()
	var beers []models.Beer
	if err := db.Find(&beers).Error; err != nil {
		productsErr := errors.NewBadRequestError("Cannot get all products")
		c.JSON(productsErr.Status, productsErr)
	}
	c.JSON(http.StatusOK, beers)

}

func GetAllProductsPaginate(c *gin.Context) {
	db := database.GetDataBase()
	var beers []models.Beer
	db.Scopes(paginate.Paginate(c)).Find(&beers)
	c.JSON(200, beers)
}
func GetProductById(c *gin.Context) {
	idParam := c.Param("id")
	id, err := strconv.Atoi(idParam)
	if err != nil {
		idErr := errors.NewBadRequestError("Id must be a integer")
		c.JSON(idErr.Status, idErr)
	}
	db := database.GetDataBase()
	var beer models.Beer
	err = db.First(&beer, id).Error
	if err != nil {
		productErr := errors.NewBadRequestError("Product not found")
		c.JSON(http.StatusNotFound, productErr)
		return
	}
	c.JSON(http.StatusOK, beer)

}

func CreateProduct(c *gin.Context) {
	db := database.GetDataBase()

	var beer models.Beer
	if err := c.ShouldBindJSON(&beer); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"Error": err.Error()})
		return
	}

	if err := db.Create(&beer).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"Error": err.Error()})
		return
	}

	c.JSON(200, beer)
}

func UpdateProduct(c *gin.Context) {
	idParam := c.Param("id")
	id, err := strconv.Atoi(idParam)
	if err != nil {
		idErr := errors.NewBadRequestError("Id must be a integer")
		c.JSON(idErr.Status, idErr)
	}
	db := database.GetDataBase()
	var beer models.Beer
	err = db.First(&beer, id).Error
	if err != nil {
		productErr := errors.NewBadRequestError("Product not found")
		c.JSON(http.StatusNotFound, productErr)
		return
	}

	if err := c.ShouldBindJSON(&beer); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"Error": err.Error()})
		return
	}
	if err := db.Save(&beer).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"Error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, &beer)
}

func DeleteProduct(c *gin.Context) {
	idParam := c.Param("id")
	id, err := strconv.Atoi(idParam)
	if err != nil {
		idErr := errors.NewBadRequestError("Id must be a integer")
		c.JSON(idErr.Status, idErr)
	}
	db := database.GetDataBase()
	if err := db.Delete(&models.Beer{}, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"Error": "Product not found"})
	}
	c.JSON(200, nil)
}
