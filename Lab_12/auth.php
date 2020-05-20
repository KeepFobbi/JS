<?php
session_start();
if($_SESSION['login']) {
    $login = $_SESSION['login'];
    echo "Hello " . $_SESSION['login'];
    echo "<br><a href='/'>Выход</a>";
    try {
        $pdo = new PDO('mysql:host=127.0.0.1;dbname=users;charset=utf8','root','root');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    catch(PDOException $e) {
        echo $e->getMessage();
    }

    $sql = 'SELECT*FROM user WHERE login="'.$login.'"';
    $result = $pdo->query($sql);
    $row = $result ->fetch();
    echo "<br><a href='Form_update.php'>Изменить профиль</a>";
    echo "<br><a href='delete.php'>Удалить профиль</a>";


}
else{
    echo "Вы не авторизовались";
    echo "<a href = '/'>Назад</a>";
}

