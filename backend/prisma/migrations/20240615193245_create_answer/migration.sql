-- CreateTable
CREATE TABLE "Answer" (
    "id" SERIAL NOT NULL,
    "questions" TEXT[],
    "answers" TEXT[],
    "userid" TEXT NOT NULL,
    "taskid" TEXT NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_taskid_fkey" FOREIGN KEY ("taskid") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
