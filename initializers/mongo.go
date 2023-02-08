package initializers

import (
	"context"
	"fmt"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func ConnectToAtlas(uri string) *mongo.Client{

	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI(uri))

	if err != nil{
		panic(err)
	}

	fmt.Println("Connected to Atlas")

	return client
}

func DisconnectFromAtlas(client mongo.Client){
	
	err := client.Disconnect(context.TODO())
	if err != nil {
		panic(err)
	}
	
	fmt.Println("Disconnected from Atlas")
}