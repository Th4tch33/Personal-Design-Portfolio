import Bowser from 'bowser';

const parser = Bowser.getParser(navigator.userAgent);

//0=home, 1=about, 2=contact
let activePage = 0;

let runHomeBehavior;
let runjsHourUpdater;

//NavBar Variables
let navPrev;
let navCurrent;
let showreelActive = false;

//Hour Calculator Variables
let hoursDots = "";
let timeSinceLaunch;

//Icon Home Screen Variables
let numIconsFront = 2;
let numIconsMid = 4;
let numIconsBack = 10;
let numIconsFarBack = 10;

let iconFrontSize = 6;
let iconMidSize = 3;
let iconBackSize = 1.75;
let iconFarBackSize = 1;
let iconSmallestSize = 50;

const initialFallMin = 0.6;
const initialFallMax = 0.8;
let mouseXIconInfluence = 0;
let prevMouseX;
let influenceAnchor = 0;

let homeNumOfIcons;
const homeRotationSpeed = 0.20;

//Icon About Screen Variables
let prev;
let current;

const gravity = 0.5;
const numOfIconsJump = 7;
const jumpHeight = 15;
const jumpHeightMax = 50 ;

const aboutNumOfIcons = 25;
const aboutRotationSpeed = 3;

//Shared Icon Variables
let rotationSpeed;
let numOfIcons;
let iconXSpawnOverflow = 200;
let iconFloor = 0;
const iconCeiling = -250;

const icons = [];

class iconBuilder {
    constructor(x, y, direction, vX, vY , r , vR, s) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.vX = vX;
        this.vY = vY;
        this.r = r;
        this.vR = vR;
        this.s = s
    }
}

//Showcase Hover Title Variables
let mouseX = 0;
let mouseY = 0;

//Window Dimension Variables
const windowWidth = window.innerWidth;

//Bouncing Showcase Title Variables
let bombX;
let bombY;
let bombXSpeed = 2;
let bombYSpeed = 2;

let bomb;
let bombWindowBounds;
let bombWindowTop;
let bombWindowBottom;
let bombWidth;
let bombHeight;

function l(n) {
    console.log(n)
}

function activePageCheck(n) {
    deleteActiveIcons();

    if(n == "/") {
        activePage = 0;
        rotationSpeed = homeRotationSpeed;

        iconFloor = document.getElementById("showreelContainer").getBoundingClientRect().top + scrollY - 10;
        bomb = document.getElementById("bouncingBomb");

        bombWidth = bomb.getBoundingClientRect().width;
        bombHeight = bomb.getBoundingClientRect().height;

        bombWindowBounds = document.getElementById("showreelContainer").getBoundingClientRect();
        bombX = 1;
        bombY = bombWindowBounds.top + scrollY + 10;
        bombWindowTop = bombWindowBounds.top + scrollY;
        bombWindowBottom = bombWindowBounds.bottom + scrollY;

        if (parser.getPlatformType() === 'mobile') {
            console.log("Mobile device detected");

            numIconsFront = 1;
            numIconsMid = 2;
            numIconsBack = 3;
            numIconsFarBack = 3;

            iconFrontSize = 5;
            iconMidSize = 2.5;
            iconBackSize = 1.5;
            iconFarBackSize = 1;
            iconSmallestSize = 50;

            iconXSpawnOverflow = 25;
        }
        else {
            console.log("Desktop device detected");
        }

        homeNumOfIcons = numIconsFront + numIconsMid + numIconsBack + numIconsFarBack;

        numOfIcons = homeNumOfIcons;
    }
    else if(n == "/about") {
        activePage = 1;
        numOfIcons = 0;
        rotationSpeed = aboutRotationSpeed;
    
        document.removeEventListener('mousemove', mouseMoveEngine);
        document.removeEventListener('scroll', mouseScrollEngine);

        clearInterval(runHomeBehavior);
        clearInterval(runjsHourUpdater);

        iconFloor = document.getElementById("footerContainer").getBoundingClientRect().top + scrollY - 10;
    }
    else {
        activePage = 2;
        numOfIcons = 0;
        rotationSpeed = 0;

        document.removeEventListener('mousemove', mouseMoveEngine);
        document.removeEventListener('scroll', mouseScrollEngine);

        clearInterval(runHomeBehavior);
        clearInterval(runjsHourUpdater);
    }

    buildIcons();

    prevMouseX = mouseX;

    //moves nav bar of screen when scrolling down
    document.addEventListener('scroll', () => {
        
        navCurrent = window.pageYOffset;

        if((navCurrent - navPrev) % 2 > 0) {
            document.getElementById('navContainer').style.top = "-15vw";
        }
        else if ((navCurrent - navPrev) % 2 < 0 && showreelActive == false) {
            document.getElementById('navContainer').style.top = "0";
        }

        navPrev = navCurrent; 
    });

    hoursFunction();

    //removes loading screen
    //document.getElementById("loadingScreen").classList.add("fadeOut");

    if (activePage == 0) {
        console.log("icon engine went off activePage: " + activePage);
        //mechanism that detects hover over showcase work
        document.addEventListener('mousemove', mouseMoveEngine);
        document.addEventListener('scroll', mouseScrollEngine);

        //runs the behaivors on the home screen
        runHomeBehavior = setInterval(homeBehaviors, 10);

        //animates dots at end of JS hours component
        runjsHourUpdater = setInterval(jsHourUpdater, 750);
    }
}

export { activePageCheck };

