/*
========================================
FRAGMENTOS DA ETERNIDADE
MAIN.JS - MARK I (ENGINE READY)
========================================
*/

// ===============================
// 🚀 BOOT DO SISTEMA
// ===============================
console.log("Fragmentos da Eternidade iniciado");

// ===============================
// 🌌 VERIFICA CARREGAMENTO
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  console.log("Página carregada com sucesso");

  carregarUltimoCapitulo();
  inicializarEngine();
});

// ===============================
// 🧠 ENGINE INIT
// ===============================
function inicializarEngine() {
  if (!window.Universe) {
    console.warn("Engine não encontrada");
    return;
  }

  console.log("Engine conectada ao universo");
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

    // 🔥 DISPARA EVENTO NO UNIVERSO (FUTURO ENGINE)
    if (window.Universe) {
      Universe.trigger?.("chapter_loaded", ultimoCapitulo);
    }

  } catch (erro) {
    console.error("Erro ao carregar capítulos:", erro);
  }
}
