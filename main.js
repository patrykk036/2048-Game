let a =
[[2, 2, 0, 0],
[0, 0, 0, 0],
[0, 0, 0, 0],
[0, 0, 0, 0]];
let currentScore = 0;
var rows = document.querySelector('.game-content').children;
var domArr = [rows[0].children, rows[1].children, rows[2].children, rows[3].children];
var moveArr = [];
let fadeTime = 270;
function draw(){
    for(var i = 0 ; i < 4 ; i++){
        for(var y = 0 ; y < 4 ; y++){
            domArr[i][y].className = "";
            domArr[i][y].innerHTML = "";
            domArr[i][y].classList.add("square");
            domArr[i][y].classList.add("n"+a[i][y]);
            document.querySelector('.score').innerText = currentScore;
            if(a[i][y] != 0){
                domArr[i][y].innerHTML = a[i][y];
            }   
        }
    }
}
document.querySelector('.new-game').addEventListener('click', function(){
    a=[[2, 2, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]];
    currentScore = 0;
    draw();
});
function generateNumber(){
    let i = Math.floor(Math.random() * 4);
    let y = Math.floor(Math.random() * 4);
    return [i,y];
}

function putNumber(){
    let randNumber = generateNumber();
    while(a[randNumber[0]][randNumber[1]] != 0){
        randNumber = generateNumber();
    }
    a[randNumber[0]][randNumber[1]] = 2;
        $(domArr[randNumber[0]][randNumber[1]]).hide().fadeIn(fadeTime);
}

function checkLose(){
    if(!canMoveBottom() && !canMoveTop() && !canMoveLeft() && !canMoveRight()){
        alert("You lose");
    }
}

function canMoveTop(){
    moveArr = [];
    for(var i = 0 ; i < 4 ; i++){
        if(a[0][i] != 0 && a[1][i] === 0 && a[2][i] === 0 && a[3][i] === 0){
            moveArr.push(false);
        }
        else if(a[0][i] != 0 && a[1][i] != 0 && a[0][i] != a[1][i] && a[2][i] === 0 && a[3][i] === 0){
            moveArr.push(false);
        }
        else if(a[0][i] != 0 && a[1][i] != 0 && a[2][i] != 0 && a[0][i] != a[1][i] && a[1][i] != a[2][i]
            && a[3][i] === 0){
            moveArr.push(false);
        }
        else if(a[0][i] != 0 && a[1][i] != 0 && a[2][i] != 0 && a[3][i] != 0 && a[0][i] != a[1][i]
            && a[1][i] != a[2][i] && a[2][i] != a[3][i]){
                moveArr.push(false);
            }
        else if(a[0][i] === 0 && a[1][i] === 0 && a[2][i] === 0 && a[3][i] === 0){
            moveArr.push(false);
        }
        else moveArr.push(true);
    }
    if(!moveArr[0] && !moveArr[1] && !moveArr[2] && !moveArr[3]){
        return false;
    }
    return true;
}

function canMoveBottom(){
    moveArr = [];
    for(var i = 0 ; i < 4 ; i++){
        if(a[3][i] != 0 && a[2][i] === 0 && a[1][i] === 0 && a[0][i] === 0){
            moveArr.push(false);
        }
        else if(a[3][i] != 0 && a[2][i] != 0 && a[3][i] != a[2][i] && a[1][i] === 0 && a[0][i] === 0){
            moveArr.push(false);
        }
        else if(a[3][i] != 0 && a[2][i] != 0 && a[1][i] != 0 && a[3][i] != a[2][i] && a[2][i] != a[1][i]
            && a[0][i] === 0){
            moveArr.push(false);
        }
        else if(a[3][i] != 0 && a[2][i] != 0 && a[1][i] != 0 && a[0][i] != 0 && a[3][i] != a[2][i]
            && a[2][i] != a[1][i] && a[1][i] != a[0][i]){
                moveArr.push(false);
            }
        else if(a[3][i] === 0 && a[2][i] === 0 && a[1][i] === 0 && a[0][i] === 0){
            moveArr.push(false);
        }
        else moveArr.push(true);
    }
    if(!moveArr[0] && !moveArr[1] && !moveArr[2] && !moveArr[3]){
        return false;
    }
    return true;
}

