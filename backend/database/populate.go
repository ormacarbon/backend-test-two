package database

import (
	"bytes"
	"encoding/json"
	"fmt"
	"log"
	"os"

	"github.com/ronanzindev/backend-test-two/models"
)

func PopulateDB() {
	db := GetDataBase()
	var beers []models.Beer
	err := db.Find(&beers).Error
	if err != nil {
		fmt.Println(err)
	}
	if len(beers) == 0 {
		byteValue, _ := os.ReadFile("db.json")
		dec := json.NewDecoder(bytes.NewReader(byteValue))
		dec.Decode(&beers)
		err = db.CreateInBatches(&beers, 1000).Error
		if err != nil {
			log.Fatal(err)
		}

	}
}
