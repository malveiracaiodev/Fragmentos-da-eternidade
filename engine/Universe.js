// ===============================
// 🌌 UNIVERSE ENGINE - CORE (v1.2)
// ===============================

// ===============================
// 🌌 DEFAULT STATE
// ===============================
const defaultState = {
  characters: {
    caleb: {
      unlocked: true,
      origin: false,
      logs: 0,
      name: "Caleb"
    },
    nyx: {
      unlocked: false,
      origin: false,
      logs: 0,
      name: "???"
    },
    orion: {
      unlocked: false,
      origin: false,
      logs: 0,
      name: "???"
    }
  },

  lore: {
    globalFragments: 0
  }
};

// ===============================
// 🌌 ENGINE CORE
// ===============================
const Universe = {
  version: "1.2",

  state: structuredClone(defaultState),

  listeners: {},

  // ===============================
  // 🔥 EVENT SYSTEM
  // ===============================
  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  },

  trigger(event, data) {
    const list = this.listeners[event];
    if (!list) return;
    list.forEach(cb => cb(data));
  },

  // ===============================
  // 🚀 READY EVENT (NOVO)
  // ===============================
  ready: false,

  init() {
    this.ready = true;
    this.trigger("universe_ready", this.state);
    console.log("🌌 Universe Ready");
  }
};

// ===============================
// 💾 STORAGE SYSTEM
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

    if (!data) return;

    try {
      const parsed = JSON.parse(data);

      Universe.state = {
        ...structuredClone(defaultState),
        ...parsed,
        characters: {
          ...defaultState.characters,
          ...(parsed.characters || {})
        },
        lore: {
          ...defaultState.lore,
          ...(parsed.lore || {})
        }
      };

    } catch (e) {
      console.warn("Erro ao carregar save, resetando universo");
      Universe.state = structuredClone(defaultState);
    }
  },

  reset() {
    localStorage.removeItem("fragmentos_universe");
    location.reload();
  }
};

// ===============================
// 🚀 INIT BOOT SEQUENCE
// ===============================
Storage.load();

// garante inicialização segura
document.addEventListener("DOMContentLoaded", () => {
  Universe.init();
});
