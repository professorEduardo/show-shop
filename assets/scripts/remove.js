API_URL = "https://3s5tmk-3000.csb.app/";
async function removeProduct(id) {
  try {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(API_URL + id, options);
    if (!response.ok) {
      throw new Error(`Erro: ${response.status}`);
    }
    const dados = await response.json();
    window.location.href = "https://3s5tmk-5500.csb.app/";
  } catch (error) {
    console.error("Erro na requisição:", error.message);
  }
}
