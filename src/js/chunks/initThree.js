import * as THREE from 'three';

const initThree = {
	sceneSettings: function () {
		this.scene = new THREE.Scene();
	},

	cameraSettings: function () {
		this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		this.camera.position.x = -5;
		this.camera.position.y = 5;
		this.camera.position.z = 5;
		this.camera.lookAt(new THREE.Vector3(0, 0, 0));

		this.scene.add(this.camera);
	},

	lightSettings: function () {
		this.firstLight = new THREE.PointLight(0xffffff, 1, 100);
		this.firstLight.position.set(-15, 10, -15);

		this.scene.add(this.firstLight);

		this.secondLight = new THREE.PointLight(0xffffff, 1, 100);
		this.secondLight.position.set(-15, 10, 15);

		this.scene.add(this.secondLight);

		this.thirdLight = new THREE.PointLight(0xffffff, 1, 100);
		this.thirdLight.position.set(15, 10, -15);

		this.scene.add(this.thirdLight);

		this.fourthLight = new THREE.PointLight(0xffffff, 1, 100);
		this.fourthLight.position.set(15, 10, 15);

		this.scene.add(this.fourthLight);
	},

	characterSettings: function () {
		const geometry = new THREE.BoxGeometry(1, 1, 1);
		const material = new THREE.MeshStandardMaterial({ color: 0xf4f4f4 });
		this.box = new THREE.Mesh(geometry, material);
		this.box.position.y = 0.5;

		this.scene.add(this.box);
	},

	groundSettings: function () {
		const geometry = new THREE.PlaneGeometry(10000, 10000);
		const material = new THREE.MeshStandardMaterial({ color: 0x9e0b0b });
		this.ground = new THREE.Mesh(geometry, material);
		this.ground.position.set(0, 0, 0);
		this.ground.rotation.x = -Math.PI / 2;

		this.scene.add(this.ground);
	},

	rendererSettings: function () {
		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setSize(window.innerWidth, window.innerHeight);

		document.body.appendChild(this.renderer.domElement);
	},

	rotationAroundYAxes: function () {
		let angle = 0.785398 * 1000;

		const trackMovement = (e) => {
			if (e.buttons === 1) {
				angle += e.movementX;
				const slowedMovement = angle * 0.001;

				const newXCameraPosition = Math.sqrt(50) * Math.cos(slowedMovement);
				const newZCameraPosition = Math.sqrt(50) * Math.sin(slowedMovement);

				this.camera.position.x = newXCameraPosition;
				this.camera.position.z = newZCameraPosition;
				this.camera.lookAt(new THREE.Vector3(0, 0, 0));
			}
		};

		document.addEventListener('mousemove', trackMovement);
	},

	init: function () {
		this.sceneSettings();
		this.cameraSettings();
		this.lightSettings();
		this.characterSettings();
		this.groundSettings();
		this.rendererSettings();
		this.rotationAroundYAxes();

		function animate() {
			requestAnimationFrame(animate);
			initThree.renderer.render(initThree.scene, initThree.camera);
		}
		animate();
	},
};

export default initThree;
