SELECT s.title, s.fileUrl 
FROM stories s
INNER JOIN userstories us
    ON s.story_id = us.story_id
INNER JOIN users u
    ON us.user_id = u.user_id;
