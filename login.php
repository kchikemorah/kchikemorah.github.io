<?php

//  setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/")
include("include/init.php");
echoHeader("Login", getAllPosts());

echo" <h1 class='frontcover' > Login <h1>
<div class = 'login'>
    <form method='post' action='' style='text-align:center'>
        <label for = 'username'> Username: </label><input type='text' name = 'username' id = 'username'/>
        <br>
        <label for = 'password'> Password: </label><input type = 'text' name = 'password'/>
        <br>
        <a href = 'signup.php'><center style = 'font-size: 10px;'> Don't have an account? Sign up here!</center> </a>
        
        <input type = 'submit' class = 'button'  style = 'padding-top: 0px;'>

</form>
</div>";

if (isset($_REQUEST['username']) && isset($_REQUEST['password'])){
  
    if(empty($_REQUEST['username'])){
        echo "<center><p style= 'color:red'> Please enter a username</p><center>";
        exit;
    }
    else if(empty($_REQUEST['password'])){
        echo "<center><p style= 'color:red'> Please enter a password</p><center>";
        exit;   
    }
    else{
        $user = dbQuery("
        SELECT * FROM users 
        WHERE userEmail = :username",[ "username" => $_REQUEST['username'] ]
         )->fetch();;
        if ($user){
            if (sha1($_REQUEST['password'].$user['salt']) === $user['password']){
                $_SESSION['user']= $_REQUEST['username'];
                header('location:newindex.php');
            }
            else{
                echo " <center> <p style = 'color: red'> Incorrect password. </p></center>";
                exit;
            }
        }
        else{
            ECHO "<center> <p style = 'color: red'> User not found. </p></center> ";
        }
       
            exit;
        }  

        }       

?>