package helpers

import (
	"fmt"
	"testing"

	"github.com/joho/godotenv"
)

func GetEnviromentalVariable(variableName string) (string, error) {
	envMap, err := godotenv.Read(".env")

	return envMap[variableName], err
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
