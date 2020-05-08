function Tochky(x, y){
    this.x = x;
    this.y = y;
}
Tochky.prototype = { x : 0, y : 0, constructor : Tochky};

var model = ['L', 'J', 'O', 'I', 'Z', 'S', 'T'];

var coord = {
    'L' : [new Tochky(0, -2), new Tochky(0, -1), new Tochky(0, 0), new Tochky(1, 0)],
    'J' : [new Tochky(0, -2), new Tochky(0, -1), new Tochky(0, 0), new Tochky( -1, 0)],
    'O' : [new Tochky(0, -1), new Tochky(1, -1), new Tochky(1, 0), new Tochky(0, 0)],
    'I' : [new Tochky(0, -2), new Tochky(0, -1), new Tochky(0, 0), new Tochky(0, 1)],
    'Z' : [new Tochky(-1, -1), new Tochky(0, -1), new Tochky(0, 0), new Tochky(1, 0)],
    'S' : [new Tochky(1, -1), new Tochky(0, -1), new Tochky(0, 0), new Tochky(-1, 0)],
    'T' : [new Tochky(-1, 0), new Tochky(0, 0), new Tochky(1, 0), new Tochky(0, 1)]
};
var colors = ['#ff00ff', '#ff0000', '#00ff00', '#0000ff', '#ffff00','#e6e6fa','#00ffff'];
function randomColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomTetr(){
    return coord[model[Math.floor(Math.random() * model.length)]];
}

var empty = '#696969';
var udal = '#000000';
var size = 20;
function getemptyLine(){
    return [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty];
}

function isLineFull(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == empty){
            return false;
        }
    }
    return true;
}

function paintFullLine(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i] = udal;
    }
}
var score = 0;

function checkFullLines(){
    var toKill = [];
    for(var i = fieldTochkys.length - 1; i >= 0; i--){
        if(isLineFull(fieldTochkys[i])){
            toKill.push(i);
            paintFullLine(fieldTochkys[i]);
        }
    }
    
    render();
    if(toKill.length){
    
        var deltaScore = 100 * toKill.length + (toKill.length - 1) * (toKill.length - 1) * 100;
        addScore(deltaScore);
        document.getElementById('dscore').innerHTML = '+ ' + deltaScore;
        console.log('+ ' + deltaScore);
    
        paused = true;
    
        setTimeout(function(){
            for(var k = 0; k < toKill.length; k++){
                fieldTochkys.splice(toKill[k], 1);
            }
            for(var k = 0; k < toKill.length; k++){
                fieldTochkys.unshift(getemptyLine());
            }
            toKill = [];
            render();
            document.getElementById('dscore').innerHTML = '';
            paused = false;
        }, 150);
    }
}
var fieldTochkys = [];

function initFieldTochkys(){
    fieldTochkys = [];
    for(var i = 0; i < 22; i++){
        fieldTochkys.push(getemptyLine());
    }
}

function isTochkyFree(x, y){
    if(!fieldTochkys[y]){
        return false;
    }
    if(!fieldTochkys[y][x]){
        return false;
    }

    return fieldTochkys[y][x] === empty;
}

function allowTetr(arr){
    for(var i = 0; i < arr.length; i++){
        if(!isTochkyFree(arr[i].x, arr[i].y)){
            return false;
        }
    }
    return true;
}

function addTochky(x, y, color){
    fieldTochkys[y][x] = color;
}

var angle = 0;
var x = 4;
var y = 2;
var Tochkys = [];
var pColor = '#0000ff';

function createTetr(){
    Tochkys = getRandomTetr();
    angle = 0;
    x = 4 + Math.round(Math.random());
    y = 2;
    pColor = randomColor();
    if(!allowTetr(globalTetrPosition(Tochkys))){
        paused = true;
        document.getElementById('status').innerHTML = 'GAME OVER';
        render();
    }
}

