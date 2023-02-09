package Models

import(

	"gorm.io/gorm"

)

// Defines Beer type, with its attributes. 
// Also sets how they appear on json, to keep original format.
// Latitude and Longitude are ommited on json;
// Coordinates is ommited for DB
type Beer struct{
	
	ID		uint `json:"id" gorm:"->"`
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
	Coordinates []float64 `json:"coordinates,omitempty" gorm:"-"`
	Latitude float64 `json:"-"`
	Longitude float64 `json:"-"`

}

// Creates the new beer.
//
// A successful creation return err = nil;
// Returns error otherwise.
// Data is passed through reference.
func CreateBeer( db *gorm.DB, Beer *Beer ) ( err error ) {

	// Basic insert query.
	// Uses GORM default Conventions
	err = db.Create( Beer ).Error
	
	// Checks for errors
	if err != nil {
		return err
	}

	return nil

}

// Creates new beers in batch.
//
// A successful creation return err = nil;
// Returns error otherwise.
// Data is passed through reference.
func CreateBeers( db *gorm.DB, Beers *[]Beer ) ( err error ) {

	// Basic insert query. Insert in batches of 5000 due to 
	// MySQL limits.
	// Uses GORM default Conventions
	err = db.CreateInBatches( Beers, 5000 ).Error
	
	// Checks for errors
	if err != nil {
		return err
	}

	return nil

}

// Look up for a identified beer.
//
// A successful select return err = nil;
// Returns error otherwise.
// Data is passed through reference.
func GetBeer( db *gorm.DB, Beer *Beer, id int ) ( err error ) {

	// Basic select with WHERE query.
	// Uses GORM default Conventions
	err = db.Where( "id = ?", id ).First( Beer ).Error
	
	// Checks for errors
	if err != nil {
		return err
	}

	return nil

}

// Gets all beers.
//
// A successful select return err = nil;
// Returns error otherwise.
// Data is passed through reference.
func GetBeers( db *gorm.DB, Beers *[]Beer ) ( err error ) {

	// Basic select query.
	// Uses GORM default Conventions
	err = db.Find( Beers ).Error
	
	// Checks for errors
	if err != nil {
		return err
	}

	return nil

}

// Updates identified beer.
//
// A successful update return err = nil;
// Returns error otherwise.
// Data is passed through reference.
func UpdateBeer( db *gorm.DB, Beer *Beer ) ( err error ) {

	// Basic update query.
	// Uses GORM default Conventions
	err = db.Save( Beer ).Error

	// Checks for errors
	if err != nil {
		return err
	}
	
	return nil

}

// Delete identified beer.
//
// A successful deletion return err = nil;
// Returns error otherwise.
func DeleteBeer( db *gorm.DB, Beer *Beer, id int ) ( err error ) {

	// Basic delete query.
	// Uses GORM default Conventions
	err = db.Where( "id = ?", id ).Delete( Beer ).Error
	
	// Checks for errors
	if err != nil {
		return err
	}

	return nil

}