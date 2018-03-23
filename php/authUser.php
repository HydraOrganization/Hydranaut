<?php
session_start();

	$connection = mysqli_connect('');


$user = $_POST['userInput'];


if (isset($_POST["submit"]))
 {
    if (empty ($user)) //if username field is empty echo below statement
     {
       echo "<font color='red'>***You must enter your unique username***</font><br/><br/>";

     } else {

     $query = "select * from UNT_Users where name = '$user'";
     $result = mysqli_query($connection,$query);
     if (mysqli_num_rows($result) == 1)
      {
				$row = mysqli_fetch_row($result);
				$world = $row[1];
				//Araon: change worldSelect.html to your own world page
				// one single / is for backing out of the php folder into the folder with index
				//other wise "foldername"/"worldselect" will be needed
				header("location: /worldSelect.html?user='$user'&world=$world");
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
