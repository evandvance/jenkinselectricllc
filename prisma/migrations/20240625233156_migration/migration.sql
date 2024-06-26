/*
  Warnings:

  - You are about to drop the `Generator` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "appliance_images" DROP CONSTRAINT "appliance_images_generator_id_fkey";

-- DropForeignKey
ALTER TABLE "reservations" DROP CONSTRAINT "reservations_generator_id_fkey";

-- DropTable
DROP TABLE "Generator";

-- CreateTable
CREATE TABLE "Generators" (
    "id" SERIAL NOT NULL,
    "generator_name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "model_number" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "brand" "generator_types" NOT NULL,

    CONSTRAINT "Generators_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "appliance_images" ADD CONSTRAINT "appliance_images_generator_id_fkey" FOREIGN KEY ("generator_id") REFERENCES "Generators"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_generator_id_fkey" FOREIGN KEY ("generator_id") REFERENCES "Generators"("id") ON DELETE CASCADE ON UPDATE CASCADE;
