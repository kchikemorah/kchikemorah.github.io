<?php

include('include/init.php');
//$theDate = date('Y-m-d H:i:s');
//echo $theDate;

if(isset($_REQUEST['commentContent'])){
    if (empty($_REQUEST['commentContent'])){
        return "<p style = 'color: red;'> Please write a comment </p>";
        
}
else{
    saveComment( $currentUser, $_REQUEST['commentContent'],$_REQUEST['postId']);
    //header('location:?postId='.$_REQUEST['postId']);
    //echo "<h4> ".$comment["commentId"]." @".$comment['name']." ".$comment["dateOfComment"]."</h4>".$comment["comment"];
    return "this is a new comment";   
}
}
function saveComment( $name,$content, $postId){
    $now = date_create('now');
    $dateTimeString = date_format($now, 'Y-m-d H:i:s');

    dbQuery("
    INSERT INTO comments (name, comment, postId, dateOfComment)
    VALUES(:name,:content,:postId, :dateTimeString)", 
    [
        "name" => $name,
        "content" => $content,
        "postId" => $postId,
        "dateTimeString" => $dateTimeString

    ]
);
}
