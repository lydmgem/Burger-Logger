DROP DATABASE IF EXISTS ls1pls23ib1y8c53;

CREATE DATABASE ls1pls23ib1y8c53;
USE ls1pls23ib1y8c53;

CREATE TABLE burgers (
id INT NOT NULL auto_increment,
burger_name VARCHAR(30),
devoured BOOLEAN DEFAULT true,
PRIMARY KEY (id)
);