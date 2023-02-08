package main

import (
	"backend-test-two/helpers"
	"backend-test-two/initializers"
)

func main() {
	//Connect to Atlas
	uri := helpers.GetEnviromentalVariable("MONGO_ATLAS_URI")
	client := initializers.ConnectToAtlas(uri,"backend","backend-test")
	
	//Disconnecting from Atlas
	initializers.DisconnectFromAtlas(*client)
}