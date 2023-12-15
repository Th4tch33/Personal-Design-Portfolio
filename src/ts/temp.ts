//0=home, 1=about, 2=contact
let activePage: number;

//Icon Home Screen Variables
const numIconsFront = 2;
const numIconsMid = 4;
const numIconsBack = 10;
const numIconsFarBack = 10;
const iconFrontSize = 6;
const iconMidSize = 3;
const iconBackSize = 1.75;
const iconFarBackSize = 1;
const iconSmallestSize = 50;
const initialFallMin = 1;
const initialFallMax = 1.25;
let mouseXIconInfluence = 0;
let prevMouseX: number;
let influenceAnchor = 0;

const homeNumOfIcons = numIconsFront + numIconsMid + numIconsBack + numIconsFarBack;
const homeRotationSpeed = 2;

/*//Icon About Screen Variables
let prev: number;
let current;

const gravity = 0.5;
const numOfIconsJump = 7;
const jumpHeight = 15;
const jumpHeightMax = 50 ;

const aboutNumOfIcons = 25;
const aboutRotationSpeed = 3;*/

//Shared Icon Variables
let rotationSpeed: number;
let numOfIcons: number;
const iconXSpawnOverflow = 200;
let iconFloor = 0;
const iconCeiling = -250;

const icons: any = [];

class iconBuilder {
    x: number;
    y: number;
    direction: boolean;
    vX: number;
    vY: number;
    r: number;
    vR: number;
    s: number;

