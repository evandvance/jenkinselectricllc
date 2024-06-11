/*
  Warnings:

  - You are about to drop the `Technician` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "access_level" AS ENUM ('Admin', 'None');

-- DropTable
DROP TABLE "Technician";

-- CreateTable
CREATE TABLE "technicians" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "phone_number" TEXT,
    "bio" TEXT NOT NULL,
    "is_certified" BOOLEAN NOT NULL DEFAULT false,
    "image_url" TEXT NOT NULL,

    CONSTRAINT "technicians_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "appliances" (
    "id" SERIAL NOT NULL,
    "appliance_name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "model_number" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "is_reserved" BOOLEAN NOT NULL,

    CONSTRAINT "appliances_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "access_level" "access_level" NOT NULL DEFAULT 'None',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "passwords" (
    "id" SERIAL NOT NULL,
    "password" TEXT NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usersId" INTEGER,

    CONSTRAINT "passwords_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "technicians_first_name_last_name_idx" ON "technicians"("first_name", "last_name");

-- CreateIndex
CREATE UNIQUE INDEX "technicians_first_name_last_name_key" ON "technicians"("first_name", "last_name");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "passwords" ADD CONSTRAINT "passwords_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
