/*
  Warnings:

  - Added the required column `city` to the `reservations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `reservations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `reservations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `reservations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_number` to the `reservations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `reservations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `reservations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zip` to the `reservations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "reservations" ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "last_name" TEXT NOT NULL,
ADD COLUMN     "number" INTEGER NOT NULL,
ADD COLUMN     "phone_number" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "street" TEXT NOT NULL,
ADD COLUMN     "zip" INTEGER NOT NULL;
