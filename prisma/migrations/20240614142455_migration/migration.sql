/*
  Warnings:

  - A unique constraint covering the columns `[appliance_id]` on the table `appliance_images` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[image_url]` on the table `appliance_images` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `age` to the `appliances` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `appliances` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "appliance_types" AS ENUM ('dryer', 'washer', 'dishwasher', 'fridge', 'freezer', 'microwave', 'stoves', 'windowAcUnits', 'iceMakers', 'industrial', 'other');

-- CreateEnum
CREATE TYPE "appliance_ages" AS ENUM ('Used', 'New');

-- AlterTable
ALTER TABLE "appliances" ADD COLUMN     "age" "appliance_ages" NOT NULL,
ADD COLUMN     "type" "appliance_types" NOT NULL,
ALTER COLUMN "is_reserved" SET DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "appliance_images_appliance_id_key" ON "appliance_images"("appliance_id");

-- CreateIndex
CREATE UNIQUE INDEX "appliance_images_image_url_key" ON "appliance_images"("image_url");
