/*
  Warnings:

  - You are about to drop the column `illnessId` on the `metric` table. All the data in the column will be lost.
  - Added the required column `metrics` to the `illness` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "metric" DROP CONSTRAINT "metric_illnessId_fkey";

-- AlterTable
ALTER TABLE "illness" ADD COLUMN     "metrics" JSON NOT NULL;

-- AlterTable
ALTER TABLE "metric" DROP COLUMN "illnessId";
