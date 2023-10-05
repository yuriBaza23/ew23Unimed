/*
  Warnings:

  - You are about to drop the column `question` on the `metric` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[uestion]` on the table `metric` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `uestion` to the `metric` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "metric_question_key";

-- AlterTable
ALTER TABLE "illness" ALTER COLUMN "percentege" DROP NOT NULL,
ALTER COLUMN "cost" DROP NOT NULL,
ALTER COLUMN "averageAge" DROP NOT NULL,
ALTER COLUMN "womenPercentage" DROP NOT NULL;

-- AlterTable
ALTER TABLE "metric" DROP COLUMN "question",
ADD COLUMN     "uestion" VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "metric_uestion_key" ON "metric"("uestion");
