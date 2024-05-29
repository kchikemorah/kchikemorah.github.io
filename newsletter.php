<?php
include('include/init.php');
echoHeader("Newsletter", getAllPosts());

echo "<div class= 'BlogComments'>
<form method = 'post' action =''> <!--this is a post request!! the submission action will send the user to the same page-->
    <label for = 'commentName'>Username: </label> <input type = 'text' name = ' commentName' id = 'commentName'/> 
    Add a comment: <input type = 'text' name = 'commentContent' height = '50px' width = '30px'/>
    <input type = 'submit' class = 'button'/>
</form>
</div>
";
function saveComment( $name,$content, $postId){
    $now = date_create('now');
    $dateTimeString = date_format($now, 'Y-m-d H:i:s');
 //avoid hacking into db, use the second parameter of dbquery//
    dbQuery("

    INSERT INTO COMMENTS(name, comment, postId, dateOfComment)
    VALUES(:name,:content,:postId, ':dateTimeString)
    ",
     [
        "name" => $name,
        "comment" => $comment,
        "postId" => $postId,
        "dateTimeString" => $dateTimeString
       
     ]

   

);
}

if (isset($_REQUEST['commentName'])&& isset($_REQUEST['commentContent'])){
    if(empty($_REQUEST['commentName'])){
        echo "<p style ='color: red;'> Please enter your name. </p>"; 
        exit;
    }
    else if (empty($_REQUEST['commentContent'])){
        echo "<p style = 'color: red;'> Please write a comment </p>";
        exit;
    }
    else{
        saveComment( $_REQUEST['commentName'], $_REQUEST['commentContent'],$_REQUEST['postId']);
    }
        
}
debugOutput($_REQUEST);
?>



