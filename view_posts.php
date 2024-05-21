<?php
include("init.php");
echoHeader("Spoken Word Poetry", getAllPosts());
$pageInfo = getPost($_REQUEST["postId"]);

// if ($pageInfo["postId"]== 1){
    echo" <h1 class = 'frontcover'> " .$pageInfo["title"]."</h1>";
// }
// else{
// echo("
// <h1><strong>" .$pageInfo["title"]."</strong></h1>"
// );
// }
if (!empty($pageInfo["body"])) {
   echo $pageInfo["body"];
} 




