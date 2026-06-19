// ===============================
// 📜 LORE SYSTEM (ENGINE CORE FIXED)
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

    storage.save();

    universe.trigger("lore_event", {
      type: "caleb_origin_unlocked",
      character: "caleb",
      data: caleb
    });

    universe.trigger("caleb_origin_unlocked", caleb);
  },

  // ===============================
  // 👤 CHECK
  // ===============================
  isCalebOriginUnlocked() {
    return Boolean(universe.state.characters?.caleb?.origin);
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
    }

    storage.save();

    universe.trigger("lore_event", {
      type: "character_unlocked",
      character: id,
      data: char
    });

    universe.trigger("character_unlocked", {
      id,
      char
    });
  }
};

// ===============================
// 🌐 GLOBAL EXPORT (CRÍTICO)
// ===============================
window.lore = lore;
