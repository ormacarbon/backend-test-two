/*
  Warnings:

  - Made the column `abv` on table `Beer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ibu` on table `Beer` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Beer" ALTER COLUMN "abv" SET NOT NULL,
ALTER COLUMN "ibu" SET NOT NULL;
