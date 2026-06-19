/* ===============================
   🌌 DEFAULT STATE
=============================== */
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
  },

  version: "1.2-fixed"
};

/* ===============================
   🌌 ENGINE CORE
=============================== */
const universe = {
  version: "1.2-fixed",

  state: structuredClone(defaultState),

  listeners: {},

  ready: false,

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

  init() {
    this.ready = true;
    this.trigger("universe_ready", this.state);
    console.log("🌌 Universe Ready");
  }
};

/* ===============================
   💾 STORAGE SYSTEM
=============================== */
const storage = {
  save() {
    try {
      localStorage.setItem(
        "fragmentos_universe",
        JSON.stringify(universe.state)
      );
    } catch (e) {
      console.warn("Erro ao salvar universo:", e);
    }
  },

  load() {
    const data = localStorage.getItem("fragmentos_universe");

    if (!data) return;

    try {
      const parsed = JSON.parse(data);

      universe.state = {
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

      console.log("💾 Universe carregado do storage");

    } catch (e) {
      console.warn("Erro ao carregar save, resetando universo");
      universe.state = structuredClone(defaultState);
    }
  },

  reset() {
    localStorage.removeItem("fragmentos_universe");
    location.reload();
  }
};

/* ===============================
   🌐 GLOBAL EXPORT (CRÍTICO)
=============================== */
window.universe = universe;
window.storage = storage;

/* ===============================
   🚀 BOOT SEQUENCE (CORRETO)
=============================== */
window.addEventListener("DOMContentLoaded", () => {

  storage.load();

  universe.init();

  console.log("✨ Universo inicializado com segurança");
});
