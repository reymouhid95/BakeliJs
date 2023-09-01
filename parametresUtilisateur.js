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
let profilInfo = document.querySelector("#admin");
let imgHeader = document.getElementById("profil-img");
var userHeaderName = document.querySelector(".user-name");
var userHeaderStatut = document.querySelector(".user-type");

profilInfo.innerHTML = "";
db.collection("user").onSnapshot((querySnapshot) => {
  usersView.innerHTML = "";
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().name}`);
    usersView.innerHTML = `<h4 class="p-2 fw-bold">Informations générales</h4>
        <div class="col d-flex justify-content-between border-bottom pb-3">
        <div class="col-md-8 col-sm-4">Prénom</div>
        <div class="col-md-4 col-sm-8 text-center" id="paraPrenom">${
          doc.data().prenom
        }</div>
      </div>
      <div class="col d-flex justify-content-between border-bottom pb-3">
        <div class="col-md-8">Nom</div>
        <div class="col-md-4 text-center" id="paraNom">${doc.data().name}</div>
      </div>
      <div class="col d-flex justify-content-between border-bottom pb-3">
        <div class="col-md-8">Statut</div>
        <div class="col-md-4 text-center" id="paraAdmin">${
          doc.data().statut
        }</div>
      </div>
      <div class="col d-flex justify-content-between border-bottom pb-3">
        <div class="col-md-7">Email</div>
        <div class="col-md-5 text-center" id="paraEmail">${
          doc.data().email
        }</div>
      </div>`;

    profilInfo.innerHTML = `<p class="titleProfil">Profil</p>
        <div class="pb-2 profil row">
          <div class="profilAdmin col-lg-12 col-sm-12">
              <img src="${
                doc.data().profilURL
              }" class="rounded-circle img-fluid" alt="img" id="photo">
          </div>
          <div class="name col-lg-12 col-sm-12 pt-4">
              <h3 class="fs-3 fw-bold" id="profilName">${doc.data().prenom} ${
      doc.data().name
    }</h3>
              <p class="fs-4 fw-bold" id="profilStatut">${doc.data().statut}</p>
          </div>
        </div>
        <div class="col-lg-12 col-sm-12 d-flex justify-content-center pb-5">
            <a href="editProfilUser.html">
                <button class="btn" id="editerProfil">Editer le profil</button>
            </a>
        </div>`;
    imgHeader.src = doc.data().profilURL;
    userHeaderName.innerHTML = doc.data().prenom + " " + doc.data().name;
    userHeaderStatut.innerHTML = doc.data().statut;
  });
});

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
