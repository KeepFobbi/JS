document.addEventListener("DOMContentLoaded", () => {
    nextTask();
    nextRadioTask();
    initPhotoRotator('rotator', imagesArray);
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

var imagesArray = [
    {path: 'img/1.jpg',
    title: 'Гори, красвий захід сонця',
    description: 'FullHD 1080p 1920x1080 1'},
    {path: 'img/2.jpg',
    title: 'Заплутана домівка, готель біля річки',
    description: 'FullHD 1080p 1920x1080 2'},
    {path: 'img/3.jpg',
    title: 'Дорога додому, золота осінь',
    description: 'FullHD 1080p 1920x1080 3'}
]

var pointer = 0

function initPhotoRotator(divId, imgArr){
    var divElem = document.getElementById(divId)
    var mainTable = document.createElement('table')
    mainTable.setAttribute('border', '1')
    mainTable.style.width = '50%'

    var tr0 = document.createElement('tr')
    tr0.setAttribute('align', 'center')
    
    var td0_0 = document.createElement('td')
    td0_0.style.width = '10%'
    td0_0.setAttribute('rowspan', '3')

    var aBack = document.createElement('a')
    aBack.hidden = true
    aBack.setAttribute('href', '#')
    aBack.appendChild(document.createTextNode('Назад'))

    var td0_1 = document.createElement('td')
    var pCount = document.createElement('p')
    pCount.appendChild(document.createTextNode(`Фотографія 1 з ${imagesArray.length}`))

    var td0_2 = document.createElement('td')
    td0_2.style.width = '10%'
    td0_2.setAttribute('rowspan', '3')

    var aNext = document.createElement('a')
    aNext.setAttribute('href', '#')
    aNext.appendChild(document.createTextNode('Вперед'))

    var tr1 = document.createElement('tr')
    tr1.setAttribute('align', 'center')

    var td1_0 = document.createElement('td')
    td1_0.style.width = '80%'

    var image = document.createElement('img')
    image.style.width = '90%'
    image.setAttribute('src', imagesArray[pointer].path)

    var tr2 = document.createElement('tr')
    tr2.setAttribute('align', 'center')

    var td2_0 = document.createElement('td')
    td2_0.innerHTML = `<p><b>${imagesArray[pointer].title}</b></p>
    ${imagesArray[pointer].description}</p>`
    
    td0_0.appendChild(aBack)
    td0_1.appendChild(pCount)
    td0_2.appendChild(aNext)
    td1_0.appendChild(image)

    tr0.appendChild(td0_0)
    tr0.appendChild(td0_1)
    tr0.appendChild(td0_2)
    tr1.appendChild(td1_0)
    tr2.appendChild(td2_0)
    
    mainTable.appendChild(tr0)
    mainTable.appendChild(tr1)
    mainTable.appendChild(tr2)
    divElem.appendChild(mainTable)

    aBack.addEventListener('click', () => {
        pointer = (pointer - 1 + imagesArray.length) % imagesArray.length
        changeImg(image, pCount, td2_0, aBack, aNext)
    })

    aNext.addEventListener('click', () => {
        pointer = (pointer + 1) % imagesArray.length
        changeImg(image, pCount, td2_0, aBack, aNext)
    })
}

function changeImg(image, headerTxt, desc, back, next){
    back.hidden = (pointer == 0) ? true : false
    next.hidden = (pointer + 1 == imagesArray.length) ? true : false

    image.setAttribute('src', imagesArray[pointer].path)
    headerTxt.innerHTML = `Фотографія ${pointer + 1} з ${imagesArray.length}`
    desc.innerHTML = `<p><b>${imagesArray[pointer].title}</b></p>
    ${imagesArray[pointer].description}</p>`
}

function renderCaptcha(n) {
    for (var i = 1; i <= 4; i++) {
        renderNumber();
    }
}

function renderNumber() {
    var number = Math.floor((Math.random() * 3))
    captchaNumber += number
    var innerBlock = document.createElement("div")
    innerBlock.classList.add("innerBlock")
    for (let i = 0; i <= 5; i++) {
        for (let j = 0; j <= 2; j++) {
            var span = document.createElement("span")
            var className = (numbers[number][i][j] == 0) ? "bgWhite" : "bgRed"
            span.classList.add("span", className)
            innerBlock.appendChild(span)
        }
    }
    captchaContainer.appendChild(innerBlock)
}

var captchaNumber = ''
var numbers = [
    [[0, 1, 0], [1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 0, 1], [0, 1, 0]],
    [[1, 1, 0], [0, 1, 0], [0, 1, 0], [0, 1, 0], [0, 1, 0], [0, 1, 0]],
    [[0, 1, 0], [1, 0, 1], [0, 0, 1], [0, 1, 0], [1, 0, 0], [1, 1, 1]]
]
var captchaTask = document.getElementById("captchaTask")
var captchaContainer = document.createElement("div")
captchaContainer.classList.add('block')
captchaTask.appendChild(captchaContainer)
renderCaptcha(4)

buttonCheck.addEventListener('click', () => {
    if (captcha.value == captchaNumber) {
        checkCaptha.innerHTML = 'Правильно'
        checkCaptha.style.color = 'Green'
    }
    else{
        checkCaptha.innerHTML = 'Ne Правильно'
        checkCaptha.style.color = 'Red'
    }
})