/*
  Warnings:

  - The values [windowacunit] on the enum `appliance_types` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "appliance_types_new" AS ENUM ('dryer', 'washer', 'dishwasher', 'fridge', 'freezer', 'microwave', 'stoves', 'windowunit', 'icemaker', 'industrial', 'dryerwashersets', 'other');
ALTER TABLE "appliances" ALTER COLUMN "type" TYPE "appliance_types_new" USING ("type"::text::"appliance_types_new");
ALTER TYPE "appliance_types" RENAME TO "appliance_types_old";
ALTER TYPE "appliance_types_new" RENAME TO "appliance_types";
DROP TYPE "appliance_types_old";
COMMIT;
