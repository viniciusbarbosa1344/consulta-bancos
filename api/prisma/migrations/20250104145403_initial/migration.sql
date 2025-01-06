-- CreateTable
CREATE TABLE "bancos" (
    "Código de compensação" INTEGER NOT NULL,
    "Nome Instituição" VARCHAR(64),

    CONSTRAINT "bancos_pkey" PRIMARY KEY ("Código de compensação")
);
