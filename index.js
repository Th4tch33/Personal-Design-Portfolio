//Moving Icon Variables
let gravity = 0.5;
let rotationSpeed = 2;

let numIconsFront = 2;
let numIconsMid = 10;
let numIconsBack = 60;
let numOfIcons = numIconsFront + numIconsMid + numIconsBack;

let initialFallMax = 5;
let initialFallMin = 2;

let iconFloor = 0;
let iconCeiling = -250;

let iconFrontSize = 5;
let iconMidSize = 2;
let iconBackSize = 1;
let iconSmallestSize = 50;

const icons = [];

class iconBuilder {
    constructor(x, y, direction, vY, r , vR, s) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.vY = vY;
        this.r = r;
        this.vR = vR;
        this.s = s
    }
}

//Bouncing Showcase Title Variables
let bombX;
let bombY;
let bombXSpeed = 2;
let bombYSpeed = 2;

let bomb = document.getElementById("bouncingBomb");
let bombWindowBounds;
let bombWidth;
let bombHeight;

//Hour Calculator Variables
let hoursDots = "";
let timeSinceLaunch = null;

//Showcase Hover Title Variables
let hoverState = false;
let mouseX = 0;
let mouseY = 0;
let hoverName = null;
let hoverDesc = null;

//Window Dimension Variables
let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

function variableInitialization() {
    iconFloor = document.getElementById("showreelContainer").getBoundingClientRect().top - 10;
    bombWidth = bomb.getBoundingClientRect().width;
    bombHeight = bomb.getBoundingClientRect().height;

    bombWindowBounds = document.getElementById("showreelContainer").getBoundingClientRect();
    bombX = 1;
    bombY = bombWindowBounds.top;
}

//calculates hours between today and birthday
function hoursFunction() {
    let launchDate = new Date("2003-09-02 20:00:00");
    let currentDate = new Date();

    let yearToHours = (currentDate.getFullYear()-launchDate.getFullYear())*8760;
    let monthToHours = (currentDate.getMonth()-launchDate.getMonth())*730;
    let dayToHours = (currentDate.getDate()-launchDate.getDate())*24;
    let hours = currentDate.getHours()-launchDate.getHours();

    timeSinceLaunch = yearToHours+monthToHours+dayToHours+hours;
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

//random value generators
function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
}

function getRandomIntRange(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomBool() {
    return Math.random() < 0.5;
}

//creates <img> elements using DOM methods
function createWarningImage(color, order, size, x) { 
    let loaderFront = document.getElementById("frontIconGroup");
    let loaderBack = document.getElementById("backIconGroup");
    let img = document.createElement("IMG");
    
    img.setAttribute("src", "images/warning" + getRandomInt(8) + ".svg");
    img.setAttribute("alt", "warning");
    
    img.setAttribute("id", "icon" + order);
    img.style.position = "absolute";
    img.style.width = iconSmallestSize * size + getRandomIntRange(10, -10) + "px";
    img.style.left = x + "px";
    img.style.top = "0px";
    img.style.transform = "rotate(0deg)";
    img.style.filter = "blur(" + size + "px)";
    img.style.zIndex = size;
    img.style.pointerEvents = "hidden";
    
    if (size == 1) {
        loaderBack.appendChild(img);
        document.body.appendChild(loaderBack);
    }
    else {
        loaderFront.appendChild(img);
        document.body.appendChild(loaderFront);
    }   
}

window.onload = function()
{
    //mechanism that detects hover over showcase work
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
        if (i < numIconsBack){
            //x, y, direction, vY, r, vR, s
            icons[i] = new iconBuilder(getRandomInt(windowWidth), getRandomIntRange(iconFloor, iconCeiling), getRandomBool(), getRandomIntRange(initialFallMax, initialFallMin), getRandomInt(360), getRandomInt(rotationSpeed), iconBackSize);
            
            createWarningImage(getRandomInt(9), i, iconBackSize, icons[i].x);
        }

        else if (i < numIconsMid + numIconsBack){
            icons[i] = new iconBuilder(getRandomInt(windowWidth), getRandomIntRange(iconFloor, iconCeiling), getRandomBool(), getRandomInt(initialFallMax, initialFallMin) * iconMidSize, getRandomInt(360), getRandomInt(rotationSpeed), iconMidSize);
            
            createWarningImage(getRandomInt(9), i, iconMidSize, icons[i].x);
        }

        else {
            icons[i] = new iconBuilder(getRandomInt(windowWidth), getRandomIntRange(iconFloor, iconCeiling), getRandomBool(), getRandomInt(initialFallMax, initialFallMin) * iconFrontSize, getRandomInt(360), getRandomInt(rotationSpeed), iconFrontSize);
        
            createWarningImage(getRandomInt(9), i, iconFrontSize, icons[i].x);
        }
    }

    setInterval(function()
    {
        for(let i = 0; i < numOfIcons; i++) {
            let focusDiv = document.getElementById("icon" + i);

            icons[i].y += icons[i].vY - gravity;

            if(icons[i].direction == true) {
                icons[i].r += icons[i].vR; 
            }

            else {
                icons[i].r -= icons[i].vR; 
            }

            focusDiv.style.top = icons[i].y + 'px';
            focusDiv.style.transform = "rotate(" + icons[i].r + "deg)"

            if(icons[i].y > iconFloor){
                icons[i].vY = getRandomIntRange(initialFallMax, initialFallMin) * icons[i].s;
                icons[i].y = iconCeiling;
                icons[i].x = getRandomInt(windowWidth);
                
                focusDiv.style.left = icons[i].x + 'px';
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