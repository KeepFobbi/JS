<?php
session_start();

function handle_error($user_error_message, $system_error_message)
{
    die ($user_error_message . " " . $system_error_message);
}

;

$login = 'unknown';
$password = 'unknown';
$repassword = 'unknown';
$sex = 'unknown';
$games = 'unknown';
$city = 'unknown';
$about = 'unknown';
$img = 'unknown';
$imgName = 'unknown';
$imgSave = "upload/" . rand(000000000, 99999999900) . ".jpg";

if (isset($_POST['login'])) {
    $login = $_POST['login'];
    $_SESSION['login'] = $login;
}
if (isset($_POST['password']) && isset($_POST['repassword'])) {
    $password = $_POST['password'];
    $repassword = $_POST['repassword'];

    if ($password != $repassword) {
        $password = 'не співпадають';
    } else {
        $_SESSION['password'] = $repassword;
        $_SESSION['repassword'] = $password;
    }
}

if (isset($_POST['city'])) {
    $city = $_POST['city'];
    $_SESSION['city'] = $city;
}

if (isset($_POST['sex'])) {
    $sex = $_POST['sex'];
    $_SESSION['sex'] = $sex;
}

if (isset($_POST['game'])) {
    $games = $_POST['game'];
    $_SESSION['games'] = $games;
}

if (isset($_POST['about'])) {
    $about = $_POST['about'];
    nl2br($about);
    $_SESSION['about'] = $about;
}

if ($_FILES) {
    $imgName = $_FILES['img']['name'];
    $imgSave = "upload/" . $imgName;
    move_uploaded_file($_FILES["img"]["tmp_name"],$imgSave);
}

echo " 
  <table>
            <tr>
                <td>Логін:</td>
                <td>$login</td>
            </tr>
            <tr>
                <td>Пароль:</td>
                <td>$password</td>
            </tr>
           
            <tr>
                <td>Стать:</td>
                <td>$sex</td>
            </tr>
             <tr>
                <td>Місто:</td>
                <td>$city</td>
            </tr>
                <td>Улюбленні ігри:</td>
                <td>";

foreach ($games as $val) echo "$val <br> ";
echo "</td> 
            </tr>
            <tr>
                <td>Про себе:</td>
                <td>"; echo nl2br($about);
echo "
</td>
            </tr>
            <tr>
                <td>Фотографія:</td>
                <td><img width='200px' src='$imgSave'></td>
            </tr>
            <tr>
               
            </tr>
            
        </table>
    ";

?>
<a href="index.php">Назад</a>


