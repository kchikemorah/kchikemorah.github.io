<?php
include("include/init.php");
echoHeader("My Profile", getAllPosts());
echo " Username:". $_SESSION['user']. "<br> <a href= > change password </a>";

?>
 <form action='logout.php' method='post'>
<button type='submit' name='logout'>Logout</button>
</form>
<?php
exit;