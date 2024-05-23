<?php 
function echoHeader($pageTitle, $posts){
    $navbar = "";
    foreach($posts as $id => $post){
        $navbar = $navbar."<li><a href='view_posts.php?postId=".$id."'>" .$post['title']. "</a></li>";
    }
    echo(
        "<html>
        <head>
            <title>" .$pageTitle. " </title>
            <link rel='stylesheet' href='style1.css'>
        </head>
    
        <body> 
           
            
            <nav class='navbar'>
                <ul class='nav-list'>
                <li><a href='newindex.php'>Who Is Kene?</a></li>
                   ".$navbar."
                </ul>
                </nav>"
                

    );
}
function echoFooter(){
    echo("
        </body>
    </html>");
}
// <li><a href='view_posts.php?postId=2'>Porsha Olayiwola</a></li>
// <li><a href='view_posts.php?postId=3'>Rudy Francisco</a></li>
// <li><a href='view_posts.php?postId=4'>Phil Kaye</a></li>
// <li><a href='https://youtube.com/playlist?list=PLH8ZQwl-Kp38QMquDIv7AsOWIxm75kkqI&si=oyp5wd5Tlbuio7pV' target='_blank'> a playlist of my favorites!</a></li>