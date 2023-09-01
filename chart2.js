var ctx = document.getElementById("doughnut").getContext("2d");
var myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Terminé", "En cours", "Archivé", "Bloqué"],
    datasets: [
      {
        label: "statistique",
        data: [18, 49.48, 9.04, 23],
        backgroundColor: [
          "rgba(32, 223, 127, 1)",
          "rgba(9, 53, 69, 1)",
          "rgba(255, 168, 167, 1)",
          "rgba(253, 208, 159, 0.7)",
        ],
        borderColor: [
          "rgba(32, 223, 127, 1)",
          "rgba(9, 53, 69, 1)",
          "rgba(255, 168, 167, 1)",
          "rgba(253, 208, 159, 0.7)",
        ],

        title: ["18%", "49.48%", "9.04%", "23"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});
