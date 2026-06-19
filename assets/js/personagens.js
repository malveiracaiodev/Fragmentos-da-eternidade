function createCard(id, data) {

  const card = document.createElement("a");
  card.className = "card";

  const isUnlocked = data.unlocked === true;

  if (isUnlocked) {
    card.href = `../personagens/${id}.html`;
    card.classList.add("unlocked");
  } else {
    card.href = "javascript:void(0)";
    card.classList.add("locked");
  }

  card.innerHTML = `
    <h2>${data.name}</h2>
    <p>${isUnlocked ? "Entidade ativa" : "Bloqueado"}</p>
  `;

  return card;
}

// ===============================
// 🌌 RENDER SEGURO (RETRY SYSTEM)
// ===============================
function render() {

  const grid = document.getElementById("grid");

  if (!grid) {
    console.warn("Grid ainda não existe, tentando novamente...");
    return;
  }

  if (!window.universe?.state?.characters) {
    console.warn("Universe ainda não carregou, tentando novamente...");
    return;
  }

  const chars = universe.state.characters;

  grid.innerHTML = "";

  Object.entries(chars).forEach(([id, data]) => {
    grid.appendChild(createCard(id, data));
  });

  console.log("Personagens renderizados");
}

// ===============================
// 🔥 AUTO RETRY (ESSENCIAL)
// ===============================
function boot() {

  const interval = setInterval(() => {

    const grid = document.getElementById("grid");

    if (grid && window.universe?.state?.characters) {
      render();
      clearInterval(interval);
    }

  }, 100);
}

// ===============================
// 🚀 INIT
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  boot();
});
