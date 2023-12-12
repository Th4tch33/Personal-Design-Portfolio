let prev: number;
let current;

function backToTop() {
    document.body.scrollIntoView({behavior: "smooth",});

    console.log("Back To Top")
}

export { backToTop };

window.onload = function()
{
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
    })
}