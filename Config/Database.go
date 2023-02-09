package Config

import(

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"fmt"

)

// DB connection details
const DB_HOST = "localhost"
const DB_NAME = "companyx"
const DB_USER = "root"
const DB_PASSWORD = ""
const DB_PORT = "3306"

// Connection variable, which can be accessed with Config.Db after initialized
var Db *gorm.DB

// Public function for DB initialization
func InitDb() *gorm.DB {

	Db = connectDB()
	return Db

}

func connectDB() ( *gorm.DB ) {

	var err error
	// String for mysql connection, setting up details
	dsn := DB_USER +":"+ DB_PASSWORD +"@tcp"+ "(" + DB_HOST + ":" + DB_PORT +")/" + DB_NAME + "?" + "parseTime=true&loc=Local"
	db, err := gorm.Open( mysql.Open( dsn ), &gorm.Config{} ) // Open connection

	if err != nil {

		fmt.Println( "Error: %v", err )
		return nil
	
	}

	return db

}