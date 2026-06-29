// ==========================================================================
// 💾 FRAGMENTOS DA ETERNIDADE - LOCAL STORAGE HELPER (REACT / TS)
// ==========================================================================

const STORAGE_KEY = "fragmentos_progresso";

/**
 * Recupera o array de segredos desbloqueados do localStorage.
 */
export function obterProgresso(): string[] {
  const progressoAtual = localStorage.getItem(STORAGE_KEY);
  if (!progressoAtual) return [];
  try {
    return JSON.parse(progressoAtual);
  } catch (e) {
    console.error("⚠️ Erro ao ler progresso corrompido, resetando...", e);
    return [];
  }
}

/**
 * Registra o desbloqueio de um item ou segredo na memória local do leitor.
 * @param segredoId - O ID único da arma, personagem ou lore (ex: 'caleb_origin')
 * @returns boolean indicando se o desbloqueio foi inédito ou não
 */
export function desbloquearSegredo(segredoId: string): boolean {
  if (!segredoId) return false;

  const segredosDesbloqueados = obterProgresso();

  // Se o leitor já desbloqueou esse item antes, não faz nada
  if (segredosDesbloqueados.includes(segredoId)) {
    console.log(`ℹ️ O segredo [${segredoId}] já havia sido descoberto por este leitor.`);
    return false;
  }

  // Adiciona o novo ID à lista individual do leitor
  segredosDesbloqueados.push(segredoId);

  // Salva de volta no localStorage do navegador dele
  localStorage.setItem(STORAGE_KEY, JSON.stringify(segredosDesbloqueados));
  console.log(`🔓 [DESBLOQUEADO] Novo segredo registrado para este leitor: ${segredoId}`);

  // DISPARO DO EVENTO GLOBAL: Mantém compatibilidade com scripts legados (se houverem)
  const evento = new CustomEvent("segredoDesbloqueado", { detail: { id: segredoId } });
  window.dispatchEvent(evento);

  return true;
}

/**
 * Checa se o leitor atual já desbloqueou um item específico.
 * @param segredoId 
 */
export function verificarSegredoDesbloqueado(segredoId: string): boolean {
  if (!segredoId) return false;
  const segredosDesbloqueados = obterProgresso();
  return segredosDesbloqueados.includes(segredoId);
}

/**
 * Reseta todo o progresso do usuário.
 */
export function limparMeuProgresso(): void {
  localStorage.removeItem(STORAGE_KEY);
  console.log("🧹 Seu progresso individual foi resetado. Tudo voltou a ficar trancado!");
  window.location.reload();
}