package tests

import (
	"backend-test-two/helpers"
	"backend-test-two/initializers"
	"context"
	"testing"

	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func TestConnectToAtlas(t *testing.T) {
	envMap, err := godotenv.Read(".env")
	if err != nil {
		t.Error(err)
	}
	uri := envMap["MONGO_ATLAS_URI"]

	client, err := initializers.ConnectToAtlas(uri)
	helpers.HandleErrorTest(err, t)
	if client == nil {
		t.Error("GetEnviromentalVariable(MONGO_ATLAS_URI) FAILED. Expected not nil, got nil.")
	} else {
		t.Log("GetEnviromentalVariable(MONGO_ATLAS_URI) PASSED. Expected not nil, got not nil.")
	}
}

func TestDiconnectFromAtlas(t *testing.T) {

	envMap, err := godotenv.Read(".env")

	if err != nil {
		t.Error(err)
	}

	uri := envMap["MONGO_ATLAS_URI"]

	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI(uri))
	helpers.HandleErrorTest(err, t)

	err = initializers.DisconnectFromAtlas(*client)
	helpers.HandleErrorTest(err, t)

}
