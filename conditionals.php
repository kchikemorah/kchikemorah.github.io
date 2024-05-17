
<?php
$inputOne = 9;
$inputTwo = 9;
$comparison = "";
if ($inputOne < $inputTwo){
   $comparison = "less than";
}
else if ($inputOne > $inputTwo){
   $comparison = "greater than";
}
else{
  $comparison = "equal to";
}
echo  (
    "The number ".$inputOne." is ".$comparison." the number ".$inputTwo
    );


