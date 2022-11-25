let gravity = 0.5;
let numOfIcons = 200;
let numOfIconsJump = 5;
let jumpHeight = 15;
let jumpHeightMax = 30;
let rotationSpeed = 3;
let iconFloor = 0;

let bombX = 1;
let bombY = 1;
let bombXSpeed = 2;
let bombYSpeed = 1.5;

let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

let bomb = document.getElementById("bouncingBomb");
let style = window.getComputedStyle(bomb);
let bombWidth = style.getPropertyValue("width");
let bombHeight = style.getPropertyValue("height");

const icons = [];

class iconBuilder {
    constructor(x, direction, vX, vY, r ,vR) {
        this.x = x;
        this.y = iconFloor;
        this.direction = direction;
        this.vX = vX;
        this.vY = vY;
        this.r = r;
        this.vR = vR;
    }
}

function click() {
    console.log("click");
}

function variableInitialization() {
    iconFloor = windowHeight + jumpHeight * 15;
    bombWidth = parseInt(bombWidth.replace('px', ''));
    bombHeight = parseInt(bombHeight.replace('px', ''));

    console.log(bombWidth);
    console.log(bombHeight);
}

function alignContent() {
    let contentDiv = document.getElementById("content");
    let contentDivHeight = contentDiv.offsetHeight;

    let contentShift = windowHeight / 2 - contentDivHeight / 2;

    contentDiv.style.marginTop =  contentShift+ "px";

    console.log(windowHeight);
    console.log(contentDivHeight);
    console.log(contentShift);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
}

function getRandomBool() {
    return Math.random() < 0.5;
}

function createWarningImage(color, order) {    
    let loader = document.getElementById("iconGroup");
    let div = document.createElement('div');
    let img = document.createElement("IMG");
    img.setAttribute("src", "images/triangleWarning" + getRandomInt(9) + ".svg");
    img.setAttribute("alt", "warning");
    
    div.setAttribute("id", "div" + order);
    div.appendChild(img);
    div.style.position = "absolute";
    div.style.left = "0px";
    div.style.top = "0px";
    div.style.transform = "rotate(0deg)";
    loader.appendChild(div);

    document.body.appendChild(loader);
}

function hoursFunction() {
    let launchDate = new Date("2021-03-14 20:00:00");
    let currentDate = new Date();

    let yearToHours = (currentDate.getFullYear()-launchDate.getFullYear())*8760;
    let monthToHours = (currentDate.getMonth()-launchDate.getMonth())*730;
    let dayToHours = (currentDate.getDate()-launchDate.getDate())*24;
    let hours = currentDate.getHours()-launchDate.getHours();

    let timeSinceLaunch = yearToHours+monthToHours+dayToHours+hours;
    
    document.getElementById("hours").innerHTML = timeSinceLaunch + " hours...";
}

window.onload = function()
{
    document.getElementById("bouncingBomb").addEventListener("click", click);

    document.querySelector(".loadingScreen").classList.add("fadeOut");

    alignContent();
    hoursFunction();
    variableInitialization();

    for(let i = 0; i < numOfIcons; i++) {
        createWarningImage(getRandomInt(9), i);
        icons[i] = new iconBuilder(getRandomInt(windowWidth),getRandomBool(), getRandomInt(5), getRandomInt(jumpHeight), getRandomInt(360), getRandomInt(rotationSpeed));
    }

    setInterval(function()
    {
        for(let i = 0; i < numOfIcons; i++) {
            let focusDiv = document.getElementById("div" + i);

            icons[i].y -= icons[i].vY - gravity;
            icons[i].vY -= gravity;

            if(icons[i].direction == true) {
                icons[i].x += icons[i].vX;
                icons[i].r += icons[i].vR; 
            }

            else {
                icons[i].x -= icons[i].vX;
                icons[i].r -= icons[i].vR; 
            }
            
            focusDiv.style.left = icons[i].x + 'px';
            focusDiv.style.top = icons[i].y + 'px';
            focusDiv.style.transform = "rotate(" + icons[i].r + "deg)"

            if(icons[i].y > iconFloor){
                if(i < numOfIconsJump) {
                    icons[i].vY = getRandomInt(jumpHeightMax);
                    icons[i].x = getRandomInt(windowWidth);
                }
                else {
                    icons[i].vY = getRandomInt(jumpHeight);
                    icons[i].x = getRandomInt(windowWidth);
                }
                
            }
        }
        
        if(window.scrollY > 250) {
            window.scrollBy(0, -25);
        }

        bombX += bombXSpeed;
        bombY += bombYSpeed;
        
        bomb.style.left = bombX + scrollX + "px";
        bomb.style.top = bombY + scrollY + "px";

        if(bombX <= 0) {
            bombXSpeed *= -1;
            console.log("x switch min");
        }

        if(bombX + bombWidth >= windowWidth) {
            bombXSpeed *= -1;

            console.log("x switch max");
        }

        if(bombY <= 0) {
            bombYSpeed *= -1;
        }

        if(bombY + bombHeight >= windowHeight) {
            bombYSpeed *= -1;
        }

    }, 10);
}