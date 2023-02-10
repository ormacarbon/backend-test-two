package migrations

import (
	"github.com/ronanzindev/backend-test-two/models"
	"gorm.io/gorm"
)

func RunMigrations(db *gorm.DB) {
	db.AutoMigrate(models.Beer{})
}
