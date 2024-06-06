<?php
function getUser($username, $password){
$user = dbQuery("
SELECT *
FROM users 
WHERE email=:email AND password=:password", 
["email" => $username, "password" => $password])->fetch();
return $user;
}

function validateUser($userId){
    $user = dbQuery("
    SELECT * FROM users 
    WHERE userEmail = :username",[ "username" => $userId ] )->fetch();
    return $user;
}