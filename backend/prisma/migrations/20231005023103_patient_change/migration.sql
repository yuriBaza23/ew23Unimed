/*
  Warnings:

  - You are about to drop the column `age` on the `patient` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `patient` table. All the data in the column will be lost.
  - Added the required column `DPOCHistory` to the `patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `anxiety` to the `patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthdate` to the `patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emotionalLackOfControl` to the `patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `healthyEating` to the `patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hemodialysis` to the `patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `historicOfObesity` to the `patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `insomnia` to the `patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `respiratoryProblem` to the `patient` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `perCapitaIncome` on the `patient` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "patient" DROP COLUMN "age",
DROP COLUMN "city",
ADD COLUMN     "DPOCHistory" BOOLEAN NOT NULL,
ADD COLUMN     "anxiety" VARCHAR(255) NOT NULL,
ADD COLUMN     "birthdate" DATE NOT NULL,
ADD COLUMN     "emotionalLackOfControl" VARCHAR(255) NOT NULL,
ADD COLUMN     "healthyEating" BOOLEAN NOT NULL,
ADD COLUMN     "hemodialysis" BOOLEAN NOT NULL,
ADD COLUMN     "historicOfObesity" VARCHAR(255) NOT NULL,
ADD COLUMN     "insomnia" VARCHAR(255) NOT NULL,
ADD COLUMN     "name" VARCHAR(255) NOT NULL,
ADD COLUMN     "respiratoryProblem" BOOLEAN NOT NULL,
DROP COLUMN "perCapitaIncome",
ADD COLUMN     "perCapitaIncome" INTEGER NOT NULL;
