function createWarningImage(color, order) {    
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
    loader.appendChild(div);

    document.body.appendChild(loader);
}

//creates <img> elements using DOM methods
function createWarningImage(type, order, size, x) { 
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
        loaderBack.appendChild(img);
        document.body.appendChild(loaderBack);
    }

    else {
        loaderFront.appendChild(img);
        document.body.appendChild(loaderFront);
    }   
}