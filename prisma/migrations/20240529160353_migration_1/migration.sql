-- CreateTable
CREATE TABLE "Technician" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "phone_number" TEXT,
    "bio" TEXT NOT NULL,
    "isCertified" BOOLEAN NOT NULL DEFAULT false,
    "image" TEXT NOT NULL,

    CONSTRAINT "Technician_pkey" PRIMARY KEY ("id")
);
