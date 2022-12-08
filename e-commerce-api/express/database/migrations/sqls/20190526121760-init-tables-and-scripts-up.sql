DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
    `id` INT,
    `name` VARCHAR(255),
    `price` DECIMAL(10, 2)

    PRIMARY KEY (`id`)
);