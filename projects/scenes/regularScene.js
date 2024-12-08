import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.155.0/build/three.module.js';

export function regularScene(scene) {
    console.log('Regular Show Scene Loaded');

    // Grass plane (park ground)
    const grassGeometry = new THREE.PlaneGeometry(100, 100);
    const grassMaterial = new THREE.MeshStandardMaterial({ color: 0x228b22 });
    const grass = new THREE.Mesh(grassGeometry, grassMaterial);
    grass.rotation.x = -Math.PI / 2;
    scene.add(grass);

    // Trees
    for (let i = -20; i <= 20; i += 10) {
        const trunkGeometry = new THREE.CylinderGeometry(1, 1, 5, 16);
        const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
        const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
        trunk.position.set(i, 2.5, -10);
        scene.add(trunk);

        const leavesGeometry = new THREE.SphereGeometry(3, 16, 16);
        const leavesMaterial = new THREE.MeshStandardMaterial({ color: 0x228b22 });
        const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial);
        leaves.position.set(i, 7.5, -10);
        scene.add(leaves);
    }

    // Bench
    const benchGeometry = new THREE.BoxGeometry(5, 1, 2);
    const benchMaterial = new THREE.MeshStandardMaterial({ color: 0x654321 });
    const bench = new THREE.Mesh(benchGeometry, benchMaterial);
    bench.position.set(0, 0.5, -5);
    scene.add(bench);

    // Add warm sunlight
    const sunlight = new THREE.DirectionalLight(0xffe4b5, 1);
    sunlight.position.set(10, 10, 10);
    scene.add(sunlight);
}
