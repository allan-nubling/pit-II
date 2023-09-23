-- CreateTable
CREATE TABLE "ClientAddress" (
    "id" SERIAL NOT NULL,
    "accountId" INTEGER NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "number" INTEGER NOT NULL,
    "neighborhood" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "state" VARCHAR(255) NOT NULL,
    "country" VARCHAR(255) NOT NULL,
    "zipcode" CHAR(8) NOT NULL,

    CONSTRAINT "ClientAddress_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ClientAddress" ADD CONSTRAINT "ClientAddress_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
