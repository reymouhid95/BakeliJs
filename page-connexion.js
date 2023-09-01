// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
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

// Récupération des éléments du Dom
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const connexionButton = document.getElementById("connexion");
let adminEmail = "thiernooury89@gmail.com";
let email;

// Connexion
connexionButton.addEventListener("click", () => {
  email = emailInput.value;
  const password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("User logged in successfully");
      auth.onAuthStateChanged((user) => {
        if (user && email === adminEmail) {
          window.location.href = "dashboard.html";
        } else {
          window.location.href = "UserDashboard.html";
        }
      });
    })
    .catch((error) => {
      console.log("Login error:", error.message);
    });
});

// Vérifie l'état de l'authentification à chaque chargement de page
// auth.onAuthStateChanged((user) => {
//   if (user) {
//     window.location.href = "dashboard.html";
//   } else {
//     window.location.href = "page-connexion.html";
//   }
// });
