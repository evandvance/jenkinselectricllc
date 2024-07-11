-- CreateTable
CREATE TABLE "permit_instructions" (
    "id" SERIAL NOT NULL,
    "image_url" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "permit_instructions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permit_video" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "permit_video_pkey" PRIMARY KEY ("id")
);
