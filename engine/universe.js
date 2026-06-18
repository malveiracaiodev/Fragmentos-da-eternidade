// ===============================
// 🌌 UNIVERSE ENGINE - CORE (v1.1)
// ===============================

// ===============================
// 🌌 CORE STATE (DEFAULT)
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
// 🌌 UNIVERSE ENGINE
// ===============================
const Universe = {
  version: "1.1",

  state: structuredClone(defaultState),

  // ===============================
  // 🔥 EVENT SYSTEM
  // ===============================
  listeners: {},

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

    if (data) {
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
    }
  },

  reset() {
    localStorage.removeItem("fragmentos_universe");
    location.reload();
  }
};

// ===============================
// 🚀 INIT
// ===============================
Storage.load();