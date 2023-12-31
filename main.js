function myFunction() {
  let menu = document.querySelector(".menu");
  let links = document.querySelectorAll(".menu__top");
  if (menu.style.display === "flex") {
    menu.style = "null";
    for (let link of links) {
      link.style = "null";
    }
  } else {
    menu.style.display = "flex";
    menu.style.marginTop = "110px";
    menu.style.backgroundColor = "#d0d0d038";
    for (let link of links) {
      link.style.marginLeft = 0;
    }
  }
};

window.addEventListener('resize', function (event) {
  let menu = document.querySelector(".menu");
  let links = document.querySelectorAll(".menu__top");
  menu.style = "null";
  for (let link of links) {
    link.style = "null";
  }
}, true);

window.addEventListener("scroll", function (event) {
  let upwardButton = document.querySelector(".upward__button");
  let posTop = window.pageYOffset;
  if (posTop < 80) {
    upwardButton.style.display = "none";
  } else {
    upwardButton.style = "null";
  }
});

window.addEventListener("load", function (event) {
  let upwardButton = document.querySelector(".upward__button");
  let posTop = window.pageYOffset;
  if (posTop < 80) {
    upwardButton.style.display = "none";
  } else {
    upwardButton.style = "null";
  }
});