DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
    `id` INT,
    `name` VARCHAR(255),
    `price` DECIMAL(10, 2),

    PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `discounts`;
CREATE TABLE IF NOT EXISTS `discounts` (
    `id` INT,
    `discount_percentage` INT,
    `price` INT,

    PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `done_seed_files`;
CREATE TABLE IF NOT EXISTS `done_seed_files` (
    `id` INT AUTO_INCREMENT,
    `filename` VARCHAR(255),

    PRIMARY KEY (`id`)
);

DROP PROCEDURE IF EXISTS `get_products`;
CREATE PROCEDURE `get_products` () 
BEGIN
    SELECT
        *
    FROM
        products;
END;

DROP PROCEDURE IF EXISTS `get_discounts`;
CREATE PROCEDURE `get_discounts` () 
BEGIN
    SELECT
        id,
        discount_percentage AS discountPercentage,
        price
    FROM
        discounts;
END;

DROP PROCEDURE IF EXISTS `create_product`;
CREATE PROCEDURE `create_product` (
    IN p_id INT,
    IN p_name VARCHAR(255),
    IN p_price DECIMAL(10, 2)
) BEGIN
    INSERT INTO products (
        id,
        `name`,
        price
    )
    VALUES
    (
        p_id,
        p_name,
        p_price
    );
END;

DROP PROCEDURE IF EXISTS `create_discount`;
CREATE PROCEDURE `create_discount` (
    IN p_id INT,
    IN p_discount_percentage INT,
    IN p_price INT
) BEGIN
    INSERT INTO discounts (
        id,
        discount_percentage,
        price
    )
    VALUES
    (
        p_id,
        p_discount_percentage,
        p_price
    );
END;

DROP PROCEDURE IF EXISTS `get_done_seed_file`;
CREATE PROCEDURE `get_done_seed_file` (
    IN p_filename VARCHAR(50)
) BEGIN
    SELECT
        *
    FROM
        done_seed_files
    WHERE
        filename = p_filename;
END;

DROP PROCEDURE IF EXISTS `create_done_seed_file`;
CREATE PROCEDURE `create_done_seed_file` (
    IN p_filename VARCHAR(50)
) BEGIN
    INSERT INTO done_seed_files (
        filename
    )
    VALUES
    (
        p_filename
    );
END;