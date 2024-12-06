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

    // Add pineapple's door
    const doorGeometry = new THREE.BoxGeometry(0.8, 1.5, 0.1);
    const doorMaterial = new THREE.MeshStandardMaterial({ color: 0x654321 }); // Brown
    const door = new THREE.Mesh(doorGeometry, doorMaterial);
    door.position.set(0, 0.75, -7.95); // Slightly in front of the pineapple
    scene.add(door);

    // Patrick's Rock (Semi-Circle)
    const rockGeometry = new THREE.SphereGeometry(2, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2); // Half-sphere
    const rockMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 }); // Dark brown
    const rock = new THREE.Mesh(rockGeometry, rockMaterial);
    //rock.rotation.x = Math.PI; // Flip it to sit flat
    rock.position.set(5, 0.01, -10); // Adjust to sit flush with the ground
    scene.add(rock);

    const stoneGeometry = new THREE.BoxGeometry(3, 5, 3);
    const stoneMaterial = new THREE.MeshStandardMaterial({ color: 0x2f4f4f }); // Gray-blue
    const stoneHead = new THREE.Mesh(stoneGeometry, stoneMaterial);
    stoneHead.position.set(-5, 2.5, -10);
    scene.add(stoneHead);
}
