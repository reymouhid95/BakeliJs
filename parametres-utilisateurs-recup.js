firebase.initializeApp({
  apiKey: "AIzaSyAdYSscG955-wSnJz3eD4EAKYSw7dnnDb8",
  authDomain: "validationjs-220cb.firebaseapp.com",
  projectId: "validationjs-220cb",
  storageBucket: "validationjs-220cb.appspot.com",
  messagingSenderId: "968244401042",
  appId: "1:968244401042:web:f6684d97e4168a23b0a74b",
});
let db = firebase.firestore();

// let profilInfo = document.querySelector('#admin');
let prenom = document.getElementById("first-name");
let nom = document.getElementById("last-name");
let email = document.getElementById("email");
let phone = document.getElementById("number");
let mettreAjour = document.querySelector("#update");
let adresse = document.getElementById("adresse");
let organisation = document.getElementById("organisation");
let birthday = document.getElementById("date");
let profession = document.getElementById("profession");
let userName = document.querySelector(".user-name");
let userType = document.querySelector(".user-type");
// mettreAjour.innerHTML = '';
let imgHeader = document.getElementById("profil-img");

function getAdmin() {
  let imgHeader = document.getElementById("profil-img");
  db.collection("user").onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().name}`);
      prenom.value = doc.data().prenom;
      nom.value = doc.data().name;
      email.value = doc.data().email;
      phone.value = doc.data().telephone;
      adresse.value = doc.data().adresse;
      birthday.value = doc.data().date;
      organisation.value = doc.data().organisation;
      profession.value = doc.data().profession;
      imgHeader.src = doc.data().profilURL;
      mettreAjour.innerHTML = `<button type="button" onclick="update('${doc.id}')" class="btn btn-sm update mb-3">Mettre à jour</button>`;
    });
  });
  db.collection("admin").onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      imgHeader.src = doc.data().profilURL;
      userName.innerHTML = doc.data().prenom + " " + doc.data().name;
      userType.innerHTML = doc.data().admin;
    });
  });
}
getAdmin();

function update(id) {
  db.collection("user")
    .doc(id)
    .update({
      prenom: prenom.value,
      name: nom.value,
      email: email.value,
      telephone: phone.value,
      profession: profession.value,
      organisation: organisation.value,
      date: birthday.value,
      // profilURL: img.src,
    })
    .then(function () {})
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
