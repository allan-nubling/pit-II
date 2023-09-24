/*
  Warnings:

  - You are about to drop the column `name` on the `Client` table. All the data in the column will be lost.
  - You are about to alter the column `phone` on the `Client` table. The data in that column could be lost. The data in that column will be cast from `VarChar(16)` to `Char(11)`.
  - Added the required column `firstName` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Client" DROP COLUMN "name",
ADD COLUMN     "firstName" VARCHAR(64) NOT NULL,
ADD COLUMN     "lastName" VARCHAR(64) NOT NULL,
ALTER COLUMN "phone" SET DATA TYPE CHAR(11);
