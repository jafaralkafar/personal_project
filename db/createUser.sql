INSERT INTO users ( name, email, password, isAdmin )
VALUES ( ${name}, ${email}, ${hash}, ${isAdmin} )

RETURNING *;