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