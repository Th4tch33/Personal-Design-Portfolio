let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

let prev;
let current;


window.onload = function()
{
    document.getElementById("loadingScreen").classList.add("fadeOut");

    document.addEventListener('scroll', () => {
        current = window.pageYOffset;

        if((current - prev) % 2 > 0) {
            document.getElementById('nav').style.top = "-15vw";
        }
        else if ((current - prev) % 2 < 0) {
            document.getElementById('nav').style.top = "0";
        }
        
        prev = current;
    })
}