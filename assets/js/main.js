console.log("🌌 Fragmentos da Eternidade carregando...");

document.addEventListener("DOMContentLoaded", () => {

  try {

    // ===============================
    // 🌌 STORAGE (LORE / SAVE)
    // ===============================
    if (window.storage?.load) {
      storage.load();
      console.log("💾 Storage carregado");
    }

    // ===============================
    // 🌌 UNIVERSE ENGINE
    // ===============================
    if (window.universe?.init) {
      universe.init();
      console.log("🧠 Universe iniciado");
    }

    // ===============================
    // 📖 CAPÍTULOS (FUTURO)
    // ===============================
    if (typeof carregarUltimoCapitulo === "function") {
      carregarUltimoCapitulo();
    }

    // ===============================
    // ⚙️ ENGINE LEGADO (CASO EXISTA)
    // ===============================
    if (typeof inicializarEngine === "function") {
      inicializarEngine();
    }

    console.log("✨ Universo ativo com segurança");

  } catch (e) {
    console.warn("⚠️ erro no main.js:", e);
  }

});
