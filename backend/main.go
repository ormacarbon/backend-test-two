package main

import (
	"github.com/ronanzindev/backend-test-two/database"
	"github.com/ronanzindev/backend-test-two/server"
)

func main() {
	database.StartDB()
	database.PopulateDB()
	server := server.NewServer()
	server.Run()
}
