-- CreateTable
CREATE TABLE "brewery" (
    "id" TEXT NOT NULL,
    "abv" DOUBLE PRECISION,
    "address" TEXT,
    "category" TEXT,
    "city" TEXT,
    "coordinates" DECIMAL(65,30)[],
    "country" TEXT,
    "description" TEXT,
    "ibu" INTEGER NOT NULL,
    "name" TEXT,
    "state" TEXT,
    "website" TEXT,

    CONSTRAINT "brewery_pkey" PRIMARY KEY ("id")
);
