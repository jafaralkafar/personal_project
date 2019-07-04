CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR,
    email VARCHAR,
    password VARCHAR,
    isAdmin BOOLEAN
);

CREATE TABLE stories (
    story_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users,
    title VARCHAR,
    storydesc VARCHAR(500),
    price DECIMAL(4, 2),
    fileUrl TEXT
);

CREATE TABLE userstories (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users,
    story_id INT REFERENCES stories
);
