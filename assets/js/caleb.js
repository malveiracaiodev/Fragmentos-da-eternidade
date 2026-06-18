let origemDesbloqueada = false;

function desbloquearOrigem() {
  if (origemDesbloqueada) return;

    document.getElementById("origem").innerText = "Fragmento Zero";
      document.getElementById("status").innerText = "Ativo";

        document.getElementById("log1").innerText = "Fragmento 01: Sinal detectado no núcleo";
          document.getElementById("log2").innerText = "[ PARCIALMENTE LIBERADO ] Memória instável";

            origemDesbloqueada = true;

              // efeito simples de brilho ao desbloquear
                document.querySelector(".aura").style.boxShadow =
                    "0 0 90px rgba(0,170,255,0.9)";
                    }