<?php
function getAllPosts(){
    $posts = dbQuery("
    SELECT *
    FROM posts
    ")->fetchAll();
    return $posts;
// $posts = [
// 1 => [
//     "postId" => 1,
//     "title" => "poetry!",
//     "body" => "<p> Spoken word poetry is one of my favorite forms of art. Poets not only write emotion-evoking poetry, but they also perform it. Spoken word is more than just the words on the page-- it’s about how you say them, how you play with rhyme and rhythm, and even how you use your physical body to tell the story. </p>
//     <h2> Porsha Olayiwola</h2>
//     <p> Porsha Olayiwola is a black queer artist who shares her experiences and reflections of the world that we live in. 
//     In her poetry, she focuses on her black experience in the United States. the history of slavery, the stereotypes of
//      black women, and so much more. Her performance skills are impeccable, and we watch her take the persona
//       of whoever she writes about, whether it be
//      <a href=https://www.youtube.com/watch?v=53kJF0DQtNo> capitalism</a>, or the <a href= https://www.youtube.com/watch?v=bSoITsaSs0M> misunderstood 'angry black woman.' </a>
// </p>
// <h2> Rudy Francisco </h2>
// <p> Rudy Fransicso is a fabulous love poet. He marks a lot of his poems with 'I'm not a love poet' before describing the most beautiful depictions of love that you can imagine. 
//     </p>
// <h2> Phil Kaye </h2>
// "

// ],

// 2 => [
//     "postId" => 2,
//     "title" => " legos!",
//     "body" => ""
// ],

// 3 => [
//     "postId" => 3,
//     "title" => "reading!",
//     "body" => "<p> Despite having a short attention span, I love to read. 
//     I haven't had as much time to read as I used to, considering how much time 
//     and energy being in college takes up, but I want to make an effort to start reading
//      frequently again! Last year, I began a reading list where I review each of the books 
//      I've read. </p>"
// ],

// 4 => [
//     "postId" => 4,
//     "title" => "girlfriend!",
//     "body" => " <p>I have a girlfriend! I always want to talk about them, because they are so amazing,
//      and I'm very grateful to have them in my life.
//      Her name is Jayla, and she's a carpenter from St. Louis. 
//      She is 5'7 and a half, and she has dark brown locs. We official met in February of 2024, 
//     coincidentally on her birthday! She's a awkward nerd who builds things for a living, and also loves video games.
//      On  Valentine's day, barely a couple days into us being together, she still bought 
//      me flowers and a mini valentine's basket. I felt extremely unprepared, as I certainly did know that I was allowed to go that all-out. 
//      However, I got her a really big and pretty candle!! Anyways, we've been together for almost 100 days and I recently met her mom. That was very scary,
//      considering the fact that we originally thought she wouldn't approve of our (queer) relationship. But she does! And it's such a breath of fresh air to 
//      not have to keep ourselves a secret from her family to actually be ACCEPTED by them! I've never been happier in life than I am now with Jayla, and I'd like
//       to keep this joy and peace for as long as the universe lets me. </p>"
// ],
// 5 => [
//     "postId" => 5,
//     "title" => "life!",
//     "body" => ""
// ]
// ]
// ;
    // return $posts;


}

function getPost($postId){
	$post = dbQuery("
    SELECT *
    FROM posts 
    WHERE postId = ".$postId
    )->fetch();
    return $post;
}

function getCommentsOnPost($postId){
    $comments = dbQuery("
    SELECT *
    FROM comments
    WHERE postId = ".$postId
    )->fetchAll();
    return $comments;
}