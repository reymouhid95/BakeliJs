firebase.initializeApp({
  apiKey: "AIzaSyAdYSscG955-wSnJz3eD4EAKYSw7dnnDb8",
  authDomain: "validationjs-220cb.firebaseapp.com",
  projectId: "validationjs-220cb",
  storageBucket: "validationjs-220cb.appspot.com",
  messagingSenderId: "968244401042",
  appId: "1:968244401042:web:f6684d97e4168a23b0a74b",
});
let db = firebase.firestore();
// const storage = firebase.storage();
// var storageRef = storage.ref();

let profilInfo = document.querySelector("#admin");
let prenom = document.getElementById("inputPrenom");
let nom = document.getElementById("inputNom");
let email = document.getElementById("inputEmail");
let phone = document.getElementById("inputPhone");
let mettreAjour = document.querySelector(".bttn");
var adminHeaderName = document.querySelector(".user-name");
var userHeaderStatut = document.querySelector(".user-type");
mettreAjour.innerHTML = "";
let imgHeader = document.getElementById("profil-img");

function getAdmin() {
  let imgHeader = document.getElementById("profil-img");
  db.collection("user").onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().name}`);
      profilInfo.innerHTML = "";
      profilInfo.innerHTML = `<p class="titleProfil">Profil</p>
            <div class="pb-5 profil row">
                <div class="profilAdmin col-lg-12 col-sm-12">
                    <img src="${
                      doc.data().profilURL
                    }" class="rounded-circle img-fluid" alt="img" id="photo">
                    <input type="file" name="file" id="file" onclick="chgImgProfil()">
                    <label for="file" id="uploadButton" class="d-flex justify-content-center align-items-center"><i class="bi bi-camera-fill"></i></label>
                </div>
                <div class="name col-lg-12 col-sm-12 pt-4">
                    <h3 class="fs-3 fw-bold" id="profilName">${
                      doc.data().prenom
                    } ${doc.data().name}</h3>
                    <p class="fs-4 fw-bold" id="profilStatut">${
                      doc.data().statut
                    }</p>
                </div>
            </div>`;
      prenom.value = doc.data().prenom;
      nom.value = doc.data().name;
      email.value = doc.data().email;
      phone.value = doc.data().telephone;
      imgHeader.src = doc.data().profilURL;
      adminHeaderName.innerHTML = doc.data().prenom + " " + doc.data().name;
      userHeaderStatut.innerHTML = doc.data().statut;
      mettreAjour.innerHTML = `<button class="btn" type="button" onclick="update('${doc.id}')" id="mettreAjour">Mettre à jour</button>`;
    });
  });
}

getAdmin();

function update(id) {
  let img = document.querySelector("#photo");
  db.collection("user")
    .doc(id)
    .update({
      prenom: prenom.value,
      name: nom.value,
      email: email.value,
      telephone: phone.value,
      profilURL: img.src,
    })
    .then(function () {
      // alert("Document successfully updated !");
      prenom.value = "";
      nom.value = "";
      email.value = "";
      phone.value = "";
      window.location.href = "parametresUtilisateur.html";
    })
    .catch(function (error) {
      console.error("Error removing document:", error);
    });
}

var fileName;
var chosedFile;
//Changement d'image de profil
function chgImgProfil() {
  let file = document.querySelector("#file");
  let img = document.querySelector("#photo");
  let imgHeader = document.getElementById("imgHeader");
  file.addEventListener("change", function () {
    chosedFile = this.files[0];
    if (chosedFile) {
      const reader = new FileReader();
      fileName = chosedFile.name;
      reader.addEventListener("load", function () {
        img.setAttribute("src", reader.result);
        imgHeader.setAttribute("src", reader.result);
      });

      reader.readAsDataURL(chosedFile);
      uploadImgStorage();
      // window.localStorage.setItem("")
    }
  });
}

//Fonction de sauvegarde des images sur Firebase Storage
const uploadImgStorage = async () => {
  let storageRef = firebase.storage().ref("imagesUsers/" + fileName);
  let uploadTask = storageRef.put(chosedFile);
  console.log(uploadTask);

  uploadTask.on("state_changed", (snapshot) => {
    console.log(snapshot);
    let percentVal = Math.floor(
      (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    );
    console.log(percentVal);
  }),
    (error) => {
      console.log("Error is", error);
    },
    () => {
      uploadTask.snapshot.ref.getDownloadURL().then((url) => {
        console.log("URL", url);
      });
    };
};

// Vérifie l'état de l'authentification à chaque chargement de page
// function changePage(){
//     let redirectBtn = document.querySelector('#mettreAjour')
//     redirectBtn.addEventListener('click' , function(){
//         window.location.href = "parametresUtilisateur.html";
//     })

// }
// changePage()

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
