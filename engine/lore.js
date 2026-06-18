// ===============================
// 📜 LORE SYSTEM (ENGINE CORE)
// ===============================

const lore = {

  // ===============================
  // 🔥 CALEB ORIGIN
  // ===============================
  unlockCalebOrigin() {

    const caleb = universe.state.characters?.caleb;

    if (!caleb || caleb.origin) return;

    caleb.origin = true;
    universe.state.lore.globalFragments++;

    Storage.save();

    // 🔥 evento global padronizado
    universe.trigger?.("lore_event", {
      type: "caleb_origin_unlocked",
      character: "caleb",
      data: caleb
    });

    universe.trigger?.("caleb_origin_unlocked", caleb);
  },

  // ===============================
  // 👤 CHECK
  // ===============================
  isCalebOriginUnlocked() {
    return !!universe.state.characters?.caleb?.origin;
  },

  // ===============================
  // 🧬 UNLOCK GENÉRICO
  // ===============================
  unlockCharacter(id, customName = null) {

    const char = universe.state.characters?.[id];

    if (!char || char.unlocked) return;

    char.unlocked = true;

    if (customName) {
      char.name = customName;
      char.nome = customName;
    }

    Storage.save();

    // 🔥 evento unificado
    universe.trigger?.("lore_event", {
      type: "character_unlocked",
      character: id,
      data: char
    });

    universe.trigger?.("character_unlocked", {
      id,
      char
    });
  }
};
