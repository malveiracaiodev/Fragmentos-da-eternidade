/*
========================================
FRAGMENTOS DA ETERNIDADE
MAIN.JS - ENGINE VIVO (MARK I)
========================================
*/

// ===============================
// 🚀 BOOT DO SISTEMA
// ===============================
console.log("Fragmentos da Eternidade iniciado");

// ===============================
// 🌌 INIT
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  console.log("Página carregada com sucesso");

  carregarUltimoCapitulo();
  inicializarEngine();
  atualizarUIViva();
});

// ===============================
// 🧠 ENGINE INIT
// ===============================
function inicializarEngine() {
  if (!window.universe) {
    console.warn("Engine não encontrada");
    return;
  }

  console.log("Engine conectada ao universo");

  // escuta eventos do universo
  if (universe.on) {
    universe.on("chapter_loaded", atualizarUIViva);
  }
}

// ===============================
// 🎨 UI VIVA (CORE DO SISTEMA)
// ===============================
function atualizarUIViva() {
  if (!window.universe) return;

  const body = document.body;

  // 🔵 estado Caleb desbloqueado
  body.classList.toggle(
    "caleb-unlocked",
    Universe.state?.characters?.caleb?.unlocked
  );

  // 🔥 estado origem do Caleb
  body.classList.toggle(
    "caleb-origin",
    Universe.state?.characters?.caleb?.origin
  );

  // 💎 fragmentos globais
  body.classList.toggle(
    "high-fragments",
    (Universe.state?.lore?.globalFragments || 0) > 2
  );

  console.log("UI do universo atualizada");
}

// ===============================
// 📚 CARREGA ÚLTIMO CAPÍTULO
// ===============================
async function carregarUltimoCapitulo() {

  try {

    const resposta = await fetch("data/capitulos.json");
    const capitulos = await resposta.json();

    const ultimoCapitulo = capitulos[capitulos.length - 1];

    const container = document.getElementById("ultimo-capitulo");
    if (!container) return;

    container.innerHTML = `
      <div class="card">

        <h2>📖 ${ultimoCapitulo.titulo}</h2>

        <p>${ultimoCapitulo.descricao}</p>

        <a href="capitulos/${ultimoCapitulo.arquivo}" class="btn">
          Ler Capítulo
        </a>

      </div>
    `;

    // 🔥 evento do universo
    if (window.universe?.trigger) {
      Universe.trigger("chapter_loaded", ultimoCapitulo);
    }

    // 🔥 atualiza UI depois do carregamento
    atualizarUIViva();

  } catch (erro) {
    console.error("Erro ao carregar capítulos:", erro);
  }
}
