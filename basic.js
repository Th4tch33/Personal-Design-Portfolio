let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

let prev;
let current;

function backToTop() {
    document.body.scrollIntoView({behavior: "smooth",});
}

window.onload = function()
{
    document.getElementById("loadingScreen").classList.add("fadeOut");

    document.addEventListener('scroll', () => {
        current = window.pageYOffset;

        if((current - prev) % 2 > 0) {
            document.getElementById('navContainer').style.top = "-15vw";
        }
        else if ((current - prev) % 2 < 0) {
            document.getElementById('navContainer').style.top = "0";
        }
        
        prev = current;
    })
}