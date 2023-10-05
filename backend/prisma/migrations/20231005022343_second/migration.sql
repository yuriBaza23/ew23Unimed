/*
  Warnings:

  - You are about to alter the column `percentege` on the `illness` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `cost` on the `illness` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `averageAge` on the `illness` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `womenPercentage` on the `illness` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "illness" ALTER COLUMN "percentege" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "cost" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "averageAge" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "womenPercentage" SET DATA TYPE VARCHAR(255);
