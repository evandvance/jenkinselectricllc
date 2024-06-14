/*
  Warnings:

  - The values [None] on the enum `access_level` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `image_url` on the `appliances` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "access_level_new" AS ENUM ('Admin', 'null');
ALTER TABLE "users" ALTER COLUMN "access_level" DROP DEFAULT;
ALTER TABLE "users" ALTER COLUMN "access_level" TYPE "access_level_new" USING ("access_level"::text::"access_level_new");
ALTER TYPE "access_level" RENAME TO "access_level_old";
ALTER TYPE "access_level_new" RENAME TO "access_level";
DROP TYPE "access_level_old";
ALTER TABLE "users" ALTER COLUMN "access_level" SET DEFAULT 'null';
COMMIT;

-- AlterTable
ALTER TABLE "appliances" DROP COLUMN "image_url";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "access_level" SET DEFAULT 'null';

-- CreateTable
CREATE TABLE "appliance_images" (
    "id" SERIAL NOT NULL,
    "appliance_id" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL,

    CONSTRAINT "appliance_images_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "appliance_images_appliance_id_idx" ON "appliance_images"("appliance_id");

-- AddForeignKey
ALTER TABLE "appliance_images" ADD CONSTRAINT "appliance_images_appliance_id_fkey" FOREIGN KEY ("appliance_id") REFERENCES "appliances"("id") ON DELETE CASCADE ON UPDATE CASCADE;
