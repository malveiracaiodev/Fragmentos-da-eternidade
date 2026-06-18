const grid = document.getElementById("grid");

// ===============================
// 🧬 CRIA CARD
// ===============================
function createCard(id, data) {

  const card = document.createElement("a");
  card.className = "card";

  const isUnlocked = data.unlocked === true;

  if (isUnlocked) {
    card.href = `characters/${id}.html`;
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
// 🌌 RENDER
// ===============================
function render() {

  if (!grid) return;
  if (!window.Universe) return;

  const chars = Universe.state.characters;

  grid.innerHTML = "";

  for (let id in chars) {
    grid.appendChild(createCard(id, chars[id]));
  }

  console.log("Personagens renderizados");
}

// ===============================
// 🔥 UI REATIVA (IMPORTANTE)
// ===============================
function attachUniverseListener() {
  if (!window.Universe?.on) return;

  Universe.on("character_updated", render);
  Universe.on("chapter_loaded", render);
}

// ===============================
// 🚀 INIT
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  render();
  attachUniverseListener();
});
