// ===============================
// 📜 LORE SYSTEM (ENGINE CORE)
// ===============================

const Lore = {

  // ===============================
  // 🔥 CALIBRAÇÃO DO CALEB
  // ===============================
  unlockCalebOrigin() {

    const caleb = Universe.state.characters.caleb;

    if (!caleb || caleb.origin) return;

    caleb.origin = true;
    Universe.state.lore.globalFragments++;

    Storage.save();

    // 🔥 EVENTO GLOBAL (para UI, 3D, etc)
    Universe.trigger?.("caleb_origin_unlocked", caleb);
  },

  // ===============================
  // 👤 CHECK CALEB
  // ===============================
  isCalebOriginUnlocked() {
    return !!Universe.state.characters.caleb?.origin;
  },

  // ===============================
  // 🧬 DESBLOQUEIO GENÉRICO
  // ===============================
  unlockCharacter(id, customName = null) {

    const char = Universe.state.characters[id];

    if (!char) return;

    if (char.unlocked) return;

    char.unlocked = true;

    if (customName) {
      char.name = customName;
      char.nome = customName; // compatibilidade com seu JSON antigo
    }

    Storage.save();

    // 🔥 evento global
    Universe.trigger?.("character_unlocked", { id, char });
  }
};
