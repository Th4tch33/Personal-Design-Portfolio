let array = [];
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const centerScreenX = windowWidth / 2;
const centerScreenY = windowHeight / 2;

let iconWidth = 30;
let iconHeight;
let gridLength;
let gridHeight;

function gridCreation() {
  log("A")
  
  const testElement = document.createElement('div');
  testElement.setAttribute('id', 'testElement');

  const img = document.createElement("img");
  img.setAttribute("src", "/Icons/cursor_outline.svg");
  img.setAttribute("alt", "cursor outline");
  img.setAttribute('id', 'cursorReference');
  img.style.width = iconWidth + "px";

  testElement.appendChild(img);
  document.body.appendChild(testElement);

  // Wait for the image to load before measuring its height
  img.onload = function() {
    log("B")

    const svgElement = document.getElementById('cursorReference');
    const svgHeight = svgElement.getBoundingClientRect().height;

    iconHeight = svgHeight;

    gridLength = Math.ceil(windowWidth / iconWidth);
    gridHeight = Math.ceil(windowHeight / iconHeight);

    testElement.remove();

    log("C")

    document.getElementById('cursorGrid').style.gridTemplateColumns = "repeat(" + gridLength + ", 1fr)";

    for (let y = 0; y < gridHeight; y++) {
      for (let x = 0; x < gridLength; x++) {
        createCursor(y * gridLength + x);
      }
    }

    let circleCheckResolution = 1;
    let circleCheckResolutionR = circleCheckResolution * Math.PI / 180;
    
    let radius = 200;

    for (let i = 0; i < 360 / circleCheckResolution; i++) {
      let checkPointX = centerScreenX + radius * Math.cos(circleCheckResolutionR * i);
      let checkPointY = centerScreenY + radius * Math.sin(circleCheckResolutionR * i);

      for (let y = 0; y < gridHeight; y++) {        
        for (let x = 0; x < gridLength; x++) {
          
          if(checkPointY >= y * iconHeight && checkPointY <= y * (iconHeight + 1)) {
            if(checkPointX >= x * iconWidth && checkPointX <= x * (iconWidth + 1)) {
              log("Coord #" + i + ": " + checkPointX + ", " + checkPointY);
              
              let elementId = 'cursorOutline' + (y * gridLength + x);
              log(elementId)
              let img = document.getElementById(elementId)
              img.setAttribute("src", "/Icons/cursor_solid.svg");
            }    
          }
        }
      }
    }

  };
}

export { gridCreation };

window.onload = function()
  {
    log("D")
  }

function createCursor(num) { 
  log("E")
  
  const loader = document.getElementById("cursorGrid");
  const img = document.createElement("IMG");
  
  img.setAttribute("src", "/Icons/cursor_outline.svg");
  img.setAttribute("alt", "cursor outline");
  img.setAttribute("id", "cursorOutline" + num);
  img.style.width = iconWidth + "px";

  loader.appendChild(img);
  document.body.appendChild(loader);
}

function log(message) {
  console.log(message);
}