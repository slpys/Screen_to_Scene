import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.155.0/build/three.module.js';

export function bikiniScene(scene) {
    // Blue Background (Underwater Effect)
    scene.background = new THREE.Color(0x87ceeb); // Light blue

    // Ground (sandy color)
    const groundGeometry = new THREE.PlaneGeometry(100, 100);
    const groundMaterial = new THREE.MeshStandardMaterial({ color: 0xffe4b5 }); // Sandy color
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    scene.add(ground);

    // SpongeBob's Pineapple House
    createPineappleHouse(scene);

    // Squidward's Stone Head
    createSquidwardHouse(scene);

    // Patrick's Rock (Semi-Circle)
    const rockGeometry = new THREE.SphereGeometry(2, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2); // Half-sphere
    const rockMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 }); // Dark brown
    const rock = new THREE.Mesh(rockGeometry, rockMaterial);
    //rock.rotation.x = -Math.PI / 2; // Lay flat
    rock.position.set(6, 0, -10); // Position Patrick's house
    scene.add(rock);

    // Paths to houses
    createPaths(scene);
}

// Helper Function: Pineapple House
function createPineappleHouse(scene) {
    // Pineapple Main Body
    const pineappleGeometry = new THREE.CylinderGeometry(2, 2, 5, 32);
    const pineappleMaterial = new THREE.MeshStandardMaterial({ color: 0xffa500 }); // Orange
    const pineapple = new THREE.Mesh(pineappleGeometry, pineappleMaterial);
    pineapple.position.set(0, 2.5, -10);
    scene.add(pineapple);

    // Round Top for Pineapple
    const topGeometry = new THREE.SphereGeometry(2, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2); // Half sphere
    const topMaterial = new THREE.MeshStandardMaterial({ color: 0xffa500 }); // Match pineapple color
    const top = new THREE.Mesh(topGeometry, topMaterial);
    top.position.set(0, 5, -10); // Place on top of the pineapple
    scene.add(top);

    // Leaves (Fanned on Top)
    const leafGeometry = new THREE.ConeGeometry(0.6, 2, 16);
    const leafMaterial = new THREE.MeshStandardMaterial({ color: 0x055405 }); // Green
    for (let i = 0; i < 12; i++) {
        const leaf = new THREE.Mesh(leafGeometry, leafMaterial);
        const angle = (i / 12) * Math.PI * 2; // Spread leaves evenly
        leaf.position.set(Math.sin(angle) * 0.7, 6, Math.cos(angle) * 0.7); // Position in a circle
        leaf.rotation.set(-Math.PI / 4, angle, 0); // Slightly tilt outward
        scene.add(leaf);
    }

    // Door
    const doorGeometry = new THREE.BoxGeometry(1, 2, 0.1);
    const doorMaterial = new THREE.MeshStandardMaterial({ color: 0x654321 }); // Brown
    const door = new THREE.Mesh(doorGeometry, doorMaterial);
    door.position.set(0, 1, -7.95);
    scene.add(door);
}


// Helper Function: Squidward's Stone Head
function createSquidwardHouse(scene) {
    // Main Body
    const bodyGeometry = new THREE.CylinderGeometry(2, 2, 6, 32); // Cylindrical body
    const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0x2f4f4f }); // Gray-blue stone
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.set(-6, 3, -10);
    scene.add(body);

    // Top Cap
    const capGeometry = new THREE.SphereGeometry(2, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    const cap = new THREE.Mesh(capGeometry, bodyMaterial);
    cap.position.set(-6, 6, -10);
    scene.add(cap);

    // Eyes (Full Circles)
    const eyeGeometry = new THREE.SphereGeometry(0.8, 32, 32); // Spherical eyes
    const eyeMaterial = new THREE.MeshStandardMaterial({ color: 0x87cefa }); // Light blue
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-7, 4.5, -8.5); // Adjusted position for circles
    scene.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(-5, 4.5, -8.5);
    scene.add(rightEye);

    // Eye Borders
    const borderGeometry = new THREE.RingGeometry(0.85, 1, 32); // Slightly larger than the eyes
    const borderMaterial = new THREE.MeshStandardMaterial({ color: 0x1d2c2c }); // Stone gray
    const leftBorder = new THREE.Mesh(borderGeometry, borderMaterial);
    leftBorder.position.set(-7, 4.5, -8.45); // Move slightly forward
    leftBorder.rotation.x = Math.PI / 2; // Face outward
    scene.add(leftBorder);

    const rightBorder = new THREE.Mesh(borderGeometry, borderMaterial);
    rightBorder.position.set(-5, 4.5, -8.45);
    rightBorder.rotation.x = Math.PI / 2;
    scene.add(rightBorder);

    // Eyebrows
    const eyebrowGeometry = new THREE.BoxGeometry(2, 1, 1); // Rectangular eyebrows
    const eyebrowMaterial = new THREE.MeshStandardMaterial({ color: 0x1d2c2c }); // Same as the body
    const leftEyebrow = new THREE.Mesh(eyebrowGeometry, eyebrowMaterial);
    leftEyebrow.position.set(-7, 5.2, -8.3); // Position above left eye
    leftEyebrow.rotation.z = 0.2; // Slight tilt
    scene.add(leftEyebrow);

    const rightEyebrow = new THREE.Mesh(eyebrowGeometry, eyebrowMaterial);
    rightEyebrow.position.set(-5, 5.2, -8.3); // Position above right eye
    rightEyebrow.rotation.z = -0.2; // Slight tilt
    scene.add(rightEyebrow);

    // Nose
    const noseGeometry = new THREE.BoxGeometry(1, 2.5, 1); // Slightly larger nose
    const noseMaterial = new THREE.MeshStandardMaterial({ color: 0x1d2c2c }); // Darker than body
    const nose = new THREE.Mesh(noseGeometry, noseMaterial);
    nose.position.set(-6, 4.3, -8.1); // Adjusted position for prominence
    scene.add(nose);

    // Ears
    const earGeometry = new THREE.BoxGeometry(1, 2, 1);
    const leftEar = new THREE.Mesh(earGeometry, bodyMaterial);
    leftEar.position.set(-8, 3.5, -10);
    scene.add(leftEar);

    const rightEar = new THREE.Mesh(earGeometry, bodyMaterial);
    rightEar.position.set(-4, 3.5, -10);
    scene.add(rightEar);

    // Door
    const doorGeometry = new THREE.BoxGeometry(1, 2, 0.1);
    const doorMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 }); // Brown
    const door = new THREE.Mesh(doorGeometry, doorMaterial);
    door.position.set(-6, 1, -7.95);
    scene.add(door);
}

// Helper Function: Paths
function createPaths(scene) {
    const pathGeometry = new THREE.PlaneGeometry(0.5, 4);
    const pathMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 }); // Dark gray

    const pathToPineapple = new THREE.Mesh(pathGeometry, pathMaterial);
    pathToPineapple.position.set(0, 0.01, -8);
    pathToPineapple.rotation.x = -Math.PI / 2;
    scene.add(pathToPineapple);

    const pathToStoneHead = new THREE.Mesh(pathGeometry, pathMaterial);
    pathToStoneHead.position.set(-6, 0.01, -8);
    pathToStoneHead.rotation.x = -Math.PI / 2;
    scene.add(pathToStoneHead);

    const pathToRock = new THREE.Mesh(pathGeometry, pathMaterial);
    pathToRock.position.set(6, 0.01, -8);
    pathToRock.rotation.x = -Math.PI / 2;
    scene.add(pathToRock);
}
