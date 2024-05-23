<?php
include("include/init.php");
echoHeader("All About Kene", getAllPosts());
$pageInfo = getPost($_REQUEST["postId"]);
$pageComments = getCommentsOnPost($_REQUEST["postId"]);

// debugOutput($pageInfo);

echo" <h1 class = 'frontcover'> " .$pageInfo["title"]."</h1>";

if (!empty($pageInfo["body"])) {
   echo $pageInfo["body"];
} 
echo "<div style = background-color:black> j</div>";
if(!empty($pageComments)){
foreach($pageComments as $id=>$comment){
    echo "<h4> ".$comment["commentId"]." ".$comment["dateOfComment"]."</h4>".$comment["comment"];
}
}
else{
    echo "<i>no comments yet.</i>";
}





