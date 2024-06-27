/*
  Warnings:

  - You are about to drop the column `generator_id` on the `reservations` table. All the data in the column will be lost.
  - You are about to drop the `generator_images` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `generators` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
ALTER TYPE "appliance_types" ADD VALUE 'generator';

-- DropForeignKey
ALTER TABLE "generator_images" DROP CONSTRAINT "generator_images_generator_id_fkey";

-- DropForeignKey
ALTER TABLE "reservations" DROP CONSTRAINT "reservations_generator_id_fkey";

-- DropIndex
DROP INDEX "reservations_generator_id_key";

-- AlterTable
ALTER TABLE "reservations" DROP COLUMN "generator_id";

-- DropTable
DROP TABLE "generator_images";

-- DropTable
DROP TABLE "generators";

-- DropEnum
DROP TYPE "generator_types";
