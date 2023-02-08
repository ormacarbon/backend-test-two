package helpers

import (
	"github.com/joho/godotenv"
)

func GetEnviromentalVariable(variableName string) string {
	envMap, err := godotenv.Read(".env")
	if err != nil{
		panic(err)
	}
	return envMap[variableName]
}