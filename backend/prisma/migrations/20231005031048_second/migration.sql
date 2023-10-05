-- AddForeignKey
ALTER TABLE "metric" ADD CONSTRAINT "metric_illnessId_fkey" FOREIGN KEY ("illnessId") REFERENCES "illness"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
