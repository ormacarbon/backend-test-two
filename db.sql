CREATE DATABASE companyx  COLLATE utf8_bin;

USE companyx;

CREATE TABLE IF NOT EXISTS BEERS (
	`id` INT AUTO_INCREMENT PRIMARY KEY,
    `abv` NUMERIC(20, 18) NOT NULL,
    `ibu` INT NOT NULL,
    `address` VARCHAR(100),
    `category` VARCHAR(100),
    `city` VARCHAR(50),
    `latitude` NUMERIC(25, 23),
	`longitude` NUMERIC(25, 23),
    `country` VARCHAR(50),
    `description` VARCHAR(4096),
    `name` VARCHAR(100),
    `state` VARCHAR(50),
    `website` VARCHAR(50)
);