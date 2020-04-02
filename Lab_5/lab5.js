document.addEventListener("DOMContentLoaded", () => {
    nextTask();
    nextRadioTask();
})

F.oninput = function(){ C.value = (5 / 9 * (F.value - 32)).toFixed(1) }
C.oninput = function(){ F.value = (32 + (9 / 5 * C.value)).toFixed(1) }

var rez = score = count = 0

function nextTask(){
    var a = Math.floor(Math.random() * 10) + 1
    var b = Math.floor(Math.random() * 10) + 1
    rez = a * b

    let elem = document.getElementById('question')
    elem.innerHTML = `${a} * ${b} = `

    document.getElementById('answer').value = ''
}

function checkAnswer(){

    var userAnswer = document.getElementById('answer').value
    let elem = document.getElementById('rightAnswer')

    if (userAnswer == rez) {
        elem.innerHTML = "Відповідь правильна"        
        score++
    }
    else{
        elem.innerHTML = `Помилка, праильна відповідь: ${rez}`
    }    
    count++

    document.getElementById('score').innerHTML = 
        `Загальний рахунок ${(score / count * 100).toFixed(0)}% 
        (${score} правильних відповідей з ${count})`        
        nextTask()      
}

var RadioRez = RadioScore = RadioCount = 0

function nextRadioTask(){
    var rad = document.getElementsByName('dzen')

    var a = Math.floor(Math.random() * 10) + 1
    var b = Math.floor(Math.random() * 10) + 1
    var pos = Math.floor(Math.random() * 3) + 0
    RadioRez = a * b

    for (let i = 0; i < rad.length; i++)
        rad[i].value = (pos == i) ? RadioRez : a * Math.floor(Math.random() * 10) + 1

    document.getElementById('answer0').innerHTML = rad[0].value
    document.getElementById('answer1').innerHTML = rad[1].value
    document.getElementById('answer2').innerHTML = rad[2].value
    document.getElementById('answer3').innerHTML = rad[3].value

    let elem = document.getElementById('RadioQuestion')
    elem.innerHTML = `${a} * ${b} = `

    rad.checked = false
}

function checkRadioAnswer(selRadio){   

    let elem = document.getElementById('rightRadioAnswer')

    if (selRadio.value == RadioRez) {
        elem.innerHTML = "Відповідь правильна"
        RadioScore++
    }
    else{
        elem.innerHTML = `Помилка, праильна відповідь: ${RadioRez}`
    }
    RadioCount++

    document.getElementById('RadioScore').innerHTML = 
        `Загальний рахунок ${(RadioScore / RadioCount * 100).toFixed(0)}% 
        (${RadioScore} правильних відповідей з ${RadioCount})`
        nextRadioTask()
}