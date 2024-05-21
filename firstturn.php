<?php
$players= [
    "Tyler",
    "Eva", 
    "Ruth", 
    "Emily",
    "Reno",
    "Cam",
    "Jay"
];

echo "Who's Going First? <br><br>" .$players[rand(0,count($players)-1)];