CREATE DATABASE companyx  COLLATE utf8_bin;

USE companyx;

CREATE TABLE IF NOT EXISTS BEERS (
	`BRS_ID` INT AUTO_INCREMENT PRIMARY KEY,
    `BRS_ABV` NUMERIC(20, 18) NOT NULL,
    `BRS_IBU` INT NOT NULL,
    `BRS_ADDRESS` VARCHAR(100),
    `BRS_CATEGORY` VARCHAR(100),
    `BRS_CITY` VARCHAR(50),
    `BRS_LATITUDE` NUMERIC(25, 23),
	`BRS_LONGITUDE` NUMERIC(25, 23),
    `BRS_COUNTRY` VARCHAR(50),
    `BRS_DESCRIPTION` VARCHAR(4096),
    `BRS_NAME` VARCHAR(100),
    `BRS_STATE` VARCHAR(50),
    `BRS_WEBSITE` VARCHAR(50)
);