document.addEventListener("DOMContentLoaded", carregarCapitulos);

async function carregarCapitulos() {
    try {
        const resposta = await fetch("../data/capitulos.json");
        const capitulos = await resposta.json();
        const lista = document.getElementById("lista-capitulos");
        
        lista.innerHTML = ""; 

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

async function carregarConteudoCapitulo(caminhoArquivo) {
    try {
        const containerDestino = document.getElementById("conteudo-dinamico-capitulo");
        containerDestino.innerHTML = `<div class="card-inner-border"><p style="text-align:center; color:#66fcf1;">Carregando fragmento da história...</p></div>`;

        const resposta = await fetch(caminhoArquivo);
        const htmlDoCapitulo = await resposta.text();

        containerDestino.innerHTML = htmlDoCapitulo;

        const sidebar = document.getElementById('sidebar-capitulos');
        if (sidebar && sidebar.classList.contains('active')) {
            toggleSidebarMobile();
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (erro) {
        console.error("Erro ao injetar o conteúdo do capítulo:", erro);
        document.getElementById("conteudo-dinamico-capitulo").innerHTML = `
            <div class="card-inner-border">
                <p style="color: #ff4545;">Não foi possível carregar este fragmento de memória. Verifique o caminho do arquivo.</p>
            </div>`;
    }
}
