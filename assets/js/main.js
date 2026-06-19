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

    // ==========================================================
    // 🎨 NOVAS INTERAÇÕES DO LAYOUT (HUD / MENU)
    // ==========================================================
    
    // 1. Controle Ativo do Menu de Navegação
    const linksMenu = document.querySelectorAll(".main-nav a");
    linksMenu.forEach(link => {
      link.addEventListener("click", (e) => {
        // Remove a classe active de todos os botões
        linksMenu.forEach(item => item.classList.remove("active"));
        // Adiciona apenas no botão que foi clicado
        link.classList.add("active");
        
        console.log(`🧭 Navegando para: ${link.textContent.trim()}`);
      });
    });

    // 2. Ouvir Narração (Efeito do Botão de Áudio)
    const btnNarracao = document.querySelector(".btn-outline");
    if (btnNarracao && btnNarracao.textContent.includes("NARRATION")) {
      btnNarracao.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("🔊 Inicializando player de áudio para a lore...");
        // Aqui você poderá integrar uma API de áudio futuramente
      });
    }

    // 3. Clique nos Itens da Lista "Explorar"
    const itensExplorar = document.querySelectorAll(".explore-list a");
    itensExplorar.forEach(item => {
      item.addEventListener("click", (e) => {
        const secao = item.querySelector("strong")?.textContent;
        console.log(`🔍 Usuário abriu a seção do Universo: ${secao}`);
      });
    });

    console.log("✨ Universo ativo com segurança");

  } catch (e) {
    console.warn("⚠️ erro no main.js:", e);
  }

});
