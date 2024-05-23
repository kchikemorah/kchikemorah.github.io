<?php

$areaCodes = [
    "404" => "Atlanta",
    "678" => "Atlanta",
    "770" => "Atlanta",
    "314" => "St. Louis",
    "315" => "North Central New York",
    "808" => "Hawaii",
    "212" => "Manhattan",
    "347" => "New York City",
    "310" => "Los Angeles",
    "305" => "Miami",
    "312" => "Chicago",
    "702" => "Las Vegas"
];
$number=2122009710;
$code = substr($number, 0, 3);
echo( 
    "the phone number ".$number." is from ".$areaCodes[$code]
);



