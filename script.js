document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const headerLinks = document.querySelector(".header-links");
  const header = document.getElementById("header");
  const dropBtn = document.querySelector(".dropbtn");
  const dropFlags = document.querySelector(".drop-flags");

  const languages = ["am", "en", "ru"];

  languages.forEach((lang, index) => {
    const image = document.createElement("img");
    image.classList.add("flag-img");

    image.src = `../icons/${lang}.svg`;
    image.dataset.lang = lang;

    if (index === 0) {
      image.classList.add("selected");
      dropBtn.appendChild(image);
      return;
    }
    
    const link = document.createElement("a");
    link.classList.add("selectable");
    link.href = `/${lang}/`;

    link.appendChild(image);
    dropFlags.appendChild(link);
    // link.addEventListener("click", () => selectLanguage(link));
  });

  hamburger.addEventListener("click", () => {
    headerLinks.classList.toggle("open");
    if (headerLinks.classList.contains("open")) {
      document.body.style.overflow = "hidden"
    }
    else {
      document.body.style.overflow = "unset"
    }
  });

  const scrollFunction = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 && getComputedStyle(header).height !== "70px") {
      header.classList.add("small");
    }
    else {
      header.classList.remove("small");
    }
  }

  window.onscroll = () => scrollFunction();

  function selectLanguage(lang) {
    setTimeout(() => {
      const selectedLang = document.querySelector(".selected")
      selectedLang.classList.remove("selected");

      const newSelect = lang.childNodes[0];
      newSelect.classList.add("selected");

      dropBtn.appendChild(newSelect);
      lang.href = `/${selectedLang.getAttribute("data-lang")}`;
      lang.appendChild(selectedLang);
    }, 0)
  }
  let currentLang = document.querySelector(`a[href='${window.location.pathname}']`);
  selectLanguage(currentLang);
})