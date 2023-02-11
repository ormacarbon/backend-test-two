package helpers

import (
	"fmt"
	"testing"

	"github.com/joho/godotenv"
)

func GetEnviromentalVariable(variableName string) string {
	envMap, err := godotenv.Read(".env")

	if err != nil {
		fmt.Println("YOU NEED TO CREATE AN .ENV FILE AND PUT 'MONGO_URI=<YOUR MONGO URI>'")
	}

	return envMap[variableName]
}

func HandleError(err error) {
	if err != nil {
		fmt.Println(err)
	}
}

func HandleErrorTest(err error, t *testing.T) {
	if err != nil {
		t.Error(err)
	}
}