    constructor(x: number, y: number, direction: boolean, vY: number, vX: number, r: number , vR: number, s: number) {
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

//Bouncing Showcase Title Variables
let bombX: number;
let bombY: number;
let bombXSpeed = 2;
let bombYSpeed = 2;

let bomb: HTMLElement | null;
let bombWindowBounds: DOMRect;
let bombWindowTop: number;
let bombWindowBottom: number;
let bombWidth: number;
let bombHeight: number;

//Hour Calculator Variables
let hoursDots = "";
let timeSinceLaunch: number;

//Showcase Hover Title Variables
let mouseX = 0;
let mouseY = 0;

//Window Dimension Variables
const windowWidth = window.innerWidth;

//NavBar Variables
let navPrev: number;
let navCurrent: number;
let showreelActive = false;

function log(message: string) {
    console.log(message);
}

function activePageCheck(n: number) {
    activePage = n;
}

export { activePageCheck };

function variableInitialization() {
    
    iconFloor = document.getElementById("showreelContainer")!.getBoundingClientRect().top + scrollY - 10;

    prevMouseX = mouseX;

    bomb = document.getElementById("bouncingBomb");

    bombWidth = bomb!.getBoundingClientRect().width;
    bombHeight = bomb!.getBoundingClientRect().height;

    bombWindowBounds = document.getElementById("showreelContainer")!.getBoundingClientRect();
    bombX = 1;
    bombY = bombWindowBounds.top + scrollY + 10;
    bombWindowTop = bombWindowBounds.top + scrollY;
    bombWindowBottom = bombWindowBounds.bottom + scrollY;
}


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


function showReelHoverOn () {
    if (showreelActive == false) {
        document.getElementById('playButton')!.style.opacity = "100%";
    }
}

export { showReelHoverOn };

function showReelHoverOff () {
    document.getElementById('playButton')!.style.opacity = "0%";
}

export { showReelHoverOff };

function showreelStart() {
    log("initialization");

    showreelActive = true;

    document.getElementById("showreelThumbnail")!.classList.add("fadeOut");

    document.getElementById('navContainer')!.style.top = "-15vw";
    document.getElementById('showreelVideo')!.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
    document.body.style.overflowY = "hidden";
}

export { showreelStart };

function showreelEnd() {
    showreelActive = false;

    document.getElementById("showreelThumbnail")!.classList.remove("fadeOut");
    document.body.style.overflowY = "scroll";
}

export { showreelEnd };

//random value generators
function getRandomInt(max:number) {
    return Math.floor(Math.random() * max + 1);
}

function getRandomIntRange(max:number, min:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomBool() {
    return Math.random() < 0.5;
}

//creates <img> elements using DOM methods
function createWarningImage(type: number, order:number, size:number, x:number) { 
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
        loaderBack!.appendChild(img);
        document.body.appendChild(loaderBack!);
    }

    else {
        loaderFront!.appendChild(img);
        document.body.appendChild(loaderFront!);
    }   
}

//calculates distance to move icons based on horizontal mouse movement
function heroMouseInfluence() {
    const currentMouseX = mouseX;

    /*
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log(currentMouseX);
    console.log(prevMouseX);
    console.log(currentMouseX - prevMouseX);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    */

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
    log("initialization");

    document.addEventListener('scroll', () => {
        //moves nav bar of screen when scrolling down
        navCurrent = window.pageYOffset;

        if((navCurrent - navPrev) % 2 > 0) {
            document.getElementById('navContainer')!.style.top = "-15vw";
        }
        else if ((navCurrent - navPrev) % 2 < 0 && showreelActive == false) {
            document.getElementById('navContainer')!.style.top = "0";
        }

        navPrev = navCurrent; 
    } );
    
    //mechanism that detects hover over showcase work
    document.addEventListener('mousemove', (event) => {  

        mouseX = event.clientX;
        mouseY = event.clientY + window.pageYOffset

        document.getElementById('playButton')!.style.left = mouseX - (document.getElementById('playButton')!.getBoundingClientRect().height) / 2 + "px";
        document.getElementById('playButton')!.style.top = mouseY - (document.getElementById('playButton')!.getBoundingClientRect().height) / 2 + "px";
        
    });

    
    document.addEventListener('scroll', () => {      
 
        document.getElementById('playButton')!.style.left = mouseX - (document.getElementById('playButton')!.getBoundingClientRect().height) / 2 + "px";
        document.getElementById('playButton')!.style.top = mouseY - (document.getElementById('playButton')!.getBoundingClientRect().height) / 2 + "px";
        
    } )
    
    hoursFunction();
    variableInitialization();

    //removes loading screen
    document.getElementById("loadingScreen")!.classList.add("fadeOut");

    if (activePage == 0) {

        numOfIcons = homeNumOfIcons;
        rotationSpeed = homeRotationSpeed;


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

        setInterval(function()
        {
    
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
                    focusDiv!.style.left = icons[i].x + influenceAnchor * icons[i].s +'px';
                    focusDiv!.style.top = icons[i].y + 'px';
                    focusDiv!.style.transform = "rotate(" + icons[i].r + "deg)";
        
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
            
            bomb!.style.left = bombX + "px";
            bomb!.style.top = bombY + "px";

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

            document.getElementById("hours")!.innerHTML = timeSinceLaunch + " hours ago" + hoursDots;
        }, 750);
    }
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*
window.onload = function()
{
    iconFloor = document.getElementById("footerContainer")!.getBoundingClientRect().top + scrollY - 10;

    document.getElementById("loadingScreen")!.classList.add("fadeOut");

    document.addEventListener('scroll', () => {
        current = window.pageYOffset;

        if((current - prev) % 2 > 0) {
            document.getElementById('navContainer')!.style.top = "-15vw";
        }
        else if ((current - prev) % 2 < 0) {
            document.getElementById('navContainer')!.style.top = "0";
        }
        
        prev = current;
    } )

    for(let i = 0; i < numOfIcons; i++) {
        createWarningImage(getRandomInt(9), i);
        icons[i] = new iconBuilder(getRandomInt(windowWidth),getRandomBool(), getRandomInt(5), getRandomInt(jumpHeight), getRandomInt(360), getRandomInt(rotationSpeed));
    }
    

    setInterval(function()
    {
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;
        iconFloor = document.getElementById("footerContainer")!.getBoundingClientRect().top + scrollY - 10;

        for(let i = 0; i < numOfIcons; i++) {
            const focusDiv = document.getElementById("div" + i);

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
            
            focusDiv!.style.left = icons[i].x + 'px';
            focusDiv!.style.top = icons[i].y + 'px';
            focusDiv!.style.transform = "rotate(" + icons[i].r + "deg)"

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
    }, 10);
}
*/