/*
  Warnings:

  - You are about to drop the column `controlID` on the `NoteSetting` table. All the data in the column will be lost.
  - Added the required column `controlType` to the `NoteSetting` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_NoteSetting" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "controlType" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    CONSTRAINT "NoteSetting_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_NoteSetting" ("id", "name", "order", "userId") SELECT "id", "name", "order", "userId" FROM "NoteSetting";
DROP TABLE "NoteSetting";
ALTER TABLE "new_NoteSetting" RENAME TO "NoteSetting";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
