<?php
function getAllPosts(){
    
$posts = [
1 => [
    "postId" => 1,
    "title" => "spoken word!",
    "body" => ""
],

2 => [
    "postId" => 2,
    "title" => " Porsha Olayiwola",
    "body" => " <p> Porsha Olayiwola is a black queer artist who shares her experiences and reflections of the world that we live in. 
    In her poetry, she focuses on her black experience in the United States. the history of slavery, the stereotypes of
     black women, and so much more. Her performance skills are impeccable, and we watch her take the persona
      of whoever she writes about, whether it be
     <a href=https://www.youtube.com/watch?v=53kJF0DQtNo> capitalism</a>, or the <a href= https://www.youtube.com/watch?v=bSoITsaSs0M> misunderstood 'angry black woman.' </a>
</p>"
],

3 => [
    "postId" => 3,
    "title" => "Rudy Francisco",
    "body" => "<p> Rudy Fransicso is a fabulous love poet. He marks a lot of his poems with 'I'm not a love poet' before describing the most beautiful depictions of love that you can imagine. 
    </p>"
],

4 => [
    "postId" => 4,
    "title" => "Phil Kaye",
    "body" => ""
]
];
    return $posts;

}

function getPost($PostId){
	$AllPosts = getAllPosts(); 
	return $AllPosts[$PostId];
}