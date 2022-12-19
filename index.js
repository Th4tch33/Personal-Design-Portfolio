let rotationSpeed = 2;

let numIconsFront = 2;
let numIconsMid = 5;
let numIconsBack = 15;
let numIconsFarBack = 45;
let numOfIcons = numIconsFront + numIconsMid + numIconsBack + numIconsFarBack;

let initialFallMax = 5;
let initialFallMin = 2;

let iconFloor = 0;
let iconCeiling = -250;

let iconFrontSize = 6;
let iconMidSize = 3;
let iconBackSize = 1.75;
let iconFarBackSize = 1;
let iconSmallestSize = 50;

let mouseXIconInfluence = 0;
let prevMouseX;
let influenceAnchor = 0;
let influenceMax = 0;
let influenceRedux = 0;

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
let bombWindowTop;
let bombWindowBottom;
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

//Nav Bar Variables
let navPrev;
let navCurrent;
let showreelActive = false;

function log(message) {
    console.log(message);
}

function variableInitialization() {
    iconFloor = document.getElementById("showreelContainer").getBoundingClientRect().top + scrollY - 10;

    prevMouseX = mouseX;

    bombWidth = bomb.getBoundingClientRect().width;
    bombHeight = bomb.getBoundingClientRect().height;

    bombWindowBounds = document.getElementById("showreelContainer").getBoundingClientRect();
    bombX = 1;
    bombY = bombWindowBounds.top + scrollY + 10;
    bombWindowTop = bombWindowBounds.top + scrollY;
    bombWindowBottom = bombWindowBounds.bottom + scrollY;
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

function showReelHoverOn () {
    if (showreelActive == false) {
        document.getElementById('cursorIcon2').style.opacity = "100%";
    }   
}

function showReelHoverOff () {
    document.getElementById('cursorIcon2').style.opacity = "0%";
}

function backToTop() {
    document.body.scrollIntoView({behavior: "smooth",});
}

function showreelStart() {
    showreelActive = true;

    document.getElementById("showreelThumbnail").classList.add("fadeOut");

    document.getElementById('navContainer').style.top = "-15vw";
    document.getElementById('showreelVideo').scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
    document.body.style.overflowY = "hidden";
}

function showreelEnd() {
    showreelActive = false;

    document.getElementById("showreelThumbnail").classList.remove("fadeOut");
    document.body.style.overflowY = "scroll";
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
    img.style.width = iconSmallestSize * size + "px";
    img.style.left = x + "px";
    img.style.top = "0px";
    img.style.transform = "rotate(0deg)";
    img.style.filter = "blur(" + size + "px)";
    img.style.zIndex = Math.round(size);
    img.style.pointerEvents = "hidden";
    
    if (size <= iconBackSize) {
        loaderBack.appendChild(img);
        document.body.appendChild(loaderBack);
    }

    else {
        loaderFront.appendChild(img);
        document.body.appendChild(loaderFront);
    }   
}

//calculates distance to move icons based on horizontal mouse movement
function heroMouseInfluence(i) {
    let currentMouseX = mouseX;

    /*console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log(currentMouseX);
    console.log(prevMouseX);
    console.log(currentMouseX - prevMouseX);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');*/

    mouseXIconInfluence = (currentMouseX - prevMouseX) / 10;

    influenceAnchor += mouseXIconInfluence;

    if (influenceAnchor > 0) {
        influenceAnchor *= 0.98;
    }
    
    else if (influenceAnchor < 0) {
        influenceAnchor *= 0.98;
    }

    prevMouseX = currentMouseX;
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

        document.getElementById('cursorIcon2').style.left = mouseX + "px"
        document.getElementById('cursorIcon2').style.top = mouseY  + "px"
    });

    document.addEventListener('scroll', (event) => {
        //moves nav bar of screen when scrolling down
        navCurrent = window.pageYOffset;
        mouseY += navCurrent - navPrev;

        if((navCurrent - navPrev) % 2 > 0) {
            document.getElementById('navContainer').style.top = "-15vw";
        }
        else if ((navCurrent - navPrev) % 2 < 0 && showreelActive == false) {
            document.getElementById('navContainer').style.top = "0";
        }

        navPrev = navCurrent;

        //activates hover title if mouse goes over showcase item using scroll
        if (hoverState == true) {
            document.getElementById('cursorIconH3').innerHTML = hoverName;
            document.getElementById('cursorIconH3').style.opacity = "100%";

            document.getElementById('cursorIconP').innerHTML = hoverDesc;
            document.getElementById('cursorIconP').style.opacity = "100%";

            document.getElementById('cursorIcon').style.maxWidth = "100vw";
        }

        document.getElementById('cursorIcon').style.left = mouseX + "px";
        document.getElementById('cursorIcon').style.top = mouseY + 20 +"px";

        document.getElementById('cursorIcon2').style.left = mouseX + "px"
        document.getElementById('cursorIcon2').style.top = mouseY  + "px"
    } )

    hoursFunction();
    variableInitialization();

    //removes loading screen
    document.getElementById("loadingScreen").classList.add("fadeOut");

    //DOMs in all icons and initializes parameters
    for(let i = 0; i < numOfIcons; i++) {
        
        //DOMs in large icons
        if (i < numIconsFront){
            //x, y, direction, vY, r, vR, s
            icons[i] = new iconBuilder(getRandomIntRange(windowWidth + 200, -200), getRandomIntRange(iconFloor, iconCeiling), getRandomBool(), getRandomInt(initialFallMax, initialFallMin) * iconFrontSize, getRandomInt(360), getRandomInt(rotationSpeed), iconFrontSize);
        
            //color, order, size, x
            createWarningImage(getRandomInt(9), i, iconFrontSize, icons[i].x);
        }

        //DOMs in medium icons
        else if (i < numIconsMid + numIconsFront){
            icons[i] = new iconBuilder(getRandomIntRange(windowWidth + 200, -200), getRandomIntRange(iconFloor, iconCeiling), getRandomBool(), getRandomInt(initialFallMax, initialFallMin) * iconMidSize, getRandomInt(360), getRandomInt(rotationSpeed), iconMidSize);
            
            createWarningImage(getRandomInt(9), i, iconMidSize, icons[i].x);
        }

        //DOMs in small icons
        else if (i < numIconsBack + numIconsMid + numIconsFront){
            
            icons[i] = new iconBuilder(getRandomIntRange(windowWidth + 200, -200), getRandomIntRange(iconFloor, iconCeiling), getRandomBool(), getRandomIntRange(initialFallMax, initialFallMin) * iconBackSize, getRandomInt(360), getRandomInt(rotationSpeed), iconBackSize);
            
            createWarningImage(getRandomInt(9), i, iconBackSize, icons[i].x);
        }

        //DOMs in extra small icons
        else {
            icons[i] = new iconBuilder(getRandomIntRange(windowWidth + 200, -200), getRandomIntRange(iconFloor, iconCeiling), getRandomBool(), getRandomIntRange(initialFallMax, initialFallMin), getRandomInt(360), getRandomInt(rotationSpeed), iconFarBackSize);
            
            createWarningImage(getRandomInt(9), i, iconFarBackSize, icons[i].x);
        }
    }

    setInterval(function()
    {
        heroMouseInfluence();

        //updates positions of all icons
        if (scrollY <= iconFloor) {
            for(let i = 0; i < numOfIcons; i++) {
                let focusDiv = document.getElementById("icon" + i);
    
                //updates falling speed
                icons[i].y += icons[i].vY;
    
                //controls rotation
                if(icons[i].direction == true) {
                    icons[i].r += icons[i].vR; 
                }
    
                else {
                    icons[i].r -= icons[i].vR; 
                }
    
                //applies changes to html element
                focusDiv.style.left = icons[i].x + influenceAnchor * icons[i].s +'px';
                focusDiv.style.top = icons[i].y + 'px';
                focusDiv.style.transform = "rotate(" + icons[i].r + "deg)";
    
                //resets icons once they hit the ground
                if(icons[i].y > iconFloor){
                    icons[i].vY = getRandomIntRange(initialFallMax, initialFallMin) * icons[i].s;
                    icons[i].y = iconCeiling;
                    icons[i].x = getRandomIntRange(windowWidth + 200, -200);
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

        if(bombY <= bombWindowTop) {
            bombYSpeed *= -1;

            console.log("top");
        }

        if(bombY + bombHeight >= bombWindowBottom) {
            bombYSpeed *= -1;
            console.log("bottom");
        }
    }, 10);

    //animates dots at end of JS hours component
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