/*
  Warnings:

  - You are about to drop the column `clienteId` on the `service` table. All the data in the column will be lost.
  - You are about to drop the `cliente` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `patientId` to the `service` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "service" DROP CONSTRAINT "service_clienteId_fkey";

-- AlterTable
ALTER TABLE "service" DROP COLUMN "clienteId",
ADD COLUMN     "patientId" UUID NOT NULL;

-- DropTable
DROP TABLE "cliente";

-- CreateTable
CREATE TABLE "patient" (
    "id" UUID NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "gender" VARCHAR(255) NOT NULL,
    "age" INTEGER NOT NULL,
    "peopleWhoLivesWith" INTEGER NOT NULL,
    "perCapitaIncome" VARCHAR(255) NOT NULL,
    "schooling" VARCHAR(255) NOT NULL,
    "alcoholFrequence" VARCHAR(255) NOT NULL,
    "smokingFrequence" VARCHAR(255) NOT NULL,
    "workoutFrequence" VARCHAR(255) NOT NULL,
    "historicOfCancer" VARCHAR(255) NOT NULL,
    "historicOfDiabetes" VARCHAR(255) NOT NULL,

    CONSTRAINT "patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "address" (
    "id" UUID NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "state" VARCHAR(255) NOT NULL,
    "patientId" UUID NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);
