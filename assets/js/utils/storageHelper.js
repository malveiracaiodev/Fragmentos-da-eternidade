     // ==========================================================================
// 💾 FRAGMENTOS DA ETERNIDADE - LOCAL STORAGE HELPER (INDIVIDUAL)
// ==========================================================================

/**
 * Registra o desbloqueio de um item ou segredo na memória local do leitor.
 * @param {string} segredoId - O ID único da arma, personagem ou lore (ex: 'arma_caleb')
 */
function desbloquearSegredo(segredoId) {
    if (!segredoId) return;

    // 1. Busca a lista de segredos já desbloqueados por ESTE leitor
    let progressoAtual = localStorage.getItem("fragmentos_progresso");
    let segredosDesbloqueados = [];

    if (progressoAtual) {
        try {
            segredosDesbloqueados = JSON.parse(progressoAtual);
        } catch (e) {
            console.error("⚠️ Erro ao ler progresso corrompido, resetando...", e);
            segredosDesbloqueados = [];
        }
    }

    // 2. Se o leitor já desbloqueou esse item antes, não faz nada
    if (segredosDesbloqueados.includes(segredoId)) {
        console.log(`ℹ️ O segredo [${segredoId}] já havia sido descoberto por este leitor.`);
        return;
    }

    // 3. Adiciona o novo ID à lista individual do leitor
    segredosDesbloqueados.push(segredoId);

    // 4. Salva de volta no localStorage do navegador dele
    localStorage.setItem("fragmentos_progresso", JSON.stringify(segredosDesbloqueados));
    console.log(`🔓 [DESBLOQUEADO] Novo segredo registrado para este leitor: ${segredoId}`);

    // 5. DISPARO DO EVENTO GLOBAL: Avisa o universo do site em tempo real
    const evento = new CustomEvent("segredoDesbloqueado", { detail: { id: segredoId } });
    window.dispatchEvent(evento);
}

/**
 * Checa se o leitor atual já desbloqueou um item específico.
 * Usado pelas Wikis para remover o desfoque/blur das imagens e textos.
 * @param {string} segredoId 
 * @returns {boolean}
 */
function verificarSegredoDesbloqueado(segredoId) {
    let progressoAtual = localStorage.getItem("fragmentos_progresso");
    if (!progressoAtual) return false;

    try {
        let segredosDesbloqueados = JSON.parse(progressoAtual);
        return segredosDesbloqueados.includes(segredoId);
    } catch (e) {
        return false;
    }
}

/**
 * Função de trapaça para testes no console durante o desenvolvimento.
 * Digite limparMeuProgresso() no console para resetar e testar tudo do zero.
 */
function limparMeuProgresso() {
    localStorage.removeItem("fragmentos_progresso");
    console.log("🧹 Seu progresso individual foi resetado. Tudo voltou a ficar trancado!");
    window.location.reload();
}
                                                                                             console.log(`🌌 [Wiki] Novo segredo desbloqueado: ${idSegredo}`);
                                                                                                          return true; // Desbloqueio inédito!
                                                                                                              }
                                                                                                                  
                                                                                                                      return false; // Já estava desbloqueado
                                                                                                                      }

                                                                                                                      /**
                                                                                                                       * Verifica se um segredo específico já foi desbloqueado pelo usuário.
                                                                                                                        * @param {string} idSegredo - O ID a ser verificado.
                                                                                                                         * @returns {boolean}
                                                                                                                          */
                                                                                                                          function verificarSegredoDesbloqueado(idSegredo) {
                                                                                                                              const progresso = obterProgresso();
                                                                                                                                  return progresso.includes(idSegredo);
                                                                                                                                  }

                                                                                                                                  /**
                                                                                                                                   * Reseta todo o progresso do usuário (Útil para testes ou botão "Recomeçar Jornada")
                                                                                                                                    */
                                                                                                                                    function resetarTodaWiki() {
                                                                                                                                        localStorage.removeItem(STORAGE_KEY);
                                                                                                                                            console.log("🧹 [Wiki] Todo o progresso foi deletado com sucesso.");
                                                                                                                                            }

