firebase.initializeApp({
  apiKey: "AIzaSyAdYSscG955-wSnJz3eD4EAKYSw7dnnDb8",
  authDomain: "validationjs-220cb.firebaseapp.com",
  projectId: "validationjs-220cb",
  storageBucket: "validationjs-220cb.appspot.com",
  messagingSenderId: "968244401042",
  appId: "1:968244401042:web:f6684d97e4168a23b0a74b",
});
let db = firebase.firestore();

let usersView = document.getElementById("informationGenerale");
let profilInfo = document.getElementById("admin");
let imgHeader = document.getElementById("profil-img");
var adminHeaderName = document.querySelector(".user-name");
var adminHeaderStatut = document.querySelector(".user-type");
profilInfo.innerHTML = "";
db.collection("admin").onSnapshot((querySnapshot) => {
  usersView.innerHTML = "";
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().name}`);
    usersView.innerHTML += `<h4 class="p-2 fw-bold">Informations générales</h4>
    <div class="col d-flex justify-content-between border-bottom pb-3">
    <div class="col-md-8">Prénom</div>
    <div class="col-md-4 text-center" id="paraPrenom">${doc.data().prenom}</div>
    </div>
    <div class="col d-flex justify-content-between border-bottom pb-3">
    <div class="col-md-8">Nom</div>
    <div class="col-md-4 text-center" id="paraNom">${doc.data().name}</div>
    </div>
    <div class="col d-flex justify-content-between border-bottom pb-3">
    <div class="col-md-8">Statut</div>
    <div class="col-md-4 text-center" id="paraAdmin">${doc.data().admin}</div>
    </div>
    <div class="col d-flex justify-content-between border-bottom pb-3">
    <div class="col-md-7">Email</div>
    <div class="col-md-5 text-center" id="paraEmail">${doc.data().email}</div>
    </div>`;

    profilInfo.innerHTML = `<p class="titleProfil">Profil</p>
    <div class="pb-5 profil row">
    <div class="profilAdmin col-lg-12 col-sm-12">
        <img src="${
          doc.data().profilURL
        }" class="rounded-circle img-fluid" alt="img" id="photo">
    </div>
    <div class="name col-lg-12 col-sm-12 pt-4">
        <h3 class="fs-3 fw-bold" id="profilName">${doc.data().prenom} ${
      doc.data().name
    }</h3>
        <p class="fs-4 fw-bold" id="profilStatut">${doc.data().admin}</p>
    </div>
    </div>
    <div>
        <a href="editProfilAdmin.html">
            <button class="btn" id="editerProfil">Editer le profil</button>
        </a>
    </div>`;
    imgHeader.src = doc.data().profilURL;
    adminHeaderName.innerHTML = doc.data().prenom + " " + doc.data().name;
    adminHeaderStatut.innerHTML = doc.data().admin;
  });
});

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

// =============================================

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
