var canvas, camera, scene, group, renderer;
var mouseX = 0,
  mouseY = 0;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

function init() {
  canvas = document.getElementById("webglcanvas");
  camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    1,
    2000
  );
  camera.position.z = 500;
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);
  group = new THREE.Group();
  scene.add(group);
  var loader = new THREE.TextureLoader();
  loader.load("../images/earth.jpg", function(texture) {
    var geometry = new THREE.SphereGeometry(200, 20, 20);
    var material = new THREE.MeshBasicMaterial({ map: texture });
    var mesh = new THREE.Mesh(geometry, material);
    group.add(mesh);
  });
  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.addEventListener("mousemove", onDocumentMouseMove, false);
}
function animate() {
  requestAnimationFrame(animate);
  render();
}
function render() {
  camera.position.x += (mouseX - camera.position.x) * 0.05;
  camera.position.y += (-mouseY - camera.position.y) * 0.05;
  camera.lookAt(scene.position);
  group.rotation.y -= 0.005;
  renderer.render(scene, camera);
}
function onDocumentMouseMove(event) {
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
}

init();
animate();
