var ctx = document.getElementById("lineChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet"],
    datasets: [
      {
        label: "Evaluation des cotisations en fonction de temps",
        data: [0, 40, 36, 38, 45, 38, 60, 80],
        backgroundColor: ["rgba(9, 53, 69, 1)"],
        borderColor: ["rgba(32, 223, 127, 1)"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});
