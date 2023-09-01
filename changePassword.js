// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, updatePassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
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
// Initialize Firebase firestore
const db = getFirestore(app);

// Écouteur d'événement pour le formulaire de changement de mot de passe
const changePasswordForm = document.querySelector(".change-password-form");
changePasswordForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const newPassword = changePasswordForm.password2.value;
  const confirmPassword = changePasswordForm.password3.value;

  if (newPassword !== confirmPassword) {
    alert("Les nouveaux mots de passe ne correspondent pas");
    return;
  }

  try {
    // Appeler la fonction pour changer le mot de passe
    await changePassword(newPassword);

    alert("Mot de passe mis à jour avec succès");

    // Réinitialiser le formulaire si nécessaire
    changePasswordForm.reset();
  } catch (error) {
    alert("Erreur lors de la mise à jour du mot de passe:");
    console.log(error.message);
  }
});

// Fonction pour changer le mot de passe de l'utilisateur authentifié
async function changePassword(newPassword) {
  const user = auth.currentUser;

  try {
    // Mettre à jour le mot de passe de l'utilisateur
    await updatePassword(user, newPassword);
  } catch (error) {
    throw error;
  }
}
