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

let mobileOffset = 0;
let mobileThumbnailHighlight = 1;

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

        //used to track scroll offset for mobile
        mobileOffset += current - prev;

        //activates hover title if mouse goes over showcase item using scroll
        if (hoverState == true) {
            document.getElementById('hoverInfoH3').innerHTML = hoverName;
            document.getElementById('hoverInfoH3').style.opacity = "100%";

            document.getElementById('hoverInfoP').innerHTML = hoverDesc;
            document.getElementById('hoverInfoP').style.opacity = "100%";

            document.getElementById('hoverInfo').style.maxWidth = "100vw";
        }

        //Prevents mouse related events from effecting element on mobile
        if (screen.width > 768) {
            document.getElementById('hoverInfo').style.left = mouseX + "px"
            document.getElementById('hoverInfo').style.top = mouseY + 20 +"px"
        }

        //changes the thumbnail that will receive a caption based on screen location
        if (mobileThumbnailHighlight + 1 < 12 && document.getElementById(mobileThumbnailHighlight + 1).getBoundingClientRect().top <= screen.height / 2) {
            mobileThumbnailHighlight++;
        }

        if (mobileThumbnailHighlight - 1 > 0 && document.getElementById(mobileThumbnailHighlight - 1).getBoundingClientRect().top >= screen.height / 3) {
            mobileThumbnailHighlight--;
        }

        //mechanism that replaces hover when mobile is active
        if (screen.width <= 768) {
            const mouseoverEvent = new Event('mouseover');

            document.getElementById(mobileThumbnailHighlight).dispatchEvent(mouseoverEvent);
            
            document.getElementById('hoverInfo').style.left = "5vw";
            document.getElementById('hoverInfo').style.top = mobileOffset + document.getElementById(mobileThumbnailHighlight).offsetTop + "px";

            document.getElementById('hoverInfoH3').innerHTML = hoverName;
            document.getElementById('hoverInfoH3').style.opacity = "100%";

            document.getElementById('hoverInfoP').innerHTML = hoverDesc;
            document.getElementById('hoverInfoP').style.opacity = "100%";

            document.getElementById('hoverInfo').style.maxWidth = "100vw";
        }
    } )

    //mechanism that detects hover over showcase work
    document.addEventListener('mousemove', (event) => {  
        mouseX = event.clientX;
        mouseY = event.clientY + window.pageYOffset;

        if (hoverState == true) {
            document.getElementById('hoverInfoH3').innerHTML = hoverName;
            document.getElementById('hoverInfoH3').style.opacity = "100%";

            document.getElementById('hoverInfoP').innerHTML = hoverDesc;
            document.getElementById('hoverInfoP').style.opacity = "100%";

            document.getElementById('hoverInfo').style.maxWidth = "100vw";
        }

        if (screen.width > 768) {
            document.getElementById('hoverInfo').style.left = mouseX + "px"
            document.getElementById('hoverInfo').style.top = mouseY + 20 +"px"
        }
    });
}