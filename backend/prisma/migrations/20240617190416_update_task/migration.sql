/*
  Warnings:

  - Added the required column `State` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city_district` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `latitide` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_taskid_fkey";

-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_userid_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_taskId_fkey";

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "State" TEXT NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "city_district" TEXT NOT NULL,
ADD COLUMN     "latitide" TEXT NOT NULL,
ADD COLUMN     "longitude" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_taskid_fkey" FOREIGN KEY ("taskid") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;