function canMoveLeft(){
    moveArr = [];
    for(var i = 0 ; i < 4 ; i++){
        if(a[i][0] != 0 && a[i][1] === 0 && a[i][2] === 0 && a[i][3] === 0){
            moveArr.push(false);
        }
        else if(a[i][0] != 0 && a[i][1] != 0 && a[i][0] != a[i][1] && a[i][2] === 0 && a[i][3] === 0){
            moveArr.push(false);
        }
        else if(a[i][0] != 0 && a[i][1] != 0 && a[i][2] != 0 && a[i][0] != a[i][1] && a[i][1] != a[i][2]
            && a[i][3] === 0){
            moveArr.push(false);
        }
        else if(a[i][0] != 0 && a[i][1] != 0 && a[i][2] != 0 && a[i][3] != 0 && a[i][0] != a[i][1]
            && a[i][1] != a[i][2] && a[i][2] != a[i][3]){
                moveArr.push(false);
            }
        else if(a[i][0] === 0 && a[i][1] === 0 && a[i][2] === 0 && a[i][3] === 0){
            moveArr.push(false);
        }
        else moveArr.push(true);
    }
    if(!moveArr[0] && !moveArr[1] && !moveArr[2] && !moveArr[3]){
        return false;
    }
    return true;
}

function canMoveRight(){
    moveArr = [];
    for(var i = 0 ; i < 4 ; i++){
        if(a[i][3] != 0 && a[i][2] === 0 && a[i][1] === 0 && a[i][0] === 0){
            moveArr.push(false);
        }
        else if(a[i][3] != 0 && a[i][2] != 0 && a[i][3] != a[i][2] && a[i][1] === 0 && a[i][0] === 0){
            moveArr.push(false);
        }
        else if(a[i][3] != 0 && a[i][2] != 0 && a[i][1] != 0 && a[i][3] != a[i][2] && a[i][2] != a[i][1]
            && a[i][0] === 0){
            moveArr.push(false);
        }
        else if(a[i][3] != 0 && a[i][2] != 0 && a[i][1] != 0 && a[i][0] != 0 && a[i][3] != a[i][2]
            && a[i][2] != a[i][1] && a[i][1] != a[i][0]){
                moveArr.push(false);
            }
        else if(a[i][0] === 0 && a[i][1] === 0 && a[i][2] === 0 && a[i][3] === 0){
            moveArr.push(false);
        }
        else moveArr.push(true);
    }
    if(!moveArr[0] && !moveArr[1] && !moveArr[2] && !moveArr[3]){
        return false;
    }
    return true;
}

function moveTop(){
    for(var i = 0 ; i < 4 ; i ++){
        for(var y = 0 ; y < 3 ; y++){
            var temp = 0;
            while(temp < 3){
                if(a[temp][i] === 0){
                    a[temp][i] = a[temp+1][i];
                    a[temp+1][i] = 0;
                }
                temp++;
            }
        }
        if(a[0][i] === a[1][i] && a[2][i] === a[3][i] && a[0][i] != 0 &&a[2][i] != 0){
            currentScore += (2*a[0][i] + 2*a[2][i]);
            a[0][i] *= 2;
            a[1][i] = 2 * a[2][i];
            a[2][i] = 0;
            a[3][i] = 0;
            $(domArr[0][i]).hide().fadeIn(fadeTime);
            $(domArr[1][i]).hide().fadeIn(fadeTime);
        }
        else if(a[0][i] === a[1][i] && a[0][i] != 0){
            currentScore += 2*a[0][i]; 
            a[0][i] *= 2;
            a[1][i] = a[2][i];
            a[2][i] = a[3][i];
            a[3][i] = 0;
            $(domArr[0][i]).hide().fadeIn(fadeTime);
        }
        else if(a[1][i] === a[2][i] && a[1][i] != 0){
            currentScore += 2*a[1][i];
            a[1][i] *= 2;
            a[2][i] = a[3][i];
            a[3][i] = 0;
            $(domArr[1][i]).hide().fadeIn(fadeTime);
        }
        else if(a[2][i] === a[3][i] && a[2][i] != 0){
            currentScore += 2*a[2][i];
            a[2][i] *= 2;
            a[3][i] = 0;
            $(domArr[2][i]).hide().fadeIn(fadeTime);
        }
    }
        putNumber();
        draw();
        checkLose();
}

function moveBottom(){
    for(var i = 0 ; i < 4 ; i ++){
        for(var y = 3 ; y > 0 ; y--){
            var temp = 3;
            while(temp > 0){
                if(a[temp][i] === 0){
                    a[temp][i] = a[temp-1][i];
                    a[temp-1][i] = 0;
                }
                temp--;
            }
        }
        if(a[3][i] === a[2][i] && a[1][i] === a[0][i] && a[3][i] != 0 && a[1][i] != 0){
            currentScore += (2*a[3][i] + 2*a[1][i]);
            a[3][i] *= 2;
            a[2][i] = 2 * a[1][i];
            a[1][i] = 0;
            a[0][i] = 0;
            $(domArr[3][i]).hide().fadeIn(fadeTime);
            $(domArr[2][i]).hide().fadeIn(fadeTime);
        }
        else if(a[3][i] === a[2][i] && a[3][i] != 0){
            currentScore += 2*a[3][i];
            a[3][i] *= 2;
            a[2][i] = a[1][i];
            a[1][i] = a[0][i];
            a[0][i] = 0;
            $(domArr[3][i]).hide().fadeIn(fadeTime);
        }
        else if(a[2][i] === a[1][i] && a[2][i] != 0){
            currentScore += 2*a[2][i];
            a[2][i] *= 2;
            a[1][i] = a[0][i];
            a[0][i] = 0;
            $(domArr[2][i]).hide().fadeIn(fadeTime);
        }
        else if(a[1][i] === a[0][i] && a[1][i] != 0){
            currentScore += 2*a[1][i];
            a[1][i] *= 2;
            a[0][i] = 0;
            $(domArr[1][i]).hide().fadeIn(fadeTime);
        }
    }
    putNumber();
    draw();
    checkLose();
}

