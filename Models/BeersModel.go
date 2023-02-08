package Models

import(

	"gorm.io/gorm"

)

// Defines Beer type, with its attributes. 
// Also sets how they appear on json, to keep original format.
type Beer struct{
	
	ID		uint `json:"id"`
	Abv		float64 `json:"abv,omitempty"`
	Ibu		uint `json:"ibu,omitempty"`
	Address string `json:"address,omitempty"`
	Category string `json:"category,omitempty"`
	City 	string `json:"city,omitempty"`
	Country	string `json:"country,omitempty"`
	Description string `json:"description,omitempty"`
	Name	string `json:"name,omitempty"`
	State	string `json:"state,omitempty"`
	Website string `json:"website,omitempty"`
	Coordinates []float64 `json:"coordinates,omitempty"`

}

// Creates the new beer.
//
// A successful creation return err = nil;
// Returns error otherwise.
func CreateBeer( db *gorm.DB, Beer *Beer ) (err error) {

	// Basic insert SQL. It breaks Coordinates attribute in two, them being BRS_LATITUDE and BRS_LONGITUDE
	err = db.Exec( "INSERT INTO `beers` (`BRS_ABV`, `BRS_IBU`, `BRS_ADDRESS`, `BRS_CATEGORY`, `BRS_CITY`, `BRS_LATITUDE`, `BRS_LONGITUDE`, `BRS_COUNTRY`, `BRS_DESCRIPTION`, `BRS_NAME`, `BRS_STATE`, `BRS_WEBSITE`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);", Beer.Abv, Beer.Ibu, Beer.Address, Beer.Category, Beer.City, Beer.Coordinates[0], Beer.Coordinates[1], Beer.Country, Beer.Description, Beer.Name, Beer.State, Beer.Website ).Error
	
	if err != nil {
		return err
	}

	return nil

}