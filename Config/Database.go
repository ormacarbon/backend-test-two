package Config

import(

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"fmt"

)

const DB_HOST = "localhost"
const DB_NAME = "companyx"
const DB_USER = "root"
const DB_PASSWORD = ""
const DB_PORT = "3306"

var Db *gorm.DB

func InitDb() *gorm.DB {

	Db = connectDB()
	return Db

}

func connectDB() ( *gorm.DB ) {

	var err error
	dsn := DB_USER +":"+ DB_PASSWORD +"@tcp"+ "(" + DB_HOST + ":" + DB_PORT +")/" + DB_NAME + "?" + "parseTime=true&loc=Local"
	db, err := gorm.Open( mysql.Open( dsn ), &gorm.Config{} )

	if err != nil {

		fmt.Println( "Error: %v", err )
		return nil
	
	}

	return db

}