package models

import (
	"github.com/lib/pq"
	"gorm.io/gorm"
)

type Beer struct {
	gorm.Model
	Abv         float64         `json:"abv" gorm:"type:float"`
	Address     string          `json:"address"`
	Category    string          `json:"category"`
	City        string          `json:"city"`
	Coordinates pq.Float64Array `json:"coordinates" gorm:"type:float[]"`
	Country     string          `json:"country"`
	Description string          `json:"description"`
	Ibu         int             `json:"ibu"`
	Name        string          `json:"name" binding:"required"`
	State       string          `json:"state"`
	Website     string          `json:"website"`
}
