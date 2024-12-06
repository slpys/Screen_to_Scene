import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.155.0/build/three.module.js';

export function gumballScene(scene) {
    console.log('Gumball Scene Loaded');

    // Floor (school hallway)
    const floorGeometry = new THREE.PlaneGeometry(100, 100);
    const floorMaterial = new THREE.MeshStandardMaterial({ color: 0xcccccc });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    scene.add(floor);

    // Lockers
    for (let i = -10; i <= 10; i += 5) {
        const lockerGeometry = new THREE.BoxGeometry(2, 5, 1);
        const lockerMaterial = new THREE.MeshStandardMaterial({ color: 0x6699cc });
        const locker = new THREE.Mesh(lockerGeometry, lockerMaterial);
        locker.position.set(i, 2.5, -5);
        scene.add(locker);
    }

    // Chalkboard
    const boardGeometry = new THREE.BoxGeometry(10, 5, 0.5);
    const boardMaterial = new THREE.MeshStandardMaterial({ color: 0x006600 });
    const chalkboard = new THREE.Mesh(boardGeometry, boardMaterial);
    chalkboard.position.set(0, 2.5, -15);
    scene.add(chalkboard);

    // Add fun lights to make the scene colorful
    const pointLight = new THREE.PointLight(0xff69b4, 1, 50);
    pointLight.position.set(0, 5, 0);
    scene.add(pointLight);
}
