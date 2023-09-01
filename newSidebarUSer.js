let menuElements = document.querySelectorAll(".sidebar #navi #nav-ul li");

menuElements.forEach((elem) => {
  elem.addEventListener("click", () => {
    // Pour enlever le style
    menuElements.forEach((autresElem) => {
      autresElem.classList.remove("style-nav-elem");
    });

    // Pour ajouter le style
    elem.classList.add("style-nav-elem");
  });
});
