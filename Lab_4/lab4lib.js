var dayArr = [
    'Понеділок',
    'Вівторок',
    'Середа',
    'Четвер',
    "П'ятниця",
    "Субота",
    'Неділя']

function printDateTime(){ // 1

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

function printDay(date){ // 2

    var day = {
        dayNumber: date.getDay() + 1,
        dayName: dayArr[date.getDay()]
    }

    var text = "Номер дня: " + day.dayNumber + "<br>"
    + "Назва дня: " + day.dayName + "<br>"

    var elem = document.getElementById('task_2')
    elem.innerHTML = text
}

function dayNAgo(date){  // 3

    var N = document.getElementById('daysAgo').value
    date.setDate(date.getDate() - N)

    var elem = document.getElementById('task_3')
    elem.innerHTML = date
}

function getLastDayOfMonthYear(year, month) { // 4

    let date = new Date(year, month + 1, 0);
    
    var elem = document.getElementById('task_4')
    elem.innerHTML = date
  }

  function getSecondsTodayAnTomorrow() { // 5

    let now = new Date();

    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
    let diff = now - today;
    let secondsToday = Math.round(diff / 1000);

    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    diff = tomorrow - now
    let secondsTomorrow = Math.round(diff / 1000);

    var text = "К.с. від початку сьогоднішнього дня: " + secondsToday + "<br>"
    + "К.с. до початку наступного дня: " + secondsTomorrow 
    var elem = document.getElementById('task_5')
    elem.innerHTML = text
  }

  function formatDay(date){ // 6

      let dd = date.getDate()
      let mm = date.getMonth() + 1
      let yyyy = date.getFullYear()

      if (dd < 10) dd = '0' + dd
      if (mm < 10) mm = '0' + mm
      if (yyyy < 10) yyyy = '0' + yyyy

    var elem = document.getElementById('task_6')
    elem.innerHTML = dd + '.' + mm + '.' + yyyy
  }

  function differenceDates(date0, date1){ // 7

    var elem = document.getElementById('task_7')
    elem.innerHTML = Math.ceil(Math.abs(date1.getTime() - date0.getTime()) / (1000 * 3600 * 24)) - 1
  }

  function formatDate(date) { // 8

    var elem = document.getElementById('task_8')

    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;
  
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    if (diffSec < 1) {
        elem.innerHTML = 'прямо сейчас';
    } else if (diffMin < 1) {
        elem.innerHTML = `${diffSec} сек. назад`
    } else if (diffHour < 1) {
        elem.innerHTML = `${diffMin} мин. назад`
    } else {
        elem.innerHTML = `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
  }

  function knowDate(){
      let str = document.getElementById('Date').value
      let separator = str.charAt(2)
      
      var arrOfStr = str.split(separator)

    var elem = document.getElementById('task_9')
    elem.innerHTML = new Date(arrOfStr[2], arrOfStr[1] - 1, arrOfStr[0])
  }

  function langDate(date){
      var elem = document.getElementById('task_10')
        

      var dateWeek = date.toLocaleString(
          document.getElementById('lang').value, 
          {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            era: 'long',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        })
      elem.innerHTML = dateWeek 
  }