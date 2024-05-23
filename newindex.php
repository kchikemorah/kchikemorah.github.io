<?php 
    include('include/init.php');
    // $posts = getAllPosts();
    // debugOutput($posts);
    echoHeader('Who Is Kene?', getAllPosts());
?>
<div style=
'position: absolute;
width: 100%;
height: 264px;
background: #EFE3EE;
border-radius: 62px;'> <h1 class = 'frontcover' style='font-size:100px'>Who Is Kene?</h1> </div>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>


 





<div class = 'aboutme'>
<img class="aboutme1" src="me.jpg" alt = "me" style='width:500px;'></img></img>
   <h1 class = aboutme2> <center> About Me </center> <p>Hello! My name is Kene Chike-Morah,
         and I am a rising junior at Washington University. I 
         am from Duluth, Georgia, although I'll more likely say 
         that I’m from Nigeria. I am almost 20 years old, and 
         there is still so much to learn. I’ve done so many new 
         things this year, and they’ve shaped who I’m finally becoming.</p></h1>  
</div>
<div class= 'buttons'>
    <a href= 'view_posts.php?postId=0' class='button' >
        poetry
    </a>
    <a href='view_posts.php?postId=1' class='button'>
        legos
    </a>
    <a href='view_posts.php?postId=2' class='button'>
        reading
    </a>
</div>
<div class= 'buttons'>
    <a href='view_posts.php?postId=3' class='button'>
        girlfriend
    </a>
    <a href='view_posts.php?postId=4' class='button'>
        cooking
    </a>
    <a href='view_posts.php?postId=5' class='button'>
        life
    </a>
</div>



    <?php
        echoFooter();
        ?>
