document.addEventListener("DOMContentLoaded", carregarCapitulos);

async function carregarCapitulos() {
    try {
        // Busca a lista de capítulos no seu arquivo JSON
        const resposta = await fetch("../data/capitulos.json");
        const capitulos = await resposta.json();
        
        const lista = document.getElementById("lista-capitulos");
        
        // Limpa o fallback estático antes de gerar a lista do JSON
        lista.innerHTML = ""; 

        // Cria a lista de links no menu lateral
        capitulos.forEach(capitulo => {
            lista.innerHTML += `
                <div class="capitulo-item">
                    <a href="#" onclick="carregarConteudoCapitulo('${capitulo.arquivo}'); return false;">
                        ${capitulo.titulo}
                    </a>
                </div>
            `;
        });
    } catch (erro) {
        console.error("Erro ao carregar a lista de capítulos:", erro);
    }
}

// Função mágica que busca o HTML do capítulo e joga na tela
async function carregarConteudoCapitulo(caminhoArquivo) {
    try {
        // Encontra a div principal onde o texto deve aparecer
        const containerDestino = document.getElementById("conteudo-dinamico-capitulo");
        
        // Adiciona um efeito visual de carregamento rápido
        containerDestino.innerHTML = `<div class="card-inner-border"><p style="text-align:center; color:#66fcf1;">Carregando fragmento da história...</p></div>`;

        // Faz o fetch do arquivo HTML do capítulo (Ex: capitulo1/capitulo1.html)
        const resposta = await fetch(caminhoArquivo);
        const htmlDoCapitulo = await resposta.text();

        // Injeta o conteúdo estruturado direto no miolo da página
        containerDestino.innerHTML = htmlDoCapitulo;

        // Se o leitor estiver no celular, fecha a barra lateral automaticamente ao clicar
        const sidebar = document.getElementById('sidebar-capitulos');
        if (sidebar && sidebar.classList.contains('active')) {
            toggleSidebarMobile();
        }

        // Joga a página de volta para o topo suavemente para o leitor começar do início
        window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (erro) {
        console.error("Erro ao injetar o conteúdo do capítulo:", erro);
        document.getElementById("conteudo-dinamico-capitulo").innerHTML = `
            <div class="card-inner-border">
                <p style="color: #ff4545;">Não foi possível sintonizar este fragmento de memória. Verifique a rota do arquivo.</p>
            </div>`;
    }
}
