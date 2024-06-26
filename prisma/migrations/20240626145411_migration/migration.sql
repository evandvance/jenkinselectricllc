/*
  Warnings:

  - You are about to drop the column `generator_id` on the `appliance_images` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "appliance_images" DROP CONSTRAINT "appliance_images_generator_id_fkey";

-- AlterTable
ALTER TABLE "appliance_images" DROP COLUMN "generator_id";
