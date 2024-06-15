/*
  Warnings:

  - You are about to drop the `_OrderToTag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_OrderToTag" DROP CONSTRAINT "_OrderToTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_OrderToTag" DROP CONSTRAINT "_OrderToTag_B_fkey";

-- DropTable
DROP TABLE "_OrderToTag";

-- CreateTable
CREATE TABLE "_TaskToTag" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_TaskToTag_AB_unique" ON "_TaskToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_TaskToTag_B_index" ON "_TaskToTag"("B");

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TaskToTag" ADD CONSTRAINT "_TaskToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TaskToTag" ADD CONSTRAINT "_TaskToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;
