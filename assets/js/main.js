/*
========================================
FRAGMENTOS DA ETERNIDADE
MAIN.JS - ENGINE ESTÁVEL (FIXED)
========================================
*/

console.log("Fragmentos da Eternidade iniciado");

// ===============================
// BOOT
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  console.log("Página carregada");

  carregarUltimoCapitulo();
  inicializarEngine();

  // UI inicial mesmo sem engine
  atualizarUIViva();
});

// ===============================
// ENGINE INIT SEGURA
// ===============================
function inicializarEngine() {
  const engine = window.universe || window.Universe;

  if (!engine) {
    console.warn("Engine não encontrada (modo offline)");
    return;
  }

  console.log("Engine conectada");

  try {
    if (engine.on) {
      engine.on("chapter_loaded", atualizarUIViva);
    }
  } catch (e) {
    console.warn("Erro ao conectar eventos da engine:", e);
  }
}

// ===============================
// UI VIVA SEGURA
// ===============================
function atualizarUIViva() {
  const body = document.body;

  const engine = window.universe || window.Universe;

  const calebUnlocked =
    engine?.state?.characters?.caleb?.unlocked === true;

  const calebOrigin =
    engine?.state?.characters?.caleb?.origin === true;

  const highFragments =
    (engine?.state?.lore?.globalFragments || 0) > 2;

  body.classList.toggle("caleb-unlocked", calebUnlocked);
  body.classList.toggle("caleb-origin", calebOrigin);
  body.classList.toggle("high-fragments", highFragments);

  console.log("UI atualizada", {
    calebUnlocked,
    calebOrigin,
    highFragments
  });
}

// ===============================
// CAPÍTULO (SEGURADO)
// ===============================
async function carregarUltimoCapitulo() {
  try {
    const resposta = await fetch("data/capitulos.json");

    if (!resposta.ok) {
      console.warn("capitulos.json não encontrado");
      return;
    }

    const capitulos = await resposta.json();

    if (!Array.isArray(capitulos) || capitulos.length === 0) {
      console.warn("Sem capítulos disponíveis");
      return;
    }

    const ultimo = capitulos[capitulos.length - 1];

    const container = document.getElementById("ultimo-capitulo");

    if (!container) return;

    container.innerHTML = `
      <div class="card">

        <h2>📖 ${ultimo.titulo || "Sem título"}</h2>

        <p>${ultimo.descricao || ""}</p>

        <a href="capitulos/${ultimo.arquivo || "#"}" class="btn">
          Ler Capítulo
        </a>

      </div>
    `;

    const engine = window.universe || window.Universe;

    if (engine?.trigger) {
      engine.trigger("chapter_loaded", ultimo);
    }

    atualizarUIViva();

  } catch (erro) {
    console.error("Erro ao carregar capítulos:", erro);
  }
}
