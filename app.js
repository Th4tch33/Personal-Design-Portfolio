let gravity = 0.5;
let numOfIcons = 150;
let numOfIconsJump = 7;
let jumpHeight = 15;
let jumpHeightMax = 30;
let rotationSpeed = 3;
let iconFloor = 0;

let bombX;
let bombY;
let bombXSpeed = 2;
let bombYSpeed = 2;
let bombWindowBounds;

let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

let hoursDots = "";
let timeSinceLaunch = null;

let hoverState = false;
let mouseX = 0;
let mouseY = 0;
let hoverName = null;
let hoverDesc = null;

let fakeoutActive = true;

let prev;
let current;

let bomb = document.getElementById("bouncingBomb");
let bombWidth;
let bombHeight;

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

function variableInitialization() {
    iconFloor = document.getElementById("showreelContainer").getBoundingClientRect().top - 10;
    bombWidth = bomb.getBoundingClientRect().width;
    bombHeight = bomb.getBoundingClientRect().height;

    console.log(bombWidth);
    console.log(bombHeight);

    bombWindowBounds = document.getElementById("showreelContainer").getBoundingClientRect();
    bombX = 1;
    bombY = bombWindowBounds.top;
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

/*
function alignContent() {
    let contentDiv = document.getElementById("fakeoutContent");
    let contentDivHeight = contentDiv.offsetHeight;

    let contentShift = windowHeight / 2 - contentDivHeight / 2;

    contentDiv.style.marginTop =  contentShift+ "px";

    console.log(windowHeight);
    console.log(contentDivHeight);
    console.log(contentShift);
}
*/

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

function hoursFunction() {
    let launchDate = new Date("2003-09-02 20:00:00");
    let currentDate = new Date();

    let yearToHours = (currentDate.getFullYear()-launchDate.getFullYear())*8760;
    let monthToHours = (currentDate.getMonth()-launchDate.getMonth())*730;
    let dayToHours = (currentDate.getDate()-launchDate.getDate())*24;
    let hours = currentDate.getHours()-launchDate.getHours();

    timeSinceLaunch = yearToHours+monthToHours+dayToHours+hours;
}

window.onload = function()
{
    document.addEventListener('mousemove', (event) => {  
        mouseX = event.clientX;
        mouseY = event.clientY + window.pageYOffset

        if (hoverState == true) {
            document.getElementById('cursorIconH3').innerHTML = hoverName;
            document.getElementById('cursorIconH3').style.opacity = "100%";

            document.getElementById('cursorIconP').innerHTML = hoverDesc;
            document.getElementById('cursorIconP').style.opacity = "100%";

            document.getElementById('cursorIcon').style.maxWidth = "100vw";
        }

        document.getElementById('cursorIcon').style.left = mouseX + "px"
        document.getElementById('cursorIcon').style.top = mouseY + 20 +"px"
    });

    document.addEventListener('scroll', (event) => {
        current = window.pageYOffset;

        if((current - prev) % 2 > 0) {
            document.getElementById('nav').style.top = "-15vw";
        }
        else if ((current - prev) % 2 < 0) {
            document.getElementById('nav').style.top = "0";
        }

        mouseY += current - prev;

        prev = current;

        if (hoverState == true) {
            document.getElementById('cursorIconH3').innerHTML = hoverName;
            document.getElementById('cursorIconH3').style.opacity = "100%";

            document.getElementById('cursorIconP').innerHTML = hoverDesc;
            document.getElementById('cursorIconP').style.opacity = "100%";

            document.getElementById('cursorIcon').style.maxWidth = "100vw";
        }

        document.getElementById('cursorIcon').style.left = mouseX + "px";
        document.getElementById('cursorIcon').style.top = mouseY + 20 +"px";
    } )

    document.getElementById("loadingScreen").classList.add("fadeOut");

    //alignContent();
    hoursFunction();
    variableInitialization();

    for(let i = 0; i < numOfIcons; i++) {
        createWarningImage(getRandomInt(9), i);
        icons[i] = new iconBuilder(getRandomInt(windowWidth),getRandomBool(), getRandomInt(5), getRandomInt(jumpHeight), getRandomInt(360), getRandomInt(rotationSpeed));
    }

    setInterval(function()
    {
        if(fakeoutActive == true) {
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

            //Bomb Bouncing Code
            
            bombX += bombXSpeed;
            bombY += bombYSpeed;
            
            bomb.style.left = bombX + "px";
            bomb.style.top = bombY + "px";
    
            if(bombX <= 0) {
                bombXSpeed *= -1;
            }
    
            if(bombX + bombWidth >= windowWidth) {
                bombXSpeed *= -1;
            }
    
            if(bombY <= bombWindowBounds.top) {
                bombYSpeed *= -1;
            }
    
            if(bombY + bombHeight >= bombWindowBounds.bottom) {
                bombYSpeed *= -1;
            }            
        }
    }, 10);

    setInterval(function()
    {
        if(hoursDots.length == 0) {
            hoursDots = ".";
        }
        else if (hoursDots.length == 1){
            hoursDots = "..";
        }
        else if (hoursDots.length == 2){
            hoursDots = "...";
        }
        else {
            hoursDots = "";
        }

        document.getElementById("hours").innerHTML = timeSinceLaunch + " hours ago" + hoursDots;
    }, 750);
}