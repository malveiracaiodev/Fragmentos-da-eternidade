function desbloquear() {

  if (!window.universe || !window.lore) return;

  const caleb = universe.state.characters?.caleb;

  if (!caleb) return;

  if (caleb.lore?.origin) return;

  // ===============================
  // 🔥 ATUALIZA LORE
  // ===============================
  lore.unlockCalebOrigin();

  // ===============================
  // 💾 SALVA ESTADO
  // ===============================
  storage?.save?.();

  // ===============================
  // 🧠 EVENTO GLOBAL
  // ===============================
  universe.trigger?.("caleb_origin_unlocked", caleb);

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
  // 🌌 EFEITO VISUAL
  // ===============================
  if (aura) {
    aura.style.boxShadow =
      "0 0 120px rgba(0,170,255,0.9)";
  }

  console.log("CALEB ORIGIN DESBLOQUEADO");
}

// ===============================
// 🔘 BOTÃO
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("unlockBtn");

  if (btn) {
    btn.addEventListener("click", desbloquear);
  }
});
