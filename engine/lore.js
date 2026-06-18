// ===============================
// 📜 LORE SYSTEM
// ===============================

const Lore = {

  unlockCalebOrigin() {
      Universe.state.characters.caleb.origin = true;
          Universe.state.lore.globalFragments += 1;

              Storage.save();
                },

                  isCalebOriginUnlocked() {
                      return Universe.state.characters.caleb.origin;
                        }

                        };
                        // desbloqueavel //
                        function unlockCharacter(id, name) {
                            if (!Universe.state.characters[id]) return;

                              Universe.state.characters[id].unlocked = true;
                                Universe.state.characters[id].name = name;

                                  Storage.save();
                                  }
                        