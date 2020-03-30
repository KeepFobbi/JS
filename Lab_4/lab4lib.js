var dayArr = [
    'Понеділок',
    'Вівторок',
    'Середа',
    'Четвер',
    "П'ятниця",
    "Субота",
    'Неділя']

function printDateTime(){

    var date = new Date();
        
    var text = 'Дата: '
     + date.getDate() + ' ' 
     + date.toLocaleString('ua', {month: 'long'}) + ' '
     + date.getFullYear() + " року <br>"
     + "День: " 
     + dayArr[date.getDay() - 1] + "<br>"
     + "Час: " + date.getHours() + ":"
     + date.getMinutes() + ":"
     + date.getSeconds() + "<br>"

    var elem = document.getElementById("task_1");
    elem.innerHTML = text
}

function printDay(date){
    var day = {
        dayNumber: date.getDay() + 1,
        dayName: dayArr[date.getDay()]
    }

    var text = "Номер дня: " + day.dayNumber + "<br>"
    + "Назва дня: " + day.dayName + "<br>"

    var elem = document.getElementById('task_2')
    elem.innerHTML = text
}

function dayNAgo(date){
    var N = document.getElementById('daysAgo').value
    date.setDate(date.getDate() - N)

    var elem = document.getElementById('task_3')
    elem.innerHTML = date
}