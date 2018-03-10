<!DOCTYPE html>
<html lang="en">
<head>
		<script src="js/main.js"></script>
	<title>Create user</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->
	<link rel="icon" type="image/png" href="images/hydra.png"/>
	<link rel="stylesheet" type="text/css" href="css/util.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
<!--===============================================================================================-->
</head>
<body>

	<div class="limiter">
		<div class="container-login100" style="background-image: url('images/indexBG.jpg');">
			<div class="wrap-login100 p-t-190 p-b-30">
				<form class="login100-form validate-form" action="php/createUser.php" method="post">


					<span class="login100-form-title p-t-20 p-b-45">
						Create user
									</span>


					<div class="wrap-input100 validate-input m-b-10" data-validate = "User Name is required">
						<input class="input100" type="text" name="userInput" placeholder="User Name">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-user"></i>
						</span>
					</div>

					<div class="container-login100-form-btn p-t-10">
						<input class="login100-form-btn" type="submit" name="submit" value="go!"/>
					</div>
				</form>
				<a class="txt1" href="index.php">
					home page
					<i class="fa fa-long-arrow-right"></i>
				</a>
			</div>
		</div>
	</div>
</body>

</html>
