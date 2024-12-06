import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.155.0/build/three.module.js';

export function courageScene(scene) {
    // Desert plane
    const desertGeometry = new THREE.PlaneGeometry(100, 100);
    const desertMaterial = new THREE.MeshStandardMaterial({ color: 0xffd580 });
    const desert = new THREE.Mesh(desertGeometry, desertMaterial);
    desert.rotation.x = -Math.PI / 2;
    scene.add(desert);

    // Courage's house
    const houseGeometry = new THREE.BoxGeometry(3, 3, 3);
    const houseMaterial = new THREE.MeshStandardMaterial({ color: 0x8b0000 });
    const house = new THREE.Mesh(houseGeometry, houseMaterial);
    house.position.set(0, 1.5, -10);
    scene.add(house);

    // Add more elements to enhance the spooky desert vibe
}
