<?php 
function echoHeader($pageTitle){

    echo(
        "<html>
        <head>
            <title>" .$pageTitle. " </title>
            <link rel='stylesheet' href='style1.css'>
        </head>
    
        <body> 
           
            
            <nav class='navbar'>
                <ul class='nav-list'>
                    <li><a href='view_posts.php?postId=1'>Home</a></li>
                    <li><a href='view_posts.php?postId=2'>Porsha Olayiwola</a></li>
                    <li><a href='view_posts.php?postId=3'>Rudy Francisco</a></li>
                    <li><a href='view_posts.php?postId=4'>Phil Kaye</a></li>
                    <li><a href='https://youtube.com/playlist?list=PLH8ZQwl-Kp38QMquDIv7AsOWIxm75kkqI&si=oyp5wd5Tlbuio7pV' target='_blank'> a playlist of my favorites!</a></li>
                </ul>
                </nav>"

    );
}
function echoFooter(){
    echo("
        </body>
    </html>");
}
