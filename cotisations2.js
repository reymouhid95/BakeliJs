let menuElements = document.querySelectorAll(".sidebar #navi #nav-ul li");

// =======STYLE DES ELEMENTS DU MENU===============
menuElements.forEach((elem) => {
  elem.addEventListener("click", () => {
    let largeurEcran = window.innerWidth;
    if (largeurEcran > 768) {
      // Pour enlever le style
      menuElements.forEach((autresElem) => {
        autresElem.classList.remove("style-nav-elem");
      });

      // Pour ajouter le style
      elem.classList.add("style-nav-elem");
      console.log(largeurEcran);
    } else {
      // window.addEventListener('resize', () =>{
      elem.classList.remove("style-nav-elem");
      // })
    }
  });
});

let start = document.getElementById("start");
let param_icon = document.getElementById("link-animation-start");
let declencheur = document.getElementById("link-animation-start-param");
let stoppeur = document.getElementById("link-animation-stop-param");
let linkAnim = document.querySelectorAll("#start .link-animation");

// Animation des boutons déclencheur et stoppeur des icones du dropup
declencheur.style.transition = setTimeout(() => {
  "3s ease-in-out";
}, 100);

// Appliquer un display par défaut aux icones du dropup et au bouton qui stop
stoppeur.style.display = "none";
linkAnim.forEach((elem) => {
  elem.style.display = "none";
});

// Fonction pour faire apparaitre les boutons dropup
declencheur.onclick = function () {
  linkAnim.forEach((elem) => {
    elem.style.display = "inline";
    setTimeout(() => {
      start.classList.add("active");
      start.classList.remove("desactive");
    }, 5);
  });
  stoppeur.style.display = "inline";
  declencheur.style.display = "none";
};

// Fonction pour faire disparaitre les boutons dropup
stoppeur.onclick = function () {
  start.classList.add("desactive");
  start.classList.remove("active");
  linkAnim.forEach((elem) => {
    setTimeout(() => {
      elem.style.display = "none";
    }, 5);
  });
  stoppeur.style.display = "none";
  declencheur.style.display = "inline";
};
