let URL = "http://localhost:3000/users";

// montant seuil des cotisations
let seuil = 300000;

// recuperation des données et afficher
let tbody = document.querySelector("#firstTable tbody");
// let montantTotalCotiseparUtilisateur = 0;
// let montantTotalCotiseParMoisDeTousLesUtilisateurs = 0;
fetch(URL, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((users) => {
    console.log(users);
    users.forEach((user, index) => {
      // Calcul de la somme des cotisations pour l'utilisateur actuel
      let montantTotalCotiseparUser = user.cotisations.reduce(
        (total, cotisation) => {
          total = total + parseFloat(cotisation.montantCotisation);
          return total;
        },
        0
      );
      let tr1 = document.createElement("tr");
      tr1.innerHTML = ` 
        <td>${users[index].prenom} ${users[index].name} </td>
        <td>01/01/2023</td>
        <td> ${montantTotalCotiseparUser} FCFA </td>
        <td>${seuil - montantTotalCotiseparUser} FCFA </td>
        <td><button type="button" class="btn  btn-sm btn-confirmer my-0 fw-bold text-light" onclick="boutonConfirmer(this)">confirmer</button>
        </td>
        `;
      tr1.classList.add("fade-in-row-before");
      tbody.appendChild(tr1);
      setTimeout(() => {
        tr1.classList.add("fade-in-row-after");
      }, 600);
    });
  })
  .catch((error) => {
    console.log("erreur erreur ", error);
  });

function boutonConfirmer(button) {
  button.style.display = "none";

  let messageConfirmation = document.createElement("p");
  messageConfirmation.textContent = "Validé";
  messageConfirmation.style.color = "#20df7f";
  messageConfirmation.style.marginBottom = 0;

  let td = button.parentElement;
  td.appendChild(messageConfirmation);
}
