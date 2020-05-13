<?php
session_start();
$lang = 'ua';
$available_lang = ['ua', 'ru', 'pl', 'usa'];
if (isset($_GET['lang']) AND in_array($_GET['lang'], $available_lang, true)) {
    $lang = $_GET['lang'];
    setcookie ('language', $lang, time() + 86400 * 30 * 6);
    echo "Вибрана мова: ". $_GET['lang'] . '<br/>';}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Main</title>
    <style>
        img{
            width:25px;
        }
    </style>
</head>
<body>

<div class="language">
    <ul style="list-style-type: none; padding: 0">
        <li style="display: inline-block"><a href="index.php?lang=ua"><img src="upload/flags/ukraine-flag_7660.png"></a> </li>
        <li style="display: inline-block"><a href="index.php?lang=ru"><img src="upload/flags/russia-flag_1154.png"></a></li>
        <li style="display: inline-block"><a href="index.php?lang=pl"><img src="upload/flags/poland-flag_9138.png"></a></li>
        <li style="display: inline-block"><a href="index.php?lang=usa"><img src="upload/flags/jarvis-island-flag_3880.png"></a></li>
    </ul>
</div>

<form enctype="multipart/form-data" action="form_data.php" method="post">
    <table>
        <tr>
            <td>Логін:</td>
            <td><input type="text" name="login" required value="<?php echo $_SESSION['login'] ?>"></td>
        </tr>
        <tr>
            <td>Пароль:</td>
            <td><input type="password" name="password" required value="<?php echo $_SESSION['password'] ?>"></td>
        </tr>
        <tr>
            <td>Пароль ще раз:</td>
            <td><input type="password" name="repassword" required value="<?php echo $_SESSION['repassword'] ?>"></td>
        </tr>
        <tr>
            <td>Стать:</td>
            <td>
                <?php
                if ($_SESSION['sex'] == "Чоловік")
                    echo '<input type="radio" value="Чоловік" name="sex" checked>Чоловік <input type="radio" value="Жінка" name="sex">Жінка';
                else
                    echo '<input type="radio" value="Чоловік" name="sex">Чоловік <input type="radio" value="Жінка" name="sex" checked>Жінка';
                ?>

        </tr>
        <tr>
            <td>Місто:</td>

            <td><select name="city">

                    <?php
                    echo $_SESSION['city'];
                    if ($_SESSION['city'] == "Житомир") {
                        echo "<option value='Житомир' selected>Житомир</option>";
                    } else
                        echo "<option value='Житомир'>Житомир</option>";

                    if ($_SESSION['city'] == "Київ") {
                        echo "<option value='Київ' selected>Київ</option>";
                    } else
                        echo "<option value='Київ'>Київ</option>";

                    if ($_SESSION['city'] == "Одесса") {
                        echo "<option value='Одесса' selected>Одесса</option>";
                    } else
                        echo "<option value='Одесса'>Одесса</option>";
                    ?>
                </select></td>
        </tr>

        <tr>
            <td>Улюбленні ігри:</td>
            <td>

                <?php
                if($_SESSION['games']>0) {
                    $found = array_search("футбол", $_SESSION['games']);
                    $founds = array_search("баскетбол", $_SESSION['games']);
                    $foun = array_search("волейбол", $_SESSION['games']);
                    $fou = array_search("шахи", $_SESSION['games']);
                    $fo = array_search("World of Tanks", $_SESSION['games']);
                }
                    if ($found !== false)
                        echo "<label><input type='checkbox' name='game[]' value='футбол' checked> футбол </label><br>";
                    else
                        echo "<label><input type='checkbox' name='game[]' value='футбол'> футбол </label><br>";

                    if ($founds !== false)
                        echo "<label><input type='checkbox' name='game[]' value='баскетбол' checked> баскетбол </label><br>";
                    else
                        echo "<label><input type='checkbox' name='game[]' value='баскетбол'> баскетбол </label><br>";

                    if ($foun !== false)
                        echo "<label><input type='checkbox' name='game[]' value='волейбол' checked> волейбол </label><br>";
                    else
                        echo "<label><input type='checkbox' name='game[]' value='волейбол'> волейбол </label><br>";

                    if ($fou !== false)
                        echo "<label><input type='checkbox' name='game[]' value='шахи' checked> шахи</label><br>";
                    else
                        echo "<label><input type='checkbox' name='game[]' value='шахи'>  шахи </label><br>";

                    if ($fo !== false)
                        echo "<label><input type='checkbox' name='game[]' value='World of Tanks' checked> World of Tanks </label><br>";
                    else
                        echo "<label><input type='checkbox' name='game[]' value='World of Tanks'> World of Tanks </label><br>";


                ?>

        </tr>
        <tr>
            <td>Про себе:</td>
            <td><textarea name="about"><?php echo $_SESSION['about'] ?></textarea></td>
        </tr>
        <tr>
            <td>Фотографія:</td>
            <td><input type="file" name="img" required></td>
        </tr>
    </table>
    <input type="submit">

</form>


</body>
</html>
