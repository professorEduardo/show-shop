addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/")
    .then((response) => response.json())
    .then((data) => {
      console.log("Produtos:", data);
    })
    .catch((error) => {
      console.error("Erro ao buscar produtos:", error);
    });
});
