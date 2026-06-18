function desbloquear() {

  if (Universe.state.characters.caleb.origin) return;

  Lore.unlockCalebOrigin();

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

  if (aura) {
    aura.style.boxShadow =
      "0 0 120px rgba(0,170,255,0.9)";
  }
}
