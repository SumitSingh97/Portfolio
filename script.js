/* ------------------ Small Device Menu Bar ------------------ */

var navlinks = document.getElementById("navlinks");

function showMenu() {
  navlinks.style.right = "0";
}

function hideMenu() {
  navlinks.style.right = "-200px";
}

/* ------------------ Preloader ------------------ */

var loader = document.querySelector(".preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});
