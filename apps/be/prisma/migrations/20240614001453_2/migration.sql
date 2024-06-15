/*
  Warnings:

  - You are about to drop the column `completed` on the `Todo` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "TodoType" AS ENUM ('TODO', 'DOING', 'DONE');

-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "completed",
ADD COLUMN     "type" "TodoType" NOT NULL DEFAULT 'TODO';
