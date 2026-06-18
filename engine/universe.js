// ===============================
// 🌌 UNIVERSE ENGINE - CORE
// ===============================

// Estado global do universo
const Universe = {
  version: "1.0",

    state: {
        characters: {
              caleb: {
                      unlocked: true,
                              origin: false,
                                      logs: 0
                                            }
                                                },

                                                    lore: {
                                                          globalFragments: 0
                                                              }
                                                                }
                                                                };

                                                                // ===============================
                                                                // 💾 STORAGE (salvar progresso)
                                                                // ===============================
                                                                const Storage = {
                                                                  save() {
                                                                      localStorage.setItem(
                                                                            "fragmentos_universe",
                                                                                  JSON.stringify(Universe.state)
                                                                                      );
                                                                                        },

                                                                                          load() {
                                                                                              const data = localStorage.getItem("fragmentos_universe");
                                                                                                  if (data) {
                                                                                                        Universe.state = JSON.parse(data);
                                                                                                            }
                                                                                                              },

                                                                                                                reset() {
                                                                                                                    localStorage.removeItem("fragmentos_universe");
                                                                                                                        location.reload();
                                                                                                                          }
                                                                                                                          };

                                                                                                                          // carregar automaticamente ao iniciar
                                                                                                                          Storage.load();