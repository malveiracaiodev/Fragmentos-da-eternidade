/**
 *  * 🌌 FRAGMENTOS DA ETERNIDADE - ENGINE DE SALVAMENTO (UTILS)
  * Este arquivo centraliza todas as funções que salvam e leem o progresso do leitor.
   */

   // Chave única usada no LocalStorage para não misturar com outros sites
   const STORAGE_KEY = "fragmentos_progresso";

   /**
    * Obtém a lista de todos os segredos (IDs) já desbloqueados pelo usuário.
     * @returns {Array<string>} Lista de IDs desbloqueados.
      */
      function obterProgresso() {
          try {
                  const dados = localStorage.getItem(STORAGE_KEY);
                          return dados ? JSON.parse(dados) : [];
                              } catch (e) {
                                      console.error("⚠️ Erro ao ler o localStorage:", e);
                                              return [];
                                                  }
                                                  }

                                                  /**
                                                   * Salva um novo segredo na Wiki do usuário.
                                                    * @param {string} idSegredo - O ID único da arma, personagem ou local (ex: "lamina_eterna").
                                                     * @returns {boolean} Retorna verdadeiro se o segredo acabou de ser descoberto, ou falso se já havia sido liberado antes.
                                                      */
                                                      function salvarProgressoWiki(idSegredo) {
                                                          if (!idSegredo) return false;
                                                              
                                                                  let progresso = obterProgresso();

                                                                      // Se o ID ainda não existe na lista do leitor, adiciona
                                                                          if (!progresso.includes(idSegredo)) {
                                                                                  progresso.push(idSegredo);
                                                                                          localStorage.setItem(STORAGE_KEY, JSON.stringify(progresso));
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

