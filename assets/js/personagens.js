function render() {

  const grid = document.getElementById("grid");

  if (!grid) {
    console.warn("GRID não encontrado");
    return;
  }

  if (!window.universe?.state?.characters) {
    console.warn("UNIVERSE ainda não pronto");
    return;
  }

  const chars = universe.state.characters;

  grid.innerHTML = "";

  Object.entries(chars).forEach(([id, data]) => {

    const card = document.createElement("div");

    card.className = "card " + (data.unlocked ? "unlocked" : "locked");

    card.innerHTML = `
      <h2>${data.name}</h2>
      <p>${data.unlocked ? "Entidade ativa" : "Bloqueado"}</p>
    `;

    grid.appendChild(card);
  });
}

// ===============================
// 🔥 BOOT COM RETRY REAL
// ===============================
function boot() {

  let tries = 0;

  const interval = setInterval(() => {

    tries++;

    const grid = document.getElementById("grid");

    if (grid && window.universe?.state?.characters) {
      render();
      clearInterval(interval);
      console.log("Personagens carregados");
    }

    if (tries > 50) {
      clearInterval(interval);
      console.error("Falha ao carregar personagens");
    }

  }, 100);
}

// ===============================
document.addEventListener("DOMContentLoaded", boot);
