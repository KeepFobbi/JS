<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Registration</title>
    <style>
        body{
            background-color: lightgray;
        }
        td{
            width: 200px; text-align: left;
        }
        #pr{
            font-size: 9pt;
            font-style: italic;
            font-weight: bold;
        }
    </style>
    
</head>
<body style="background: lightgray">

<form enctype='multipart/form-data' action='insert.php' method='post' style="position: fixed; top:5% ;left: 35%;text-align: center; width: 460px" >
    <b>Account Information</b>
    <table style=" box-shadow: 0 0 5px;height: 180px; width: 460px; background:lavender">
        <tr>
            <td > <label for = "log">Username* </label>

            <td > <input type="text" id = "log" maxlength="16" pattern="[A-Za-z0-9]+" placeholder="Enter your login" name = "login" required ></td>
        </tr>
        <tr >
            <td style=" width: 200px; text-align: left"><label for = "pass">Password*</label> <label id="pr">only numbers </label></td></td>
            <td><input type="password" id = "pass" maxlength="20"  placeholder="Enter your password" name = "password" required pattern="\d{4,16}" ></td><br>
        </tr>
        <tr >
            <td ><label for = "confim">Confim password*</label></td>
            <td><input type="password" id = "confim" maxlength="20"   placeholder="Enter again you password" name = "re-password" required  pattern="\d{4,16}"  ></td>
        </tr>
    </table>
    <b>Personal Information</b>
    <table style="  box-shadow: 0 0 5px;background: lavender; width: 460px">
        <tr >
            <td >  <label for = "f_name">First Name*</label></td>
            <td><input type="text" id ="f_name" maxlength="16"  placeholder="Enter your first name" pattern="[A-ZА-Я][a-z а-я]+" name = "f_name"  required ></td>
        </tr>
        <tr>
            <td >  <label for = "s_name">Second Name*</label></td>
            <td><input type="text" id ="s_name" maxlength="16"  placeholder="Enter your second name" pattern="[A-ZА-Я][a-z а-я]+" name = "s_name"  required ></td>
        </tr>
        <tr >
            <td ><label for = "date">Age*</label></td>
            <td><input type="text"  name = "age" id = "date" placeholder="Enter your age" required pattern="1[6-9]{1}|2[0-9]{1}|3[0-9]{1}|4[0-9]{1}|5[0-9]{1}|6[0-9]{1}|7[0-9]{1}|8[0-9]{1}|9[0-9]{1}|100"></td>
        </tr>

    </table>

    <b>Contact Information</b>
    <table style="  box-shadow: 0 0 5px; height: 10%;width: 460px; background: lavender">
        <tr>
            <td ><label for = "email" >Email Address *</label></td>
            <td><input type="text" id = "email"  placeholder="example@email.com" required pattern="[A-Z a-z 0-9]+@[a-z]+.[a-z]+" name = "email" ></td>
        </tr>
        <tr >
            <td >  <label for = "county">county*</label></td>
            <td><input type="text" id ="county" maxlength="16"  placeholder="Enter your county" pattern="[A-ZА-Я][a-z а-я]+" name = "county"  required ></td>
        </tr>
        <tr >
            <td >  <label for = "city">City*</label></td>
            <td><input type="text" id ="city" maxlength="16"  placeholder="Enter your city" pattern="[A-ZА-Я][a-z а-я]+" name = "city"  required ></td>
        </tr>
        <tr>
            <td ><label for = "phone">Phone Number</label></td>
            <td><input type="text"  placeholder="+38(021)222-4444"  pattern="\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d" id = "phone"  name = "mobile"></td>
        </tr>

    </table>
    <br><button type = 'submit'  id="b1"  onclick="return validateForm (this)" style="background-color: grey; color: white; width: 300px; height: 40px;">Submit Registration</button>
</form>
<script>
    function validateForm (form) {
        var password = document.getElementById('pass').value;
        var confirmPassword = document.getElementById('confim').value;
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return false;
        }


    }


</script>
</body>
</html>


