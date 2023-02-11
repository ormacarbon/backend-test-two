-- CreateTable
CREATE TABLE "Beer" (
    "id" TEXT NOT NULL,
    "abv" DOUBLE PRECISION,
    "address" TEXT,
    "category" TEXT,
    "city" TEXT,
    "coordinates" DOUBLE PRECISION[],
    "country" TEXT,
    "description" TEXT,
    "ibu" INTEGER,
    "name" TEXT,
    "state" TEXT,
    "website" TEXT,

    CONSTRAINT "Beer_pkey" PRIMARY KEY ("id")
);
