<?php
session_start();

	$connection = mysqli_connect('littlegrapher.ckslwoktsrzf.us-east-1.rds.amazonaws.com:3306','taskiiAdmin','bluesnowballUNT1','Taskii');

$name = $_GET['userName'];
$world = $_GET['world'];


$query = "update  UNT_Users set world = '$world' where name ='$name'";
mysqli_query($connection,$query);

//This is the new location for redirecting the user to the world select page (in the sceneManagerTest view).
header("location: ../sceneManagerTest/index.html?user=$user&world=$world");

?>
