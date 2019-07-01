UPDATE users
SET name=${name}, email=${email}
WHERE user_id=${id};

SELECT * FROM users
WHERE user_id=${id};