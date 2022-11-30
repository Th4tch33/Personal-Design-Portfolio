let gravity = 2;
let iconSpeedOffset = 5;
let numOfIcons = 100;
let rotationSpeed = 3;
let iconFloor = 0;
let iconRange = 600;

let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

hoverState = false;
let prev;
let current;

const icons = [];

class iconBuilder {
    constructor(x, y, vY, r ,vR) {
        this.x = x;
        this.y = y;
        this.vY = vY;
        this.r = r;
        this.vR = vR;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
}

function getRandomIntRange(min, max) {
    let rand = Math.floor(Math.random() * max);

    while (rand < min) {
        rand = Math.floor(Math.random() * max);
    }
    
    return rand;
}

function getRandomBool() {
    return Math.random() < 0.5;
}

function createWarningImage(color, order) {    
    let loader = document.getElementById("iconGroup");
    let div = document.createElement('div');
    let img = document.createElement("IMG");
    img.setAttribute("src", "images/warning" + getRandomInt(8) + ".svg");
    img.setAttribute("alt", "warning");
    
    div.setAttribute("id", "div" + order);
    div.appendChild(img);
    div.style.position = "absolute";
    div.style.left = "0px";
    div.style.top = "0px";
    div.style.transform = "rotate(0deg)";
    div.style.pointerEvents = "hidden";
    loader.appendChild(div);

    document.body.appendChild(loader);
}

function hover(name, work) {
    hoverState = true;
    hoverName = name;
    hoverDesc = work;
}

function hoverOff() {
    hoverState = false;

    document.getElementById('cursorIconH3').style.opacity = 0;

    document.getElementById('cursorIconP').style.opacity = 0;

    document.getElementById('cursorIcon').style.maxWidth = 0;
}

window.onload = function()
{
    iconFloor = document.documentElement.scrollHeight

    document.getElementById("loadingScreen").classList.add("fadeOut");

    for(let i = 0; i < numOfIcons; i++) {
        createWarningImage(getRandomInt(9), i);
        icons[i] = new iconBuilder(getRandomIntRange(windowWidth - iconRange, windowWidth), getRandomInt(iconFloor), -getRandomInt(iconSpeedOffset), getRandomInt(360), getRandomInt(rotationSpeed));
    }

    setInterval(function()
    {
        console.log(iconFloor);
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;
        iconFloor = document.documentElement.scrollHeight;

        for(let i = 0; i < numOfIcons; i++) {
            let focusDiv = document.getElementById("div" + i);

            icons[i].y -= icons[i].vY - gravity;
            icons[i].r += icons[i].vR; 
            
            focusDiv.style.left = icons[i].x + 'px';
            focusDiv.style.top = icons[i].y + 'px';
            focusDiv.style.transform = "rotate(" + icons[i].r + "deg)"

            if(icons[i].y > iconFloor - 100){
                icons[i].y = 0;
                icons[i].x = getRandomIntRange(windowWidth - iconRange, windowWidth);
            }
        }       
    }, 10);
}