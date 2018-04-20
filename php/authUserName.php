<?php
session_start();

	//init connection with database
	$connection = mysqli_connect('littlegrapher.ckslwoktsrzf.us-east-1.rds.amazonaws.com:3306','taskiiAdmin','bluesnowballUNT1','Taskii');

$user = $_POST['userInput'];


if (isset($_POST["submit"]))
 {
    if (empty ($user)) //if username field is empty echo below statement
     {
       echo "<font color='red'>***You must enter your unique username (email).***</font><br/><br/>";

     } else {

     $query = "select * from UNT_Users where name = '$user'";
     $result = mysqli_query($connection,$query);
     if (mysqli_num_rows($result) == 1)
      {
				$row = mysqli_fetch_row($result);
				header("Location: /worldSelect.html?user=$row[0]&world=$row[1]&level=$row[2]");
      }
       else
      {
        header("Location: /index.php");
      }
    }

 }
 else
 {
     echo "Empty input submit"; // empty $_POST["submit2"]
 }

session_write_close();
?>
