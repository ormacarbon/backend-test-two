/*
  Warnings:

  - Made the column `abv` on table `brewery` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "brewery" ALTER COLUMN "abv" SET NOT NULL;
