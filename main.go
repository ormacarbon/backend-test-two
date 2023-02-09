package main

import (

	"test-two/companyx/Routes"
	"test-two/companyx/Config"

)

func main() {

	// Initialize DB connection
	_ = Config.InitDb()

	// Set up routes and run on port 8080
	r := Routes.SetupRouter()
	_ = r.Run(":8080")

}

