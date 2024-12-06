import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.155.0/build/three.module.js';

export function bikiniScene(scene) {
    // Water plane
    const waterGeometry = new THREE.PlaneGeometry(100, 100);
    const waterMaterial = new THREE.MeshStandardMaterial({
        color: 0x00aaff,
        transparent: true,
        opacity: 0.7,
    });
    const water = new THREE.Mesh(waterGeometry, waterMaterial);
    water.rotation.x = -Math.PI / 2;
    scene.add(water);

    // Add iconic Bikini Bottom objects (like SpongeBob's house)
    const pineappleGeometry = new THREE.CylinderGeometry(2, 2, 5, 32);
    const pineappleMaterial = new THREE.MeshStandardMaterial({ color: 0xffa500 });
    const pineapple = new THREE.Mesh(pineappleGeometry, pineappleMaterial);
    pineapple.position.set(0, 2.5, -10);
    scene.add(pineapple);
}
