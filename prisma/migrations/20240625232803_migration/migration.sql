/*
  Warnings:

  - A unique constraint covering the columns `[generator_id]` on the table `reservations` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "generator_types" AS ENUM ('Champion', 'Duramax', 'Generac');

-- AlterTable
ALTER TABLE "appliance_images" ADD COLUMN     "generator_id" INTEGER,
ALTER COLUMN "appliance_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "reservations" ADD COLUMN     "generator_id" INTEGER,
ALTER COLUMN "appliance_id" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Generator" (
    "id" SERIAL NOT NULL,
    "generator_name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "model_number" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "brand" "generator_types" NOT NULL,

    CONSTRAINT "Generator_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "reservations_generator_id_key" ON "reservations"("generator_id");

-- AddForeignKey
ALTER TABLE "appliance_images" ADD CONSTRAINT "appliance_images_generator_id_fkey" FOREIGN KEY ("generator_id") REFERENCES "Generator"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_generator_id_fkey" FOREIGN KEY ("generator_id") REFERENCES "Generator"("id") ON DELETE CASCADE ON UPDATE CASCADE;
