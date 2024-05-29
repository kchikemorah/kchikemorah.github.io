<?php
session_start();
 setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/")
 include("include/init.php");
echoHeader("Login", getAllPosts());

echo" <h1 class='frontcover' > Login <h1>
<div class = 'login'>
    <form method = 'post' action ='' style = 'text-align:center'>
        <label for = 'username'> Username: </label><input type='text' name = 'username' id = 'username'/>
        <br>
        <label for = 'password'> Password: </label><input type = 'text' name = 'password'/>
        <br>
        <input type = 'submit' class = 'button'>

</form>
</div>";

