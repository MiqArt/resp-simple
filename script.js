const hamburger = document.querySelector(".hamburger");
const headerLinks = document.querySelector(".header-links");
const links = document.querySelectorAll(".header-links li");
const header = document.getElementById("header");

hamburger.addEventListener("click", () => {
  headerLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add("small");
  }
  else {
    header.classList.remove("small");
  }
}