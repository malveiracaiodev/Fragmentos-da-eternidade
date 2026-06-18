const grid = document.getElementById("grid");

// ===============================
// 🧬 CRIA CARD DE PERSONAGEM
// ===============================
function createCard(id, data) {

  const card = document.createElement("a");
  card.className = "card";

  const isUnlocked = data.unlocked === true;

  if (isUnlocked) {
    card.href = `characters/${id}.html`;
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
// 🌌 RENDER DA LISTA
// ===============================
function render() {

  if (!grid) {
    console.warn("Grid não encontrado");
    return;
  }

  if (!window.Universe) {
    console.warn("Universe não carregado");
    return;
  }

  const chars = Universe.state.characters;

  grid.innerHTML = ""; // evita duplicação

  for (let id in chars) {
    grid.appendChild(createCard(id, chars[id]));
  }
}

// ===============================
// 🚀 INIT
// ===============================
document.addEventListener("DOMContentLoaded", render);
