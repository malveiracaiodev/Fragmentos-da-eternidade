/*
========================================
FRAGMENTOS DA ETERNIDADE
MAIN.JS - MARK I
========================================
*/


// Mensagem de inicialização

console.log("Fragmentos da Eternidade iniciado");


/*
----------------------------------------
VERIFICA SE A PÁGINA CARREGOU
----------------------------------------
*/

document.addEventListener("DOMContentLoaded", () => {

    console.log("Página carregada com sucesso");

        carregarUltimoCapitulo();

        });


        /*
        ----------------------------------------
        CARREGA O ÚLTIMO CAPÍTULO
        ----------------------------------------
        */

        async function carregarUltimoCapitulo(){

            try{

                    const resposta = await fetch("data/capitulos.json");

                            const capitulos = await resposta.json();

                                    const ultimoCapitulo =
                                            capitulos[capitulos.length - 1];

                                                    const container =
                                                            document.getElementById("ultimo-capitulo");

                                                                    if(!container) return;

                                                                            container.innerHTML = `

                                                                                        <div class="card">

                                                                                                        <h2>
                                                                                                                            📖 ${ultimoCapitulo.titulo}
                                                                                                                                            </h2>

                                                                                                                                                            <p>
                                                                                                                                                                                ${ultimoCapitulo.descricao}
                                                                                                                                                                                                </p>

                                                                                                                                                                                                                <a
                                                                                                                                                                                                                                    href="capitulos/${ultimoCapitulo.arquivo}"
                                                                                                                                                                                                                                                        class="btn">

                                                                                                                                                                                                                                                                            Ler Capítulo

                                                                                                                                                                                                                                                                                            </a>

                                                                                                                                                                                                                                                                                                        </div>

                                                                                                                                                                                                                                                                                                                `;

                                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                                        catch(erro){

                                                                                                                                                                                                                                                                                                                                console.error(
                                                                                                                                                                                                                                                                                                                                            "Erro ao carregar capítulos:",
                                                                                                                                                                                                                                                                                                                                                        erro
                                                                                                                                                                                                                                                                                                                                                                );

                                                                                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                                                                                    }