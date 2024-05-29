<?php
include("include/init.php");
echoHeader("Sign Up", getAllPosts());

echo" <h1 class='frontcover' > Sign Up <h1>
<div class = 'login'>
    <form method = 'post' action ='' style = 'text-align:center'>
        <label for = 'username'> Username: </label><input type='text' name = 'username' id = 'username'/>
        <br>
        <label for = 'password'> Password: </label><input type = 'text' name = 'password'/>
        <br>
        <input type = 'submit' class = 'button'>

</form>
</div>";

function saveNewUser($username, $password){
    $salt = rand(0,98765777899777);
    dbQuery("
    INSERT INTO USERS(userEmail, salt, password)
    VALUES(:email, :salt, :password) ", 
    [
        "email" => $username,
        "salt" => $salt,
        "password" => sha1($password.$salt)
    ]);
}
if (isset($_REQUEST['username'])&& isset($_REQUEST['password'])){
    if(empty($_REQUEST['username'])){
        echo '<center><p style= "color:red"> Please enter a username</p><center>';
        exit;
    }
    else if(empty($_REQUEST['password'])){
        echo '<center><p style= "color:red"> Please enter a password</p><center>';
        exit;   
    }
    else{
        $_SESSION['username']= $_REQUEST['username'];
        saveNewUser($_REQUEST['username'],$_REQUEST['password']);
        header('location:newindex.php');
    }

}
?>
