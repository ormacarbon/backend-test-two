package main

import (

	"test-two/companyx/Routes"
	"test-two/companyx/Config"

)

func main() {

	_ = Config.InitDb()

	r := Routes.SetupRouter()
	_ = r.Run(":8080")

}

