<?php
try {

    $pdo = new PDO('mysql:host=127.0.0.1;dbname=users;charset=utf8','root','root');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e) {
    echo $e->getMessage();
}


$login = 'unknown';
$password = 'unknown';
$f_name = 'unknown';
$s_name = 'unknown';
$age = 'unknown';
$mobile = 'unknown';
$county = 'unknown';
$city = 'unknown';
$email = 'unknown';
$repassword = 'unknown';

if (isset($_POST['login'])) {
    $login = $_POST['login'];
}
if (isset($_POST['password']) && isset($_POST['re-password'])) {
    $password = $_POST['password'];
    $repassword = $_POST['re-password'];
    if($password != $repassword)
        $password = 'wrong';
}
if (isset($_POST['f_name'])) {
    $f_name = $_POST['f_name'];
}
if (isset($_POST['s_name'])) {
    $s_name = $_POST['s_name'];
}
if (isset($_POST['age'])) {
    $age = $_POST['age'];
}
if (isset($_POST['mobile'])) {
    $mobile = $_POST['mobile'];
}
if (isset($_POST['county'])) {
    $county = $_POST['county'];
}
if (isset($_POST['city'])) {
    $city = $_POST['city'];
}
if (isset($_POST['email'])) {
    $email = $_POST['email'];
}
$sql = 'SELECT * FROM user WHERE login="'.$login.'"';
$result = $pdo->query($sql);
$row = $result ->fetch();

if(!$row) {
    $sql = "INSERT INTO `user` VALUES (0, '$login', '$password', '$f_name', '$s_name', $age, '$mobile', '$county', '$city', '$email')";
    $mysql_affected_rows = $pdo->exec($sql);
    header("Location:/");

}
else{
    echo "<p style='color: red'>Аккаунт уже существует</p>";
}