function moveLeft(){
    for(var i = 0 ; i < 4 ; i ++){
        for(var y = 0 ; y < 3 ; y++){
            var temp = 0;
            while(temp < 3){
                if(a[i][temp] === 0){
                    a[i][temp] = a[i][temp+1];
                    a[i][temp+1] = 0;
                }
                temp++;
            }
        }
        if(a[i][0] === a[i][1] && a[i][2] === a[i][3] && a[i][0] != 0 && a[i][2] != 0){
            currentScore += (2*a[i][0] + 2*a[i][2]);
            a[i][0] *= 2;
            a[i][1] = 2 * a[i][2];
            a[i][2] = 0;
            a[i][3] = 0;
            $(domArr[i][0]).hide().fadeIn(fadeTime);
            $(domArr[i][1]).hide().fadeIn(fadeTime);
        }
        else if(a[i][0] === a[i][1] && a[i][0] != 0){
            currentScore += 2*a[i][0];
            a[i][0] *= 2;
            a[i][1] = a[i][2];
            a[i][2] = a[i][3];
            a[i][3] = 0;
            $(domArr[i][0]).hide().fadeIn(fadeTime);
        }
        else if(a[i][1] === a[i][2] && a[i][1] != 0){
            currentScore += 2*a[i][1];
            a[i][1] *= 2;
            a[i][2] = a[i][3];
            a[i][3] = 0;
            $(domArr[i][1]).hide().fadeIn(fadeTime);
        }
        else if(a[i][2] === a[i][3] && a[i][2] != 0){
            currentScore += 2*a[i][2];
            a[i][2] *= 2;
            a[i][3] = 0;
            $(domArr[i][2]).hide().fadeIn(fadeTime);
        }
    }
    putNumber();
    draw();
    checkLose();
}

function moveRight(){
    for(var i = 0 ; i < 4 ; i ++){
        for(var y = 0 ; y < 3 ; y++){
            var temp = 3;
            while(temp > 0){
                if(a[i][temp] === 0){
                    a[i][temp] = a[i][temp-1];
                    a[i][temp-1] = 0;
                }
                temp--;
            }
        }
        if(a[i][3] === a[i][2] && a[i][1] === a[i][0] && a[i][3] != 0 && a[i][1] != 0){
            currentScore += (2*a[i][3] + 2*a[i][1]);
            a[i][3] *= 2;
            a[i][2] = 2 * a[i][1];
            a[i][1] = 0;
            a[i][0] = 0;
            $(domArr[i][3]).hide().fadeIn(fadeTime);
            $(domArr[i][2]).hide().fadeIn(fadeTime);
        }
        else if(a[i][3] === a[i][2] && a[i][3] != 0){
            currentScore += 2*a[i][3];
            a[i][3] *= 2;
            a[i][2] = a[i][1];
            a[i][1] = a[i][0];
            a[i][0] = 0;
            $(domArr[i][3]).hide().fadeIn(fadeTime);
        }
        else if(a[i][2] === a[i][1] && a[i][2] != 0){
            currentScore += 2*a[i][2];
            a[i][2] *= 2;
            a[i][1] = a[i][0];
            a[i][0] = 0;
            $(domArr[i][2]).hide().fadeIn(fadeTime);
        }
        else if(a[i][1] === a[i][0] && a[i][1] != 0){
            currentScore += 2*a[i][1];
            a[i][1] *= 2;
            a[i][0] = 0;
            $(domArr[i][1]).hide().fadeIn(fadeTime);
        }
    }
    putNumber();
    draw();
    checkLose();
}

document.onkeydown = function(e) {
    if (e.keyCode === 38 && canMoveTop()){
        moveTop();
    }
    if (e.keyCode === 37 && canMoveLeft()){
        moveLeft();
    }
    if (e.keyCode === 40 && canMoveBottom()){
        moveBottom();
    }
    if (e.keyCode === 39 && canMoveRight()){
        moveRight();
    }
}
draw();