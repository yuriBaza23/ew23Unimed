/*
  Warnings:

  - Added the required column `illnessId` to the `metric` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "metric" ADD COLUMN     "illnessId" UUID NOT NULL;
