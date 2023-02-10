package server

import (
	"log"

	"github.com/gin-gonic/gin"
	"github.com/ronanzindev/backend-test-two/server/routers"
)

type Server struct {
	port   string
	server *gin.Engine
}

func NewServer() Server {
	return Server{port: "5000", server: gin.Default()}
}

func (s *Server) Run() {
	router := routers.ConfigRoutes(s.server)
	log.Printf("Server is running at port: %v", s.port)
	log.Fatal(router.Run(":" + s.port))
}
