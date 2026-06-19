const Lore = {

  data: JSON.parse(localStorage.getItem("lore") || "{}"),

  save() {
    localStorage.setItem("lore", JSON.stringify(this.data));
  },

  unlock(id) {
    if (this.data[id]) return;

    this.data[id] = true;
    this.save();

    this.popup(id);
  },

  popup(id) {
    const el = document.createElement("div");

    el.className = "lore-popup";
    el.innerText = "📜 Lore adicionada: " + id;

    document.body.appendChild(el);

    setTimeout(() => el.remove(), 3000);
  }
};

// CLICK GLOBAL
document.addEventListener("click", (e) => {

  const el = e.target;

  if (!el.classList.contains("lore")) return;

  const id = el.dataset.lore;
  const open = el.dataset.open;

  Lore.unlock(id);

  if (open) {
    setTimeout(() => {
      window.open(open, "_blank");
    }, 500);
  }

});
