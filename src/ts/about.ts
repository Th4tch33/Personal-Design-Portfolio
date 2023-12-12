const gravity = 0.5;
const numOfIconsJump = 7;
const jumpHeight = 15;
const jumpHeightMax = 50 ;

const numOfIcons = 75;
const rotationSpeed = 3;
let iconFloor = 0;

let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

let prev: number;
let current;

const icons: any = [];

class iconBuilder {
    x: number;
    y: number;
    direction: boolean;
    vX: number;
    vY: number;
    r: number;
    vR: number;

    constructor(x: number, direction: boolean, vX: number, vY: number, r: number,vR: number) {
        this.x = x;
        this.y = iconFloor;
        this.direction = direction;
        this.vX = vX;
        this.vY = vY;
        this.r = r;
        this.vR = vR;
    }
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max + 1);
}

function getRandomBool() {
    return Math.random() < 0.5;
}

function createWarningImage(color: number, order: number) {    
    const loader = document.getElementById("aboutIconGroup");

    console.log(document.getElementById("aboutIconGroup"));

    const div = document.createElement('div');
    const img = document.createElement("IMG");
    img.setAttribute("src", "/Images/logo" + color + ".svg");
    img.setAttribute("alt", "warning");
    
    div.setAttribute("id", "div" + order);
    div.appendChild(img);
    div.style.position = "absolute";
    div.style.left = "0px";
    div.style.top = "0px";
    div.style.transform = "rotate(0deg)";
    div.style.pointerEvents = "hidden";
    loader!.appendChild(div);

    document.body.appendChild(loader!);
}

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