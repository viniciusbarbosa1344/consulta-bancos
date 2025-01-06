-- CreateTable
CREATE TABLE `bancos` (
    `Código de compensação` INTEGER NOT NULL,
    `Nome Instituição` VARCHAR(191) NULL,

    PRIMARY KEY (`Código de compensação`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
