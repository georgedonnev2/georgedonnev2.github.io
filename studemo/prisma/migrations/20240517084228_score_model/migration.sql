-- CreateTable
CREATE TABLE `score` (
    `jnuid` INTEGER NOT NULL,
    `course` VARCHAR(191) NOT NULL,
    `score` INTEGER NOT NULL,

    PRIMARY KEY (`jnuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
