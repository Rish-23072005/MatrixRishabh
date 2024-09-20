// // Create a scene
// const scene = new THREE.Scene();

// // Create a camera
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 2.5; // Set the distance of the camera from the globe

// // Create a renderer
// const renderer = new THREE.WebGLRenderer({ alpha: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.getElementById('globe-container').appendChild(renderer.domElement);

// // Create a sphere (the globe)
// const globeGeometry = new THREE.SphereGeometry(1, 32, 32);
// const globeMaterial = new THREE.MeshBasicMaterial({
//     map: new THREE.TextureLoader().load('https://cdn.jsdelivr.net/gh/riccardoscalco/textures@master/globe/earthmap.jpg'),
//     wireframe: false
// });
// const globe = new THREE.Mesh(globeGeometry, globeMaterial);
// scene.add(globe);

// // Animation loop to rotate the globe
// function animate() {
//     requestAnimationFrame(animate);
//     globe.rotation.y += 0.002; // Rotate the globe continuously
//     renderer.render(scene, camera);
// }

// // Handle window resizing
// window.addEventListener('resize', function () {
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
// });

// // Start the animation
// animate();
