const grid = document.getElementById("grid");

function createCard(id, data) {

  const card = document.createElement("a");
    card.className = "card";

      if (data.unlocked) {
          card.href = `characters/${id}.html`;
            } else {
                card.classList.add("locked");
                  }

                    card.innerHTML = `
                        <h2>${data.name}</h2>
                            <p>${data.unlocked ? "Entidade ativa" : "Bloqueado"}</p>
                              `;

                                return card;
                                }

                                function render() {

                                  const chars = Universe.state.characters;

                                    for (let id in chars) {
                                        grid.appendChild(createCard(id, chars[id]));
                                          }
                                          }

                                          render();