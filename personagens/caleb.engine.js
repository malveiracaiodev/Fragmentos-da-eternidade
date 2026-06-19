// =======================================
// 🌌 CALEB VIVO ENGINE (UNIFICADO)
// =======================================

let scene, camera, renderer;
let caleb, material, particles, light;

const CalebState = {
  level: 0 // 0 = dormindo, 1 = ativo, 2 = despertando, 3 = evoluído
};

// =======================================
// 🚀 INIT
// =======================================
function initCaleb() {

  const container = document.getElementById("canvas-container");

  if (!container) {
    console.warn("Canvas container não encontrado");
    return;
  }

  // ===============================
  // 🌌 SCENE
  // ===============================
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    320 / 420,
    0.1,
    1000
  );

  camera.position.z = 3;

  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  });

  renderer.setSize(320, 420);
  container.appendChild(renderer.domElement);

  // ===============================
  // 💡 LIGHTS
  // ===============================
  light = new THREE.PointLight(0x00aaff, 1.5);
  light.position.set(2, 2, 2);
  scene.add(light);

  scene.add(new THREE.AmbientLight(0x003344, 1));

  // ===============================
  // 🧍 CALEB
  // ===============================
  const geometry = new THREE.CapsuleGeometry(0.5, 1.2, 8, 16);

  material = new THREE.MeshStandardMaterial({
    color: 0x111111,
    emissive: 0x00aaff,
    emissiveIntensity: 0.25,
    metalness: 0.5,
    roughness: 0.3
  });

  caleb = new THREE.Mesh(geometry, material);
  scene.add(caleb);

  // ===============================
  // ✨ PARTICLES
  // ===============================
  const particlesGeometry = new THREE.BufferGeometry();
  const count = 120;

  const positions = [];

  for (let i = 0; i < count; i++) {
    positions.push(
      (Math.random() - 0.5) * 4,
      (Math.random() - 0.5) * 4,
      (Math.random() - 0.5) * 4
    );
  }

  particlesGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
  );

  const particlesMaterial = new THREE.PointsMaterial({
    color: 0x00aaff,
    size: 0.03
  });

  particles = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particles);

  // ===============================
  // 🧠 EVENTS LORE (OPCIONAL)
  // ===============================
  if (window.universe?.on) {
    universe.on("caleb_origin_unlocked", () => {
      evolveCaleb(2);
    });

    universe.on("universe_ready", () => {
      evolveCaleb(0);
    });
  }

  animate();
}

// =======================================
// 🌌 EVOLUÇÃO VISUAL
// =======================================
function evolveCaleb(level) {

  CalebState.level = level;

  switch (level) {

    case 0:
      material.emissiveIntensity = 0.2;
      particles.material.size = 0.02;
      break;

    case 1:
      material.emissiveIntensity = 0.5;
      particles.material.size = 0.03;
      break;

    case 2:
      material.emissiveIntensity = 0.9;
      particles.material.size = 0.05;
      break;

    case 3:
      material.emissiveIntensity = 1.3;
      particles.material.size = 0.08;
      break;
  }
}

// =======================================
// 🌀 MOUSE STATE
// =======================================
let targetX = 0;
let targetY = 0;

document.addEventListener("mousemove", (e) => {
  targetX = (e.clientX / window.innerWidth) - 0.5;
  targetY = (e.clientY / window.innerHeight) - 0.5;
});

// =======================================
// 🌌 ANIMAÇÃO VIVA
// =======================================
function animate() {

  requestAnimationFrame(animate);

  const t = performance.now() * 0.001;

  if (caleb) {

    // RESPIRAÇÃO
    caleb.scale.y = 1 + Math.sin(t * 2) * 0.03;
    caleb.scale.x = 1 + Math.sin(t * 2) * 0.01;

    // ROTAÇÃO VIVA
    caleb.rotation.y = Math.sin(t * 0.6) * (0.3 + CalebState.level * 0.1);
    caleb.rotation.x = Math.cos(t * 0.4) * 0.1;

  }

  if (particles) {
    particles.rotation.y += 0.001 + CalebState.level * 0.001;
  }

  if (light) {
    light.intensity = 1.3 + Math.sin(t * 3) * 0.4;
  }

  if (camera) {
    camera.position.x += (targetX * 1.2 - camera.position.x) * 0.05;
    camera.position.y += (-targetY * 1.2 - camera.position.y) * 0.05;
  }

  if (renderer && scene && camera) {
    renderer.render(scene, camera);
  }
}

// =======================================
// 🚀 BOOT
// =======================================
document.addEventListener("DOMContentLoaded", initCaleb);
