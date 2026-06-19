console.log("🌌 Fragmentos da Eternidade carregando...");

document.addEventListener("DOMContentLoaded", () => {

  if (typeof storage !== "undefined") {
    storage.load();
  }

  if (typeof universe !== "undefined") {
    universe.init();
  }

  if (typeof carregarUltimoCapitulo === "function") {
    carregarUltimoCapitulo();
  }

  if (typeof inicializarEngine === "function") {
    inicializarEngine();
  }

  console.log("✨ Universo ativo");
});