function rotate(){
    var a = angle + 90 > 270 ? 0 : angle + 90;
    var arr = [];
    if(a === 90 || a === 270){
        for(var i = 0; i < Tochkys.length; i++){
            arr[i] = new Tochky(-Tochkys[i].y, Tochkys[i].x);
        }
    }else{
        for(var i = 0; i < Tochkys.length; i++){
            arr[i] = new Tochky(-Tochkys[i].y, Tochkys[i].x);
        }
    }

    if(allowTetr(globalTetrPosition(arr))){
        angle = a;
        Tochkys = arr;
    }
}

function move(d){

    if(allowTetr(globalTetrPosition(Tochkys, d))){
        x += d;
    }
}

function down(){

    if(allowTetr(globalTetrPosition(Tochkys, 0, 1))){
        ++y;
        return true;
    }
    die();
    checkFullLines();
    createTetr();
    return false;
}

function drop(){
    while(down()){

    }
}

function die(){
    var arr = globalTetrPosition(Tochkys);
    for(var i = 0; i < arr.length; i++){
        addTochky(arr[i].x, arr[i].y, pColor);
    }
}

function globalTetrPosition(arr, dx, dy){
    dx = dx || 0;
    dy = dy || 0;
    var res = [];
    for(var i = 0; i < arr.length; i++){
        res[i] = new Tochky(arr[i].x + x + dx, arr[i].y + y + dy);
    }
    return res;
}

var intervalID = '';

function start(re){
    window.clearInterval(intervalID);
    initFieldTochkys();
    paused = false;
    document.getElementById('status').innerHTML = 'playing';
    addScore(-score);
    createTetr();
    intervalID = window.setInterval(step, 600);
    render();
}
var paused = false;

function togglePaused(){
    paused = !paused;
    document.getElementById('status').innerHTML = paused ? 'paused' : 'playing';
}

function step(){
    if(paused){
        return;
    }
    down();
    render();
}

var action = '';
function handleKey(evt){
    switch(evt.keyCode){
        case 37:
            if(!paused)move(-1);
            break;
        case 39:
            if(!paused)move(1);
            break;
        case 38:
            if(!paused)rotate();
            break;
        case 40:
            if(!paused)down();
            break;
        case 32:
            if(!paused)drop();
            break;
        case 27:
            togglePaused();
            break;
    }
    evt.preventDefault();
    render();
}

function pathRect(gr, x, y, w, h){
    gr.moveTo(x, y);
    gr.lineTo(x + w, y);
    gr.lineTo(x + w, y + h);
    gr.lineTo(x, y + h);
    gr.lineTo(x, y);
}

function graphicsRender(gr){
    gr.fill();
    gr.stroke();
}

function render(){

    var currentPos = globalTetrPosition(Tochkys);

    var colors = {};

    for(var i = 0; i < 22; i++){
        for(var k = 0; k < 10; k++){
            if(!colors[fieldTochkys[i][k]]){
                colors[fieldTochkys[i][k]] = [];
            }
            colors[fieldTochkys[i][k]].push(new Tochky(k, i));
        }
    }
    for(var c = 0; c < currentPos.length; c++){
        if(!colors[pColor]){
            colors[pColor] = [];
        }
        colors[pColor].push(new Tochky(currentPos[c].x, currentPos[c].y));
    }
    
    var can = document.getElementById('canvas');
    var graphics = can.getContext('2d');
    
    graphics.clearRect(0,0,10 * size, 22 * size);
    
    graphics.strokeStyle = "#000000";
    graphics.lineWidth = 1;
    for(var k in colors){
        graphics.beginPath();
        graphics.fillStyle = k;
        for(var i = 0; i < colors[k].length; i++){
            pathRect(graphics, colors[k][i].x * size, colors[k][i].y * size, size, size);
        }
        graphicsRender(graphics);
    }
}

function addScore(d){
    score += d;
    document.getElementById('score').innerHTML = score;
}