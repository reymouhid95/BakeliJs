document.addEventListener("DOMContentLoaded", function () {
  const itemsPerPage = 6;
  const tableBody = document.querySelector(".table tbody");
  const rows = tableBody.querySelectorAll("tr");
  const paginationLinks = document.querySelectorAll(".pagination .page-link");
  const activeClass = "active";

  function showPage(pageNumber) {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    rows.forEach((row, index) => {
      if (index >= startIndex && index < endIndex) {
        row.style.display = "table-row";
      } else {
        row.style.display = "none";
      }
    });
  }

  paginationLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      paginationLinks.forEach((item) => {
        item.parentElement.classList.remove(activeClass);
      });

      this.parentElement.classList.add(activeClass);

      const pageNumber = parseInt(this.textContent);
      showPage(pageNumber);
    });
  });

  showPage(1);
});
