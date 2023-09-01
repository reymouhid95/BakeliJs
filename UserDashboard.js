import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
  getFirestore,
  getDoc,
  doc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdYSscG955-wSnJz3eD4EAKYSw7dnnDb8",
  authDomain: "validationjs-220cb.firebaseapp.com",
  projectId: "validationjs-220cb",
  storageBucket: "validationjs-220cb.appspot.com",
  messagingSenderId: "968244401042",
  appId: "1:968244401042:web:f6684d97e4168a23b0a74b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase firestore
const db = getFirestore(app);

let tableOne = document.getElementById("tableOne");
let btnnexts = document.querySelectorAll(".Next");
let profils = document.querySelectorAll(".profil-compte img");
let names = document.querySelectorAll(".user-name");
let btnprevs = document.querySelectorAll(".Prev");
let btndate = document.querySelector(".cotise .form .date");
let btnnumber = document.querySelector(".cotise .form .number");
let btncotise = document.querySelector(".cotise .form .btncotise");
let tableTwo = document.getElementById("tableTwo");
let dateOne = ["", "Janvier", "Février", "Mars", "Avril", "Mai", "Juin"];
let dateTwo = [
  "",
  "Juillet",
  "Aout",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];
window.addEventListener("DOMContentLoaded", async (e) => {
  const docref = doc(db, "cotisations", "1Huyxxn9yyIyiKMc8AUi");
  const querySnapshot = await getDoc(docref);

  if (querySnapshot.exists()) {
    const cotis = querySnapshot.data();
    console.log(cotis);
    for (let i = 1; i < dateOne.length; i++) {
      tableOne.innerHTML += `<table>
            
            <tbody>
            <tr>
                <th scope="row">${dateOne[i]}</th>
                <td>${cotis.debutDate}</td>
                <td class="montantcotise">${cotis.cotiseMontant}FCFA</td>
                <td class="text-primary fw-bold"> En attente</td>
                <td><i class="bi bi-eye" data-bs-toggle="modal"
                        data-bs-target="#exampleModal1"></i>
                    <i class="bi bi-pencil-square"  data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"></i>
                </td>
            </tr>
            
        </tbody>
        </table>
        `;
    }
    console.log(" => ", cotis);
  }
  btncotise.addEventListener("click", async (e) => {
    e.preventDefault();
    await updateDoc(docref, {
      debutDate: btndate.value,
      cotiseMontant: btnnumber.value,
    });
    console.log("donnees mise a jour");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  });
  btnnexts.forEach((btnnext) => {
    btnnext.addEventListener("click", () => {
      tableTwo.innerHTML = `
        <thead>
     <tr>
    <th scope="col" class="bg-success text-primary">Mois</th>
    <th scope="col" class="bg-success text-primary">Date</th>
    <th scope="col" class="bg-success text-primary">Montant</th>
    <th scope="col" class="bg-success text-primary">Statut</th>
    <th scope="col" class="bg-success text-primary">Actions</th>
     </tr>
    </thead>`;
      document.querySelector(".active div").classList.remove("bg-success");
      document.querySelector(".active div").classList.add("text-info");
      document.querySelector(".active div").classList.remove("text-white");
      document.querySelector(".active div").classList.add("bg-white");
      document.querySelector("#tableOne").classList.add("d-none");
      document.querySelector(".next div").classList.add("bg-success");
      document.querySelector(".next div").classList.add("active");
      document.querySelector(".next div").classList.add("text-white");
      document.querySelector(".next div").classList.remove("bg-white");
      document.querySelector("#tableTwo").classList.remove("d-none");
      document.querySelector(".prev").classList.remove("disabled");
      document.querySelector(".prev").classList.add("fw-bold");
      document.querySelector(".nexte").classList.add("disabled");
      document.querySelector(".nexte").classList.remove("fw-bold");

      if (querySnapshot.exists()) {
        const cotis = querySnapshot.data();
        console.log(cotis);
        for (let i = 1; i < dateTwo.length; i++) {
          tableTwo.innerHTML += `<table>
                
                <tbody>
                <tr>
                    <th scope="row">${dateTwo[i]}</th>
                    <td>${cotis.debutDate}</td>
                    <td>${cotis.cotiseMontant}FCFA</td>
                    <td class="text-primary fw-bold"> En attente</td>
                    <td><i class="bi bi-eye" data-bs-toggle="modal"
                            data-bs-target="#exampleModal1"></i>
                        <i class="bi bi-pencil-square"></i>
                    </td>
                </tr>
                
            </tbody>
            </table>
            `;
        }
        console.log(doc.id, " => ", cotis);
      }
    });
  });

  btnprevs.forEach((btnprev) => {
    btnprev.addEventListener("click", async () => {
      tableOne.innerHTML = `
    <thead>
<tr>
<th scope="col" class="bg-success text-primary">Mois</th>
<th scope="col" class="bg-success text-primary">Date</th>
<th scope="col" class="bg-success text-primary">Montant</th>
<th scope="col" class="bg-success text-primary">Statut</th>
<th scope="col" class="bg-success text-primary">Actions</th>
</tr>
</thead>`;
      document.querySelector(".active div").classList.add("bg-success");
      document.querySelector(".active div").classList.add("text-white");
      document.querySelector("#tableOne").classList.remove("d-none");
      document.querySelector(".active div").classList.remove("text-info");
      document.querySelector(".active div").classList.remove("bg-white");
      document.querySelector(".next div").classList.remove("bg-success");
      document.querySelector(".next div").classList.remove("text-white");
      document.querySelector("#tableTwo").classList.add("d-none");
      document.querySelector(".next div").classList.add("bg-white");
      document.querySelector(".prev").classList.add("disabled");
      document.querySelector(".nexte").classList.remove("disabled");
      if (querySnapshot.exists()) {
        const cotis = querySnapshot.data();
        console.log(cotis);
        console.log(cotis);
        for (let i = 1; i < dateOne.length; i++) {
          tableOne.innerHTML += `<table>
            
            <tbody>
            <tr>
                <th scope="row">${dateOne[i]}</th>
                <td>${cotis.debutDate}</td>
                <td>${cotis.cotiseMontant}FCFA</td>
                <td class="text-primary fw-bold"> En attente</td>
                <td><i class="bi bi-eye" data-bs-toggle="modal"
                        data-bs-target="#exampleModal1"></i>
                    <i class="bi bi-pencil-square"></i>
                </td>
            </tr>
            
        </tbody>
        </table>
        `;
        }
        console.log(doc.id, " => ", cotis);
      }
    });
  });

  const docRef = doc(db, "user", "nTzIY4IjSUO9w0J7ktrq");
  const qerySnapshot = await getDoc(docRef);
  if (qerySnapshot.exists()) {
    const cotis = qerySnapshot.data();
    console.log(cotis);
    profils.forEach((profil) => {
      profil.src = cotis.profilURL;
    });
    console.log(profils);
  }
  if (qerySnapshot.exists()) {
    const cotis = qerySnapshot.data();
    console.log(cotis);
    names.forEach((name) => {
      name.innerHTML = cotis.prenom + " " + cotis.name;
    });
    console.log(names);
  }

  //-----------------SIDEBAR-------------//
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
});
