package tests

import (
	"backend-test-two/helpers"
	"fmt"
	"testing"

	"github.com/joho/godotenv"
)

func TestGetEnviromentalVariable(t *testing.T) {

	//Arrange
	envMap, err := godotenv.Read(".env")
	if err != nil {
		fmt.Println(err)
	} else {

		//Act
		result := helpers.GetEnviromentalVariable("MONGO_URI")

		//Assert
		if result != envMap["MONGO_ATLAS_URI"] {
			t.Errorf("GetEnviromentalVariable(MONGO_ATLAS_URI) FAILED. Expected %v, got %v.", envMap["MONGO_ATLAS_URI"], result)
		} else {
			t.Logf("GetEnviromentalVariable(MONGO_ATLAS_URI) PASSED. Expected %v, got %v.", envMap["MONGO_ATLAS_URI"], result)
		}
	}
}
