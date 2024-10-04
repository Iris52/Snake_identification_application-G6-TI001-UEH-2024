CREATE DATABASE snake_database;
USE snake_database;
CREATE TABLE Snakes (
    snake_id INT AUTO_INCREMENT PRIMARY KEY,
    common_name VARCHAR(100) NOT NULL,
    scientific_name VARCHAR(100) NOT NULL,
    description TEXT
);

CREATE TABLE Images (
    image_id INT AUTO_INCREMENT PRIMARY KEY,
    image_url VARCHAR(255) NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Identifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    image_id INT,
    snake_id INT,
    FOREIGN KEY (image_id) REFERENCES Images(image_id),
    FOREIGN KEY (snake_id) REFERENCES Snakes(snake_id)
);

CREATE TABLE SearchHistory (
    search_id INT AUTO_INCREMENT PRIMARY KEY,
    image_id INT,
    snake_id INT,
    search_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (image_id) REFERENCES Images(image_id),
    FOREIGN KEY (snake_id) REFERENCES Snakes(snake_id)
);