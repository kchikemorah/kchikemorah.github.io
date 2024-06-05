<?php
include("include/init.php");
echoHeader("All About Kene", getAllPosts());
$id = $_REQUEST["postId"];
$pageInfo = getPost($id);
$pageComments = getCommentsOnPost($_REQUEST["postId"]);
GLOBAL $currentUser;
// debugOutput($pageInfo);
?>
<!-- <script> 
    function submitComment() {
    fetch('ajax_endpoint.php').then(
        newComment => newComment.text()
    ).then(
        newComment => (document.createElement('div style = 'border:ridge; padding: 5px'').innerText = newComment)

    );
    

    /*
    - send request to server for information
    --gets its 
    --updates html using getelement stuff
    */
} ,
    </script> -->
   
<?php

echo" <h1 class = 'frontcover'> " .$pageInfo["title"]."</h1>";

if (!empty($pageInfo["body"])) {
   echo $pageInfo["body"];
} 
if(isset($_SESSION['user'])){
$currentUser = $_SESSION['user'];
}
echo "<div style = background-color:black> j</div>";
if(!empty($pageComments)){
    echo "<div class='commentSection id='comments'>";
foreach($pageComments as $id=>$comment){
    echo "<div style = 'border:ridge; padding: 5px'>
    <h4> ".$comment["commentId"]." @".$comment['name']." ".$comment["dateOfComment"]."</h4>".$comment["comment"]."</div>";
    if($currentUser==$comment['name']){
   echo" <form type ='post' action='' > 
        <input type = 'text' name='editText'/>
        <input type= 'submit' value='Edit'/>
        ";
    }
    }
    echo "</div>";
}
else{
    echo "<i>no comments yet.</i>";
}
echo
"<script>
 function DisplayComment(){
    fetch('ajax_endpoint.php').then(
        response => response.text()
    ).then(
        data => (document.createElement('div').innerText =data).then(
            data => (document.getElementById('comments').appendChild('data'))
        )
        
    ) 
    
 }
</script>
";

 echo "<div class= 'BlogComments'>
<form method = 'post' action=''> <!--this is a post request!! the submission action will send the user to the same page-->
    <label for = 'commentName'>Username: </label> <label>" .$currentUser."</label> 
    Add a comment: <input type = 'text' name = 'commentContent' height = '50px' width = '30px'/>
    <input type = 'submit' class = 'button' style = 'padding-top: 0px;'/>
</form>
</div>";




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
if(isset($_REQUEST['commentContent'])){
    if (empty($_REQUEST['commentContent'])){
        echo "<p style = 'color: red;'> Please write a comment </p>";
        exit;
}
else{
    saveComment( $currentUser, $_REQUEST['commentContent'],$id);
    header('location:index.php/view_posts.php?postId='.$id);
   
    
     
}

}


    
        






