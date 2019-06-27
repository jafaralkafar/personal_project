CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR,
    email VARCHAR,
    password VARCHAR,
    isAdmin BOOLEAN,
    purchased_stories TEXT
);

CREATE TABLE stories (
    story_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users,
    title VARCHAR,
    fileUrl TEXT
);
