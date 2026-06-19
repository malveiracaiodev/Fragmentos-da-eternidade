/*
========================================
FRAGMENTOS DA ETERNIDADE
MAIN.JS - BOOT SEGURO (FIXED)
========================================
*/

console.log("🌌 Fragmentos da Eternidade - main.js carregado");

// ===============================
// 🚀 BOOT SEGURO DO SISTEMA
// ===============================
document.addEventListener("DOMContentLoaded", () => {

  console.log("📦 DOM carregado - iniciando boot do universo");

  // ===============================
  // 💾 1. LOAD DO UNIVERSO (SAVE FIRST)
  // ===============================
  if (typeof storage !== "undefined" && typeof storage.load === "function") {
    try {
      storage.load();
      console.log("💾 Save carregado com sucesso");
    } catch (e) {
      console.warn("⚠️ Erro ao carregar save:", e);
    }
  }

  // ===============================
  // 🌌 2. INIT DO ENGINE
  // ===============================
  if (typeof universe !== "undefined" && typeof universe.init === "function") {
    try {
      universe.init();
      console.log("🌌 Universe inicializado");
    } catch (e) {
      console.warn("⚠️ Erro ao inicializar universe:", e);
    }
  }

  // ===============================
  // 📜 3. INICIALIZAÇÃO DO LORE / SISTEMA
  // ===============================
  if (typeof lore !== "undefined") {
    console.log("📜 Sistema de lore detectado");
  }

  // ===============================
  // 🧠 4. UI / HISTÓRIA
  // ===============================
  if (typeof carregarUltimoCapitulo === "function") {
    try {
      carregarUltimoCapitulo();
      console.log("📖 Último capítulo carregado");
    } catch (e) {
      console.warn("⚠️ Erro ao carregar capítulo:", e);
    }
  }

  if (typeof inicializarEngine === "function") {
    try {
      inicializarEngine();
      console.log("⚙️ Engine UI inicializada");
    } catch (e) {
      console.warn("⚠️ Erro ao inicializar engine UI:", e);
    }
  }

  // ===============================
  // 🔥 EVENTO FINAL
  // ===============================
  console.log("✨ Boot completo - universo ativo");

});
