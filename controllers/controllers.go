package controllers

import (
	"backend-test-two/helpers"
	"backend-test-two/initializers"
	"backend-test-two/models"
	"context"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	_ "github.com/mitchellh/mapstructure"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var mongoEnv = "MONGO_ATLAS_URI"
var database = "backend"
var collection = "backend-test"

// API CONTROLLERS
func CreateLocation(c *gin.Context) {
	//Connect to Atlas
	uri := helpers.GetEnviromentalVariable(mongoEnv)
	client := initializers.ConnectToAtlas(uri)

	var location models.Location

	if err := c.BindJSON(&location); err != nil {
		fmt.Println(location)
		c.AbortWithError(http.StatusBadRequest, err)
		return
	}
	coll := client.Database(database).Collection(collection)

	res, err := coll.InsertOne(context.Background(), location)

	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println(res)
		fmt.Println(c.ClientIP())
		c.IndentedJSON(http.StatusOK, gin.H{"message": "location inserted."})
	}

	//Disconnect from Atlas
	initializers.DisconnectFromAtlas(*client)
}

func GetAllLocations(c *gin.Context) {
	//Connect to Atlas
	uri := helpers.GetEnviromentalVariable(mongoEnv)
	client := initializers.ConnectToAtlas(uri)

	coll := client.Database(database).Collection(collection)

	findOptions := options.Find()

	cur, err := coll.Find(context.TODO(), bson.D{}, findOptions)
	if err != nil {
		panic(err)
	}
	var documents []models.Location

	for cur.Next(context.TODO()) {
		var location models.Location
		err := cur.Decode(&location)
		if err != nil {
			fmt.Println(err)
		}
		documents = append(documents, location)
	}

	c.IndentedJSON(http.StatusOK, gin.H{"test": documents})

	//Disconnect from Atlas
	initializers.DisconnectFromAtlas(*client)
}

func GetLocationById(c *gin.Context) {
	//Connect to Atlas
	uri := helpers.GetEnviromentalVariable(mongoEnv)
	client := initializers.ConnectToAtlas(uri)

	//Configure parameters
	locationId := c.Param("id")

	locationIdPrimitive, err := primitive.ObjectIDFromHex(locationId)
	if err != nil {
		fmt.Println(err)
	}
	//Update location and send response
	coll := client.Database(database).Collection(collection)
	sr := coll.FindOne(context.TODO(), bson.M{"_id": locationIdPrimitive})
	if sr.Err() != nil {
		fmt.Println(sr.Err())
	} else {
		var location models.Location
		sr.Decode(&location)
		c.IndentedJSON(http.StatusOK, gin.H{"location": location})
	}

	//Disconnect from Atlas
	initializers.DisconnectFromAtlas(*client)
}

func UpdateLocationsById(c *gin.Context) {
	//Connect to Atlas
	uri := helpers.GetEnviromentalVariable(mongoEnv)
	client := initializers.ConnectToAtlas(uri)

	//Configure parameters
	locationId := c.Param("id")
	var update models.Location
	err := c.BindJSON(&update)
	if err != nil {
		fmt.Println(err)
	}
	locationIdPrimitive, err := primitive.ObjectIDFromHex(locationId)
	if err != nil {
		fmt.Println(err)
	}

	//Update location and send response
	coll := client.Database(database).Collection(collection)
	sr, err := coll.UpdateByID(context.Background(), locationIdPrimitive, bson.M{"$set": update})
	if err != nil {
		fmt.Println(err)
	} else {
		c.IndentedJSON(http.StatusOK, gin.H{"message": sr.MatchedCount, "update": update})
	}

	//Disconnect from Atlas
	initializers.DisconnectFromAtlas(*client)
}

func DeleteLocationById(c *gin.Context) {
	//Connect to Atlas
	uri := helpers.GetEnviromentalVariable(mongoEnv)
	client := initializers.ConnectToAtlas(uri)

	//Configure parameters
	localtionId := c.Param("id")
	localtionIdPrimitive, err := primitive.ObjectIDFromHex(localtionId)
	if err != nil {
		fmt.Println(err)
	}

	//Delete location
	coll := client.Database(database).Collection(collection)
	dr, err := coll.DeleteOne(context.TODO(), bson.M{"_id": localtionIdPrimitive})
	if err != nil {
		fmt.Println(err)
	}
	c.IndentedJSON(http.StatusOK, gin.H{"message": dr.DeletedCount})

	//Disconnect from Atlas
	initializers.DisconnectFromAtlas(*client)
}

// FRONTEND CONTROLLERS
func Index(c *gin.Context) {
	c.HTML(http.StatusOK, "index.html", gin.H{"content": "homepage"})
}
