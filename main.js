import * as THREE from "three";

// Scene
const scene = new THREE.Scene();

// Add a cube to the scene

const verticalGeometry = new THREE.BoxGeometry(1, 3, 1);
const horizontalGeometry = new THREE.BoxGeometry(3, 1, 1);


const material = new THREE.MeshPhongMaterial({ color: 0xff1b96 });
const verticalMesh = new THREE.Mesh(verticalGeometry, material);
const horizontalMesh = new THREE.Mesh(horizontalGeometry, material);

horizontalMesh.position.y = 2;

verticalMesh.position.set(0, 0, 0);

scene.add(verticalMesh);
scene.add(horizontalMesh);

// Set up lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
directionalLight.position.set(10, 20, 0); // x, y, z
scene.add(directionalLight);

// Camera
const width = 10;
const height = width * (window.innerHeight / window.innerWidth);
const camera = new THREE.OrthographicCamera(
  width / -2, // left
  width / 2, // right
  height / 2, // top
  height / -2, // bottom
  1, // near
  100 // far
);

camera.position.set(4, 4, 4);
camera.lookAt(0, 0, 0);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

// Add it to HTML
document.body.appendChild(renderer.domElement);