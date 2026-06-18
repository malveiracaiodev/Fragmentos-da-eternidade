function desbloquear() {

  if (!window.universe || !window.lore) return;

  if (universe.state.characters.caleb.origin) return;

  // ===============================
  // 🔥 ATUALIZA LORE
  // ===============================
  Lore.unlockCalebOrigin();

  // ===============================
  // 💾 SALVA ESTADO
  // ===============================
  Storage?.save?.();

  // ===============================
  // 🧠 DISPARA EVENTO GLOBAL
  // ===============================
  Universe.trigger?.("caleb_origin_unlocked");

  // ===============================
  // 🎨 UI LOCAL
  // ===============================
  const origem = document.getElementById("origem");
  const status = document.getElementById("status");
  const log1 = document.getElementById("log1");
  const log2 = document.getElementById("log2");
  const aura = document.querySelector(".aura");

  if (origem) origem.innerText = "Fragmento Zero";
  if (status) status.innerText = "Ativo";

  if (log1) log1.innerText =
    "Fragmento 01: Energia instável detectada";

  if (log2) log2.innerText =
    "Fragmento 02: Memória parcial restaurada";

  // ===============================
  // 🌌 EFEITO VISUAL EVOLUÍDO
  // ===============================
  if (aura) {
    aura.style.boxShadow =
      "0 0 120px rgba(0,170,255,0.9)";
  }

  // ===============================
  // 🔥 ATUALIZA UI GLOBAL
  // ===============================
  if (typeof atualizarUIViva === "function") {
    atualizarUIViva();
  }

  console.log("CALEB ORIGIN DESBLOQUEADO");
}
