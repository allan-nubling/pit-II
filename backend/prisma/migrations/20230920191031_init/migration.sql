-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(128) NOT NULL,
    "name" VARCHAR(128) NOT NULL,
    "phone" VARCHAR(16) NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");
