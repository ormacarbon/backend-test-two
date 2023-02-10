package database

import (
	"fmt"
	"log"
	"os"
	"time"

	"github.com/joho/godotenv"
	"github.com/ronanzindev/backend-test-two/database/migrations"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var db *gorm.DB

func readEnvs(key string) string {
	godotenv.Load(".env")
	return os.Getenv(key)
}

var (
	DB_USER     string = readEnvs("DB_USER")
	DB_PASSWORD string = readEnvs("DB_PASSWORD")
	DB_HOST     string = readEnvs("DB_HOST")
	DB_DATABASE string = readEnvs("DB_DATABASE")
	DB_POST     string = readEnvs("DB_POST")
)

func StartDB() {
	url := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable TimeZone=America/Sao_Paulo",
		DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_POST)
	database, err := gorm.Open(postgres.Open(url), &gorm.Config{SkipDefaultTransaction: true})
	if err != nil {
		log.Fatal("error :", err)
	}
	db = database
	config, _ := db.DB()
	config.SetMaxIdleConns(10)
	config.SetMaxOpenConns(10)
	config.SetConnMaxLifetime(time.Hour)
	migrations.RunMigrations(db)
}

func GetDataBase() *gorm.DB {
	return db
}
