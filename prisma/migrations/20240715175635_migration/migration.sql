/*
  Warnings:

  - Added the required column `embeded_url` to the `permit_video` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "permit_video" ADD COLUMN     "embeded_url" TEXT NOT NULL;
