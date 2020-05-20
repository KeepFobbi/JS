<?php
session_start();
$login = $_SESSION['login'];
try {
    $pdo = new PDO('mysql:host=127.0.0.1;dbname=users;charset=utf8','root','root');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e) {
    echo $e->getMessage();
}

$sql = 'DELETE FROM user WHERE login="'.$login.'"';
$mysql_affected_rows = $pdo->exec($sql);

header('Location: / ');
?>
 
