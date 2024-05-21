-- CreateTable
CREATE TABLE `students` (
    `jnuid` INTEGER NOT NULL,
    `name` VARCHAR(20) NOT NULL,
    `gender` CHAR(1) NOT NULL,
    `birthday` DATETIME(0) NOT NULL,
    `cellphone` CHAR(11) NULL,
    `address` VARCHAR(255) NULL,
    `photo` LONGBLOB NULL,

    PRIMARY KEY (`jnuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

