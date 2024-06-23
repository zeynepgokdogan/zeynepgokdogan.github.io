<?php
$people = array ("zeynep" => 23, "seden" => 12, "nuran" => 28, "nevra" => 15);

$maxage = null;
$maxname = null;

foreach($people as $name => $age){
    if($maxage === null || $maxage < $age)
    {
        $maxage = $age;
        $maxname = $name;
    }
}

echo "The oldest person is: " . $maxname;
?>
