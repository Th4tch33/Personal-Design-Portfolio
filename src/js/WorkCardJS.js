let exitCursorActive = false;
let mouseX;
let mouseY;

function WorkCardHoverOn(thisID) {
    document.getElementById(thisID.id).querySelector("a").children[1].classList.add("workCardTextHover");
}

function WorkCardHoverOff(thisID) {
    document.getElementById(thisID.id).querySelector("a").children[1].classList.remove("workCardTextHover");
}

function WorkCardClicked(videoLink, videoOrientation) {

    if(videoLink) {
        exitCursorActive = true;
        document.body.style.overflowY = "hidden";

        const mediaPlayer = document.createElement('div');
        mediaPlayer.id = "mediaPlayer";
        document.body.appendChild(mediaPlayer);  

        const exitCursor = document.createElement('div');
        exitCursor.id = "exitCursor";
        exitCursor.innerHTML = "CLOSE VIDEO<h1>X</h1>";
        mediaPlayer.appendChild(exitCursor); 

        mediaPlayer.addEventListener('click', () => {WorkCardClose()});
        mediaPlayer.addEventListener('mousemove', () => {WorkCardExitCusor()});

        const iframe = document.createElement('iframe');
        iframe.frameBorder = "0";

        if(videoOrientation == "H") {
            iframe.className = "mediaPlayerVideoHorz";
        }
        else if (videoOrientation == "V") {
            iframe.className = "mediaPlayerVideoVert";
        }        

        if (videoLink.includes("youtube")) {
            iframe.src = videoLink;
            iframe.title = "YouTube video player";
            
            iframe.allow = "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
            iframe.referrerPolicy = "strict-origin-when-cross-origin";
            iframe.allowFullscreen = true;

            document.getElementById("mediaPlayer").appendChild(iframe); // or append to a specific container
        }
        else if (videoLink.includes("vimeo")) {
            iframe.src = videoLink;
            iframe.allow = "autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media";
            iframe.title = "Volleyball Highlight Reel || Bumpin Sports || 12/21/2024";

            // Append the iframe to the desired parent element
            document.getElementById("mediaPlayer").appendChild(iframe); // You can append it to a specific parent element
        }
        else {
            console.log("failed to generate video using link: " + videoLink);
        }

        iframe.addEventListener('mouseenter', () => {ExitCursorHoverOff()});
        iframe.addEventListener('mouseleave', () => {ExitCursorHoverOn()});

        setTimeout(() => {
            mediaPlayer.style.opacity = "1";             // Fade in to full opacity
        }, 10);
    }
}

function WorkCardClose() {
    document.getElementById("mediaPlayer").style.opacity = "0";

    setTimeout(() => {
        document.body.style.overflowY = "visible";

        document.getElementById("mediaPlayer").remove();

        exitCursorActive = false;
    }, 500);
}

export { WorkCardHoverOn, WorkCardHoverOff, WorkCardClicked, WorkCardClose};

function WorkCardExitCusor() {
    const exitCursor = document.getElementById("exitCursor");
    //mechanism that detects hover over showcase work 
        
    mouseX = event.clientX;
    mouseY = event.clientY;

    console.log(mouseX);
    console.log(mouseY);

    exitCursor.style.left = mouseX - (exitCursor.getBoundingClientRect().width) / 2 + "px";
    exitCursor.style.top = mouseY - (exitCursor.getBoundingClientRect().height) / 2 + "px";
}

function ExitCursorHoverOn() {
    document.getElementById("exitCursor").style.opacity = 1;
    document.getElementById("mediaPlayer").style.cursor = "none";
}

function ExitCursorHoverOff() {
    document.getElementById("exitCursor").style.opacity = 0;
    document.getElementById("mediaPlayer").style.cursor = "auto";
}