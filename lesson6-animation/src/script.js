import './style.css';
import * as THREE from 'three';
import gsap from 'gsap';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

// method 1, use time delta
// let time = Date.now();

// // Animation
// const tick = () => {
//   // Time
//   const currTime = Date.now();
//   const deltaTime = currTime - time;
//   time = currTime;

//   // console.log(deltaTime);

//   // update objects
//   mesh.rotation.y += 0.001 * deltaTime;

//   // rerender
//   renderer.render(scene, camera);

//   window.requestAnimationFrame(tick);
// };

// Method 2, Clock
// const clock = new THREE.Clock();

// // Animation
// const tick = () => {
//   const elapsedTime = clock.getElapsedTime();

//   // mesh.rotation.y = elapsedTime * Math.PI * 2;
//   camera.position.y = Math.sin(elapsedTime);
//   camera.position.x = Math.cos(elapsedTime);
//   camera.lookAt(mesh.position);

//   // rerender
//   renderer.render(scene, camera);

//   window.requestAnimationFrame(tick);
// };

// Libraries like GSAP
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 });

// Animation
const tick = () => {
  // rerender is still needed
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick();