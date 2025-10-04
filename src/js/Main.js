import Bowser from 'bowser';

const parser = Bowser.getParser(navigator.userAgent);

//0=home, 1=about, 2=contact
let activePage = 0;

let runHomeBehavior;

//NavBar Variables
let navPrev;
let navCurrent;
let showreelActive = false;


//Icon Home Screen Variables
let numIconsFront = 3; //3
let numIconsMid = 6; //6
let numIconsBack = 20; //20
let numIconsFarBack = 35; //35

let iconFrontSize = 7;
let iconMidSize = 3.5;
let iconBackSize = 2;
let iconFarBackSize = 1;
let iconSmallestSize = 40;

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
    constructor(x, y, direction, vX, vY , r , vR, s, o) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.vX = vX;
        this.vY = vY;
        this.r = r;
        this.vR = vR;
        this.s = s;
        this.o = o;
    }
}

//Showcase Hover Title Variables
let mouseX = 0;
let mouseY = 0;

//Window Dimension Variables
const windowWidth = window.innerWidth;

function l(n) {
    console.log(n)
}

function activePageCheck(n) {
    deleteActiveIcons();

    if(n == "/") {
        activePage = 0;
        rotationSpeed = homeRotationSpeed;

        iconFloor = document.getElementById("heroSectionWrapper").getBoundingClientRect().bottom + scrollY + 300;

        if (parser.getPlatformType() === 'mobile') {
            console.log("Mobile device detected");

            numIconsFront = 2;
            numIconsMid = 4;
            numIconsBack = 8;
            numIconsFarBack = 12;

            iconFrontSize = 7;
            iconMidSize = 3;
            iconBackSize = 1.75;
            iconFarBackSize = 1;
            iconSmallestSize = 40;

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

        clearInterval(runHomeBehavior);

        iconFloor = document.getElementById("footerContainer").getBoundingClientRect().top + scrollY - 10;
    }
    else {
        activePage = 2;
        numOfIcons = 0;
        rotationSpeed = 0;

        document.removeEventListener('mousemove', mouseMoveEngine);

        clearInterval(runHomeBehavior);
    }

    buildIcons();

    prevMouseX = mouseX;

    if(parser.getPlatformType() === "desktop") {
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
    }

    //removes loading screen
    //document.getElementById("loadingScreen").classList.add("fadeOut");

    if (activePage == 0) {
        //mechanism that detects hover over showcase work
        document.addEventListener('mousemove', mouseMoveEngine);

        //runs the behaivors on the home screen
        runHomeBehavior = setInterval(homeBehaviors, 10);
    }
}

export { activePageCheck };

//creates <img> elements using DOM methods
function createWarningImage(type, order, size, x) { 
    const loaderFront = document.getElementById("frontIconGroup");
    const loaderBack = document.getElementById("backIconGroup");
    const img = document.createElement("IMG");

    img.setAttribute("src", "/falling-objects/object" + type + ".svg");
    img.setAttribute("alt", "cool icon");
    
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
    //DOMs in all icons and initializes parameters
    for(let i = 0; i < numOfIcons; i++) {
            
        //DOMs in large icons
        if (i < numIconsFront){
            //x, y, direction, vX, vY, r, vR, s, o
            icons[i] = new iconBuilder(getRandomIntRange(windowWidth + iconXSpawnOverflow, -iconXSpawnOverflow), getRandomIntRange(iconFloor, iconCeiling), getRandomBool(), 0, getRandomIntRange(initialFallMax, initialFallMin) * iconMidSize, getRandomInt(360), getRandomInt(rotationSpeed), iconMidSize, 1);

            //color, order, size, x
            createWarningImage(getRandomInt(11), i, iconFrontSize, icons[i].x);
        }

        //DOMs in medium icons
        else if (i < numIconsMid + numIconsFront){
            icons[i] = new iconBuilder(getRandomIntRange(windowWidth + iconXSpawnOverflow, -iconXSpawnOverflow), getRandomIntRange(iconFloor, iconCeiling), getRandomBool(), 0, getRandomIntRange(initialFallMax, initialFallMin) * iconMidSize, getRandomInt(360), getRandomInt(rotationSpeed), iconMidSize, 1);
            
            createWarningImage(getRandomInt(11), i, iconMidSize, icons[i].x);
        }

        //DOMs in small icons
        else if (i < numIconsBack + numIconsMid + numIconsFront){
            
            icons[i] = new iconBuilder(getRandomIntRange(windowWidth + iconXSpawnOverflow, -iconXSpawnOverflow), getRandomIntRange(iconFloor, iconCeiling), getRandomBool(), 0, getRandomIntRange(initialFallMax, initialFallMin) * iconBackSize, getRandomInt(360), getRandomInt(rotationSpeed), iconBackSize, 1);
            
            createWarningImage(getRandomInt(11), i, iconBackSize, icons[i].x);
        }

        //DOMs in extra small icons
        else {
            icons[i] = new iconBuilder(getRandomIntRange(windowWidth + iconXSpawnOverflow, -iconXSpawnOverflow), getRandomIntRange(iconFloor, iconCeiling), getRandomBool(), 0, getRandomIntRange(initialFallMax, initialFallMin), getRandomInt(360), getRandomInt(rotationSpeed), iconFarBackSize, 1);
            
            createWarningImage(getRandomInt(11), i, iconFarBackSize, icons[i].x);
        }
    }
}

//Deletes all icons
function deleteActiveIcons () {
    for(let i = 0; i < numOfIcons; i++) {
        document.getElementById("icon" + i).remove();
    }
}

export { buildIcons, deleteActiveIcons };

function homeBehaviors() {
    heroMouseInfluence();

    //updates positions of all icons
    if (scrollY <= iconFloor + 250) {
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
            focusDiv.style.opacity = icons[i].o;

            focusDiv.style.transform = "rotate(" + icons[i].r + "deg)";

            if(icons[i].y < iconFloor && iconFloor - icons[i].y <= 100) {
                icons[i].o = (iconFloor - icons[i].y) / 100;
            }

            //resets icons once they hit the ground
            if(icons[i].y > iconFloor){
                icons[i].vY = getRandomIntRange(initialFallMax, initialFallMin) * icons[i].s;
                icons[i].y = iconCeiling;
                icons[i].x = getRandomIntRange(windowWidth + iconXSpawnOverflow, -iconXSpawnOverflow);
                icons[i].o = 1;
            }
        }
    }
}

const mouseMoveEngine = (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY + window.pageYOffset
}

