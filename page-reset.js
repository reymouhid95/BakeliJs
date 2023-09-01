// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
  getAuth,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

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
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Les  éléments du DOM
const numOrEmailInput = document.getElementById("numOrEmail");
const envoyerButton = document.getElementById("envoyer");

// Réinitialisation du mot de passe
envoyerButton.addEventListener("click", () => {
  const numOrEmail = numOrEmailInput.value;

  sendPasswordResetEmail(auth, numOrEmail)
    .then(() => {
      alert("Password reset email sent");
    })
    .catch((error) => {
      alert("Password reset error:", error.message);
    });
});

// Vérifie l'état de l'authentification à chaque chargement de page
// auth.onAuthStateChanged((user) => {
//   if (user) {
//     window.location.href = "cotisations.html";
//   } else {
//     window.location.href = "page-connexion.html";
//   }
// });
