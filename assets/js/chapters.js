document.addEventListener(
    "DOMContentLoaded",
    carregarCapitulos
    );


    async function carregarCapitulos(){

        const resposta =
            await fetch("../data/capitulos.json");

                const capitulos =
                    await resposta.json();

                        const lista =
                            document.getElementById(
                                "lista-capitulos"
                                    );

                                        capitulos.forEach(capitulo => {

                                                lista.innerHTML += `

                                                        <div class="card">

                                                                    <a href="${capitulo.arquivo}">

                                                                                    ${capitulo.titulo}

                                                                                                </a>

                                                                                                        </div>

                                                                                                                `;

                                                                                                                    });

                                                                                                                    }
)