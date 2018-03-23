<script src="js/main.js"></script>

<?php
session_start();

		$connection = mysqli_connect('');


$user = $_POST['userInput'];


if (isset($_POST["submit"]))
 {
    if (empty ($user)) //if username field is empty echo below statement
     {
         header("Location: /createAccount.php");

     } else {

     $query = "select * from UNT_Users where name = '$user'";
     $result = mysqli_query($connection,$query);
     if (mysqli_num_rows($result) == 1)
      {
				?>

        <script type='text/javascript'>
				if (confirm('Account already exists'))
				{
					window.location.href = "/createAccount.php"
				  } else {
				      window.location.href = "/createAccount.php";
				  }
				</script>

					<?php
      }
       else
      {
				$query = "insert into UNT_Users(name, world, level) values('$user', 0, 0)";
				mysqli_query($connection,$query);
				header("location: /worldSelect.html?user=$user&world=0");
      }
    }

 }
 else
 {
     echo "Empty input submit"; // empty $_POST["submit2"]
 }
session_write_close();
?>
