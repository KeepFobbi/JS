<?php
session_start();
try {
    $pdo = new PDO('mysql:host=127.0.0.1;dbname=users;charset=utf8','root','root');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e) {
    echo $e->getMessage();
}
$login = $_SESSION['login'];
$sql = 'SELECT*FROM user WHERE login="'.$login.'"';
$result = $pdo->query($sql);
$row = $result ->fetch();

$password = 'unknown';
$f_name = 'unknown';
$s_name = 'unknown';
$age = 'unknown';
$mobile = 'unknown';
$county = 'unknown';
$city = 'unknown';
$email = 'unknown';

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
$sql =  "UPDATE user SET password = '$password', f_name = '$f_name', s_name = '$s_name', age = '$age', mobile = '$mobile', county = '$county',
 city = '$city', email = '$email'
 WHERE login ='$login' ";
$mysql_affected_rows = $pdo->exec($sql);


header("Location:/auth.php");
?>

