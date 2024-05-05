let array = [];
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

let gridLength = 20;
let gridHeight = 20;

let iconWidth = windowWidth / gridLength;
let iconHeight = windowHeight / gridHeight;

function gridCreation() {
  document.getElementById('cursorGrid').style.gridTemplateColumns = "repeat(" + gridLength + ", 1fr)";

  for (let y = 0; y < gridHeight; y++) {
    for (let x = 0; x < gridLength; x++) {
      createCursor(y * gridLength + x);
    }
  }
}

export { gridCreation };

function createCursor(num) { 
  const loader = document.getElementById("cursorGrid");
  const img = document.createElement("IMG");
  
  img.setAttribute("src", "/Icons/cursor_outline.svg");
  img.setAttribute("alt", "cursor outline");
  img.classList.add("cursorOutline" + num);
  img.style.width = iconWidth + "px";
  img.style.height = iconHeight + "px";

  loader.appendChild(img);
  document.body.appendChild(loader);
}