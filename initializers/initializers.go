package initializers

import (
	"context"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func ConnectToAtlas(uri string) (*mongo.Client, error) {

	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI(uri))

	return client, err
}

func DisconnectFromAtlas(client mongo.Client) error {

	err := client.Disconnect(context.TODO())

	return err
}
