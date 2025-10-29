API_URL = "https://3s5tmk-3000.csb.app/";

addEventListener("DOMContentLoaded", async () => {
  let main = document.querySelector(".main");
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(API_URL, options);
    if (!response.ok) {
      throw new Error(`Erro: ${response.status}`);
    }
    const dados = await response.json();
    dados.map((data) => {
      main.innerHTML += `
      <div class="card">
      <div class="image">
      <img src="" alt="" />
      </div>
      <div class="content-card">
      <p class="price">${data.price}</p>
      <p class="title">${data.name}</p>
      <p class="description">${data.description}</p>
      
      </div>
      <button class="buy-card" onclick="addCart(${data.id})">Buy</button>
      </div>
      `;
      console.log(dados);
    });
  } catch (error) {
    console.error("Erro na requisição:", error.message);
  }
});
