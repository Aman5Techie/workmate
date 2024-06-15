/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Tags` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Tags` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Tags" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Tags_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "Tags_id_key" ON "Tags"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Tags_name_key" ON "Tags"("name");
