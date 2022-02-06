const scene = new THREE.Scene();

// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 'red' });
const mesh = new THREE.Mesh(geometry, material);

// Add to scene
scene.add(mesh);

// Add camera (otherwise you can't see anything)
const sizes = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

// Move camera backwards
camera.position.z = 3;
camera.position.x = 1;
camera.position.y = 1;

scene.add(camera);

// Renderer (renders the scene into a canvas)
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
