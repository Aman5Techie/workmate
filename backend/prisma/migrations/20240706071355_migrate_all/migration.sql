/*
  Warnings:

  - You are about to drop the column `Bid` on the `Task` table. All the data in the column will be lost.
  - The `amenties` column on the `Task` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `mode` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "Bid",
ADD COLUMN     "mode" TEXT NOT NULL,
DROP COLUMN "amenties",
ADD COLUMN     "amenties" INTEGER[];
