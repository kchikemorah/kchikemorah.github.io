<?php

function debugOutput($array){
    $clean = htmlspecialchars(print_r($array, true));  //escapes html tags in STRINGS (print_r turns arrays to strings)
    echo "<pre>".$clean."</pre>";
    //echo "<pre>"
    //var_dump($array);
    //echo"</pre>";
}

