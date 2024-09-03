// MENU
let boolMenu = false;
let mobile = document.getElementsByClassName("mobile-menu");

function toggleMenu() {
  let ham = document.getElementById("hamburger-1");
  ham.classList.toggle("is-active");

  if (boolMenu == false) {
    mobile[0].classList.add("visibility");
    boolMenu = true;
  }
  else if (boolMenu == true) {
    mobile[0].classList.remove("visibility");
    boolMenu = false;
  }
}