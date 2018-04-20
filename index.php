
<?php
	//connect to database
	$connection = mysqli_connect('littlegrapher.ckslwoktsrzf.us-east-1.rds.amazonaws.com:3306','taskiiAdmin','bluesnowballUNT1','Taskii');


?>

<html lang="en">
<head>

			<script src="js/main.js"></script>
	<title>Team Hydra</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->
	<link rel="icon" type="image/png" href="images/hydra.png"/>
	<link rel="stylesheet" type="text/css" href="css/util.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<script src="js/main.js"></script>
<!--===============================================================================================-->
</head>
<body>


		<div class="container-login100" style="background-image: url('images/indexBG.jpg');">
			<div class="wrap-login100 p-t-190 p-b-30">
					<div class="login100-form-avatar">
						<img src="images/hydra.png" alt="AVATAR">
					</div>


					<form action="php/authUser.php" method="post">

					<span class="login100-form-title p-t-20 p-b-45">
						Team Hydra
					</span>

					<div class="wrap-input100 validate-input m-b-10" data-validate = "User name is required">
						<input id="nameID" class="input100" type="text" name="userInput" placeholder="User Name">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-user"></i>
						</span>
					</div>

					<div class="container-login100-form-btn p-t-10">
						<input class="login100-form-btn" type="submit" name="submit" value="log in"/ />
					</form>
					</div>

					<div class="text-center w-full">
						<a class="txt1" href="createAccount.php">
							Create new account
							<i class="fa fa-long-arrow-right"></i>
						</a>
					</div>

			</div>
		</div>

</body>
</html>
