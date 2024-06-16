/*
  Warnings:

  - A unique constraint covering the columns `[userid,taskid]` on the table `Answer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `amount` to the `Answer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Answer" ADD COLUMN     "amount" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "Answer_userid_taskid_key" ON "Answer"("userid", "taskid");
