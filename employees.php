<?php
$employees = [
    "Tyler" => "King",
    "Eva"=> "Jeliazkova",
    "Ruth"=> "Durrell",
    "Emily"=> "Schwab",
    "Reno"=> "Dubois",
    "Cam" => "Mason",
    "Jay" => "Yang"
];
function employeesInAlphabeticalOrder($employees){


asort($employees);
echo "Employees of LACRM in Alphabetical Order (by last name) <br>";
foreach($employees as $first => $last){
    echo( 
        "<br>".$first. " " .$last." <br>" 
    );
    }
}
function employeesInReverseOrder($employees){
    arsort($employees);
    echo " <br> Employees of LACRM in ALphabetical Order (by last name) <br>";
    foreach($employees as $first => $last){
        echo(
            "<br>" .$first. " " .$last." <br>" 
    
        );

    }
}

employeesInAlphabeticalOrder($employees);
employeesInReverseOrder($employees);