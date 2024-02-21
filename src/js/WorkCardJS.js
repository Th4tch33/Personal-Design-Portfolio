function WorkCardHoverOn(thisID) {
    document.getElementById(thisID.id).querySelector("a").children[1].classList.add("workCardTextHover");
}

function WorkCardHoverOff(thisID) {
    document.getElementById(thisID.id).querySelector("a").children[1].classList.remove("workCardTextHover");
}

export { WorkCardHoverOn, WorkCardHoverOff};