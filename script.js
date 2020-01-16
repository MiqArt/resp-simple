const hamburger = document.querySelector(".hamburger");
const headerLinks = document.querySelector(".header-links");
const links = document.querySelectorAll(".header-links li");

hamburger.addEventListener("click", () => {
  headerLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});