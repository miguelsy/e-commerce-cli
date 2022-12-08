DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
    `id` INT,
    `name` VARCHAR(255),
    `price` DECIMAL(10, 2),

    PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `done_seed_files`;
CREATE TABLE IF NOT EXISTS `done_seed_files` (
    `filename` VARCHAR(255),

    PRIMARY KEY (`filename`)
);

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