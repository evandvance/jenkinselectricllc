/*
  Warnings:

  - You are about to drop the column `is_reserved` on the `appliances` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `appliances` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to drop the column `phone_number` on the `technicians` table. All the data in the column will be lost.
  - You are about to drop the column `access_level` on the `users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "appliance_images_appliance_id_key";

-- AlterTable
ALTER TABLE "appliances" DROP COLUMN "is_reserved",
ALTER COLUMN "price" SET DATA TYPE DECIMAL(65,30);

-- AlterTable
ALTER TABLE "technicians" DROP COLUMN "phone_number";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "access_level";

-- DropEnum
DROP TYPE "access_level";

-- CreateTable
CREATE TABLE "reservations" (
    "id" SERIAL NOT NULL,
    "appliance_id" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "reserved_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reservations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "reservations_appliance_id_key" ON "reservations"("appliance_id");

-- CreateIndex
CREATE UNIQUE INDEX "reservations_email_key" ON "reservations"("email");

-- CreateIndex
CREATE INDEX "reservations_email_idx" ON "reservations"("email");

-- AddForeignKey
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_appliance_id_fkey" FOREIGN KEY ("appliance_id") REFERENCES "appliances"("id") ON DELETE CASCADE ON UPDATE CASCADE;
