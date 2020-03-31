document.addEventListener("DOMContentLoaded", () => {
    nextTask()
})

F.oninput = function(){ C.value = (5 / 9 * (F.value - 32)).toFixed(1) }
C.oninput = function(){ F.value = (32 + (9 / 5 * C.value)).toFixed(1) }

var rez, score = count = 0

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

    // elem.innerHTML = (userAnswer == rez) ? 
    //  "Відповідь правильна" : `Помилка, праильна відповідь: ${rez}`    
}