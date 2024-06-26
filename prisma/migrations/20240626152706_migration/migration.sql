-- CreateTable
CREATE TABLE "generator_images" (
    "id" SERIAL NOT NULL,
    "generator_id" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL,

    CONSTRAINT "generator_images_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "generator_images" ADD CONSTRAINT "generator_images_generator_id_fkey" FOREIGN KEY ("generator_id") REFERENCES "generators"("id") ON DELETE CASCADE ON UPDATE CASCADE;
