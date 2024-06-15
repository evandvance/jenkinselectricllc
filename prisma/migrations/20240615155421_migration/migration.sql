/*
  Warnings:

  - Added the required column `description` to the `appliances` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "appliances" ADD COLUMN     "description" TEXT NOT NULL;
