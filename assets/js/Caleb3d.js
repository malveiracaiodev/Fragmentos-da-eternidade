// ===============================
// 🌌 SCENE SETUP
// ===============================
const scene = new THREE.Scene();

// CAMERA
const camera = new THREE.PerspectiveCamera(
  75,
  320 / 420,
  0.1,
  1000
);
camera.position.z = 3;

// RENDERER
const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true
});

renderer.setSize(320, 420);

document
  .getElementById("canvas-container")
  .appendChild(renderer.domElement);

// ===============================
// 💡 LIGHTS
// ===============================
const light = new THREE.PointLight(0x00aaff, 2);
light.position.set(2, 2, 2);
scene.add(light);

const ambient = new THREE.AmbientLight(0x003344, 1);
scene.add(ambient);

// ===============================
// 🧍 CALEB MODEL
// ===============================
const geometry = new THREE.CapsuleGeometry(0.5, 1.2, 8, 16);

const material = new THREE.MeshStandardMaterial({
  color: 0x111111,
  emissive: 0x00aaff,
  emissiveIntensity: 0.4,
  metalness: 0.5,
  roughness: 0.3
});

const caleb = new THREE.Mesh(geometry, material);
scene.add(caleb);

// ===============================
// ✨ PARTICLES
// ===============================
const particlesGeometry = new THREE.BufferGeometry();
const count = 100;

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

const particles = new THREE.Points(
  particlesGeometry,
  particlesMaterial
);

scene.add(particles);

// ===============================
// 🖱️ MOUSE CONTROL
// ===============================
let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (event) => {
  mouseX = (event.clientX / window.innerWidth) - 0.5;
  mouseY = (event.clientY / window.innerHeight) -
