SELECT s.fileUrl 
FROM stories s
INNER JOIN userstories us
    ON s.story_id = us.story_id
WHERE us.id = $1;
