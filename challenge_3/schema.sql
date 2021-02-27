CREATE DATABASE checkout;

USE checkout;

CREATE TABLE user (
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(40),
  email VARCHAR(40),
  password VARCHAR(40),
  address VARCHAR(60),
  phone VARCHAR(20),
  creditcard VARCHAR(16),
  expiration INT(11),
  cvv INT(3),
  zipcode INT(9),
  PRIMARY KEY (id)
);