CREATE TABLE USER(
    name VARCHAR(30),
    email VARCHAR(30) UNIQUE,
    mobile INT UNIQUE,
    passwords VARCHAR(100)
);