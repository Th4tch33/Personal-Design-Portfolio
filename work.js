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

    document.getElementById('hoverInfoH3').style.opacity = 0;

    document.getElementById('hoverInfoP').style.opacity = 0;

    document.getElementById('hoverInfo').style.maxWidth = 0;
}

function backToTop() {
    document.body.scrollIntoView({behavior: "smooth",});
}

window.onload = function()
{
    document.getElementById("loadingScreen").classList.add("fadeOut");

    document.addEventListener('scroll', () => {
        current = window.pageYOffset;
        mouseY += current - prev;

        if((current - prev) % 2 > 0) {
            document.getElementById('navContainer').style.top = "-15vw";
        }
        else if ((current - prev) % 2 < 0) {
            document.getElementById('navContainer').style.top = "0";
        }
        
        prev = current;

        //activates hover title if mouse goes over showcase item using scroll
        if (hoverState == true) {
            document.getElementById('hoverInfoH3').innerHTML = hoverName;
            document.getElementById('hoverInfoH3').style.opacity = "100%";

            document.getElementById('hoverInfoP').innerHTML = hoverDesc;
            document.getElementById('hoverInfoP').style.opacity = "100%";

            document.getElementById('hoverInfo').style.maxWidth = "100vw";
        }

        document.getElementById('hoverInfo').style.left = mouseX + "px";
        document.getElementById('hoverInfo').style.top = mouseY + 20 +"px";
    } )

    //mechanism that detects hover over showcase work
    document.addEventListener('mousemove', (event) => {  
        mouseX = event.clientX;
        mouseY = event.clientY + window.pageYOffset

        if (hoverState == true) {
            document.getElementById('hoverInfoH3').innerHTML = hoverName;
            document.getElementById('hoverInfoH3').style.opacity = "100%";

            document.getElementById('hoverInfoP').innerHTML = hoverDesc;
            document.getElementById('hoverInfoP').style.opacity = "100%";

            document.getElementById('hoverInfo').style.maxWidth = "100vw";
        }

        document.getElementById('hoverInfo').style.left = mouseX + "px"
        document.getElementById('hoverInfo').style.top = mouseY + 20 +"px"
    });
}