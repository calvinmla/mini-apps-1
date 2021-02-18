CREATE DATABASE checkout;

USE checkout;

CREATE TABLE user (
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(40),
  email VARCHAR(40) UNIQUE,
  password VARCHAR(40),
  address VARCHAR(60),
  phone INT,
  creditcard INT,
  expiration INT,
  cvv INT,
  zipcode INT,
  PRIMARY KEY (id)
);