//calculates hours between today and birthday
function hoursFunction() {
    const launchDate = new Date("2003-09-02 20:00:00");
    const currentDate = new Date();

    const yearToHours = (currentDate.getFullYear()-launchDate.getFullYear())*8760;
    const monthToHours = (currentDate.getMonth()-launchDate.getMonth())*730;
    const dayToHours = (currentDate.getDate()-launchDate.getDate())*24;
    const hours = currentDate.getHours()-launchDate.getHours();

    timeSinceLaunch = yearToHours+monthToHours+dayToHours+hours;
}

//External Showreel Behaviors
function showReelHoverOn () {
    if (showreelActive == false) {
        document.getElementById('playButton').style.opacity = "100%";
    }
}

function showReelHoverOff () {
    document.getElementById('playButton').style.opacity = "0%";
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

export { showReelHoverOn, showReelHoverOff, showreelStart, showreelEnd};

//creates <img> elements using DOM methods
function createWarningImage(type, order, size, x) { 
    const loaderFront = document.getElementById("frontIconGroup");
    const loaderBack = document.getElementById("backIconGroup");
    const img = document.createElement("IMG");
    
    img.setAttribute("src", "/Icons/logo" + type + ".svg");
    img.setAttribute("alt", "warning");
    
    img.setAttribute("id", "icon" + order);
    img.style.position = "absolute";
    img.style.width = iconSmallestSize * size + "px";
    img.style.left = x + "px";
    img.style.top = "0px";
    img.style.transform = "rotate(0deg)";
    //img.style.filter = "blur(" + size + "px)";
    img.style.zIndex = "" + Math.round(size);
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
function heroMouseInfluence() {
    const currentMouseX = mouseX;

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

function buildIcons () {
    console.log("buildIcons() is running");

    console.log("numOfIcons: " + numOfIcons);
    
    //DOMs in all icons and initializes parameters
    for(let i = 0; i < numOfIcons; i++) {
            
        //DOMs in large icons
        if (i < numIconsFront){
            //x, y, direction, vX, vY, r, vR, s
            icons[i] = new iconBuilder(getRandomIntRange(windowWidth + iconXSpawnOverflow, -iconXSpawnOverflow), getRandomIntRange(iconFloor, iconCeiling), getRandomBool(), 0, getRandomIntRange(initialFallMax, initialFallMin) * iconMidSize, getRandomInt(360), getRandomInt(rotationSpeed), iconMidSize);

            //color, order, size, x
            createWarningImage(getRandomInt(2), i, iconFrontSize, icons[i].x);
        }

        //DOMs in medium icons
        else if (i < numIconsMid + numIconsFront){
            icons[i] = new iconBuilder(getRandomIntRange(windowWidth + iconXSpawnOverflow, -iconXSpawnOverflow), getRandomIntRange(iconFloor, iconCeiling), getRandomBool(), 0, getRandomIntRange(initialFallMax, initialFallMin) * iconMidSize, getRandomInt(360), getRandomInt(rotationSpeed), iconMidSize);
            
            createWarningImage(getRandomInt(2), i, iconMidSize, icons[i].x);
        }

        //DOMs in small icons
        else if (i < numIconsBack + numIconsMid + numIconsFront){
            
            icons[i] = new iconBuilder(getRandomIntRange(windowWidth + iconXSpawnOverflow, -iconXSpawnOverflow), getRandomIntRange(iconFloor, iconCeiling), getRandomBool(), 0, getRandomIntRange(initialFallMax, initialFallMin) * iconBackSize, getRandomInt(360), getRandomInt(rotationSpeed), iconBackSize);
            
            createWarningImage(getRandomInt(2), i, iconBackSize, icons[i].x);
        }

        //DOMs in extra small icons
        else {
            icons[i] = new iconBuilder(getRandomIntRange(windowWidth + iconXSpawnOverflow, -iconXSpawnOverflow), getRandomIntRange(iconFloor, iconCeiling), getRandomBool(), 0, getRandomIntRange(initialFallMax, initialFallMin), getRandomInt(360), getRandomInt(rotationSpeed), iconFarBackSize);
            
            createWarningImage(getRandomInt(2), i, iconFarBackSize, icons[i].x);
        }
    }
}

//Deletes all icons
function deleteActiveIcons () {
    console.log("deleteActiveIcons() is running");

    console.log("numOfIcons: " + numOfIcons);
    for(let i = 0; i < numOfIcons; i++) {
        document.getElementById("icon" + i).remove();
    }
}

export { buildIcons, deleteActiveIcons };

function jsHourUpdater() {

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
}

function homeBehaviors() {
    heroMouseInfluence();

    //updates positions of all icons
    if (scrollY <= iconFloor) {
        for(let i = 0; i < numOfIcons; i++) {
            const focusDiv = document.getElementById("icon" + i);

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
                icons[i].x = getRandomIntRange(windowWidth + iconXSpawnOverflow, -iconXSpawnOverflow);
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
    }

    if(bombY + bombHeight >= bombWindowBottom) {
        bombYSpeed *= -1;
    }
}

const mouseMoveEngine = (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY + window.pageYOffset

    document.getElementById('playButton').style.left = mouseX - (document.getElementById('playButton').getBoundingClientRect().height) / 2 + "px";
    document.getElementById('playButton').style.top = mouseY - (document.getElementById('playButton').getBoundingClientRect().height) / 2 + "px";
}

const mouseScrollEngine = () => {
    document.getElementById('playButton').style.left = mouseX - (document.getElementById('playButton').getBoundingClientRect().height) / 2 + "px";
    document.getElementById('playButton').style.top = mouseY - (document.getElementById('playButton').getBoundingClientRect().height) / 2 + "px";
}

window.onload = function()
{

}