// ===============================
// 📜 LORE SYSTEM (ENGINE CORE)
// ===============================

const Lore = {

  // ===============================
  // 🔥 CALEB ORIGIN
  // ===============================
  unlockCalebOrigin() {

    const caleb = Universe.state.characters?.caleb;

    if (!caleb || caleb.origin) return;

    caleb.origin = true;
    Universe.state.lore.globalFragments++;

    Storage.save();

    // 🔥 evento global padronizado
    Universe.trigger?.("lore_event", {
      type: "caleb_origin_unlocked",
      character: "caleb",
      data: caleb
    });

    Universe.trigger?.("caleb_origin_unlocked", caleb);
  },

  // ===============================
  // 👤 CHECK
  // ===============================
  isCalebOriginUnlocked() {
    return !!Universe.state.characters?.caleb?.origin;
  },

  // ===============================
  // 🧬 UNLOCK GENÉRICO
  // ===============================
  unlockCharacter(id, customName = null) {

    const char = Universe.state.characters?.[id];

    if (!char || char.unlocked) return;

    char.unlocked = true;

    if (customName) {
      char.name = customName;
      char.nome = customName;
    }

    Storage.save();

    // 🔥 evento unificado
    Universe.trigger?.("lore_event", {
      type: "character_unlocked",
      character: id,
      data: char
    });

    Universe.trigger?.("character_unlocked", {
      id,
      char
    });
  }
};
