let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

//Showcase Hover Title Variables
let hoverState = false;
let mouseX = 0;
let mouseY = 0;
let hoverName = null;
let hoverDesc = null;

let prev;
let current;

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
    document.getElementById("loadingScreen").classList.add("fadeOut");

    document.addEventListener('scroll', () => {
        current = window.pageYOffset;
        mouseY += current - prev;

        if((current - prev) % 2 > 0) {
            document.getElementById('nav').style.top = "-15vw";
        }
        else if ((current - prev) % 2 < 0) {
            document.getElementById('nav').style.top = "0";
        }
        
        prev = current;

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
    } )

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
}