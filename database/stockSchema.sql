DROP DATABASE IF EXISTS usersStocks;
CREATE DATABASE usersStocks;

USE usersStocks;
DROP TABLE IF EXISTS stock, user;

CREATE TABLE stock (
  id INT NOT NULL AUTO_INCREMENT,
  stock_ticker VARCHAR(20) NOT NULL,
  PRIMARY KEY (id)
);

-- CREATE TABLE user (
--   id INT NOT NULL AUTO_INCREMENT,
--   username VARCHAR(200) NOT NULL,
--   stock_id INT NOT NULL,
--   PRIMARY KEY (id)
-- );