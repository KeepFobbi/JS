<?php
session_start();
if($_SESSION['login'])
    unset($_SESSION['login']);
try {
    $pdo = new PDO('mysql:host=127.0.0.1;dbname=users;charset=utf8','root','root');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e) {
    echo $e->getMessage();
}


if(empty($_POST['login'])){}
elseif (empty($_POST['password'])){}
else {
    $login = $_REQUEST['login'];
    $password = $_REQUEST['password'];
    $sql = 'SELECT*FROM user WHERE login="'.$login.'" AND password="'.$password.'"';
    $result = $pdo->query($sql);
    $rows = $result ->fetchAll();

    if ($rows) {
        $_SESSION['login'] = $login;
        header('location: /auth.php');
    }
    else {
    }

    // $query = mysql_query("SELECT id, password FROM users WHERE login='".$_POST['login'])."' LIMIT 1");
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sign In</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
</head>
<body >
<div class="container shadow" style="margin-top:20%">
    <div class="row ">
        <h2 class="col-4 offset-5 top-cover center-block">Sign In</h2>
    </div>
    <form enctype='multipart/form-data' method="post" action="">
        <div class="form-group row offset-4 ">
            <div class="col-sm-5 ">
                <input type="text" class="form-control" id="inputEmail3" placeholder="Login" name="login" required>
            </div>
        </div>
        <div class="form-group row offset-4">
            <div class="col-sm-5">
                <input type="password" class="form-control" id="inputPassword3" placeholder="Password" name = "password" required>
            </div>
        </div>
        <div class="form-group row ">
            <div class="offset-sm-4  col-7">
                <div class="btn-group  btn-group-lg col-7">
                    <a><button type="submit" class="btn btn-primary ">Sign in</button></a>
                    <a href="Form_registrartion.php"><button type="button" class="btn btn-primary">Registration</button></a>
                </div>
            </div>
        </div>
        <div class="form-group row ">
            <div class="col-sm-10 offset-sm-7" style = "margin-bottom: 3%" >
                <a href="#"></a>
            </div>

        </div>
    </form>

</div>
</body>
</html>

