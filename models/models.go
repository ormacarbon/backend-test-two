package models

type Location struct {
	Abv         float64   `json:"abv,omitempty" bson:",omitempty"`
	Address     string    `json:"address,omitempty" bson:",omitempty"`
	Category    string    `json:"category,omitempty" bson:",omitempty"`
	City        string    `json:"city,omitempty" bson:",omitempty"`
	Coordinates []float64 `json:"coordinates,omitempty" bson:",omitempty"`
	Country     string    `json:"country,omitempty" bson:",omitempty"`
	Description string    `json:"description,omitempty" bson:",omitempty"`
	Ibu         int       `json:"ibu,omitempty" bson:",omitempty"`
	Name        string    `json:"name,omitempty" bson:",omitempty"`
	State       string    `json:"state,omitempty" bson:",omitempty"`
	Website     string    `json:"website,omitempty" bson:",omitempty"`
}
