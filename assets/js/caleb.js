function desbloquear() {

      if (!Universe.state.characters.caleb.origin) {

          Lore.unlockCalebOrigin();

              document.getElementById("origem").innerText = "Fragmento Zero";
                  document.getElementById("status").innerText = "Ativo";

                      document.getElementById("log1").innerText =
                            "Fragmento 01: Energia instável detectada";

                                document.getElementById("log2").innerText =
                                      "Fragmento 02: Memória parcial restaurada";

                                          document.querySelector(".aura").style.boxShadow =
                                                "0 0 120px rgba(0,170,255,0.9)";
                                                  }
                                                  }
}