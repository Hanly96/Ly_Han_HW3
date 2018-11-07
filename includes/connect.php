<?php
$user   = "root";
$password = "root";// windows users leave this blank
$host = "localhost";
$db = "infographic";

$comm = mysqli_connect($host,$user,$password,$db);

if (!$com) {
    echo "connect didn't work...";
    exit;
}

//echo "connected";

// get all the car data

$myQuery = "SELECT * FROM skillIcon";

$result = mysqli_query($com,$myQuery);

$rows =array();
while($rows = mysqli_fetch_assoc($result)) {
    $rows[] = $row;
}
// send the entire result set as a json encoded array
echo json_encode($row);

?>