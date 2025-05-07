function ShowcaseIMGHoverOn(thisID) {
    document.getElementById(thisID.id).querySelector("a").children[0].classList.add("showcaseCardIMGHover");
}

function ShowcaseIMGHoverOff(thisID) {
    document.getElementById(thisID.id).querySelector("a").children[0].classList.remove("showcaseCardIMGHover");
}

export { ShowcaseIMGHoverOn, ShowcaseIMGHoverOff};