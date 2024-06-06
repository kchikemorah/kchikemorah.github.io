<?php
include('include/init.php');
$_SESSION['userId']= 5;
$user = validateUser($SESSION['userId']);
echo "Hello! Welcome, ".$user["userEmail"]; //need to get the information! from the database