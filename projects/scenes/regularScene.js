import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.155.0/build/three.module.js';

export function regularScene(scene) {
    // Green Background (Park Effect)
    scene.background = new THREE.Color(0x87ceeb); // Light blue sky

    // Ground (grass color)
    const groundGeometry = new THREE.PlaneGeometry(100, 100);
    const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x228b22 }); // Green grass
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    scene.add(ground);

    // Add Trees
    createTrees(scene);

    // Add Bench
    createBench(scene);

    // Add Regular Show House
    createRegularShowHouse(scene);

    // Add Sunlight
    const sunlight = new THREE.DirectionalLight(0xffe4b5, 1);
    sunlight.position.set(10, 10, 10);
    scene.add(sunlight);
}

// Helper Function: Trees
function createTrees(scene) {
    for (let i = -20; i <= 20; i += 10) {
        const trunkGeometry = new THREE.CylinderGeometry(1, 1, 5, 16);
        const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 }); // Brown
        const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
        trunk.position.set(i, 2.5, -10);
        scene.add(trunk);

        const leavesGeometry = new THREE.SphereGeometry(3, 16, 16);
        const leavesMaterial = new THREE.MeshStandardMaterial({ color: 0x228b22 }); // Green leaves
        const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial);
        leaves.position.set(i, 7.5, -10);
        scene.add(leaves);
    }
}

// Helper Function: Bench
function createBench(scene) {
    const benchGeometry = new THREE.BoxGeometry(5, 1, 2);
    const benchMaterial = new THREE.MeshStandardMaterial({ color: 0x654321 }); // Wood brown
    const bench = new THREE.Mesh(benchGeometry, benchMaterial);
    bench.position.set(0, 0.5, -5);
    scene.add(bench);
}

// Helper Function: Regular Show House
function createRegularShowHouse(scene) {
    // House Main Body
    const houseGeometry = new THREE.BoxGeometry(10, 6, 8);
    const houseMaterial = new THREE.MeshStandardMaterial({ color: 0x2e8b57 }); // Green
    const house = new THREE.Mesh(houseGeometry, houseMaterial);
    house.position.set(0, 3, -20);
    scene.add(house);

    // Roof
    const roofGeometry = new THREE.ConeGeometry(7, 4, 4);
    const roofMaterial = new THREE.MeshStandardMaterial({ color: 0x8b0000 }); // Dark red roof
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.rotation.y = Math.PI / 4; // Rotate for a pyramid shape
    roof.position.set(0, 7, -20);
    scene.add(roof);

    // Porch
    const porchGeometry = new THREE.BoxGeometry(10, 0.2, 4);
    const porchMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 }); // Wooden porch
    const porch = new THREE.Mesh(porchGeometry, porchMaterial);
    porch.position.set(0, 0.1, -17);
    scene.add(porch);

    // Columns
    createColumns(scene);

    // Stairs
    createStairs(scene);

    // Windows
    createWindows(scene);

    // Door
    const doorGeometry = new THREE.BoxGeometry(1.5, 2.5, 0.1);
    const doorMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 }); // Brown door
    const door = new THREE.Mesh(doorGeometry, doorMaterial);
    door.position.set(0, 1, -16);
    scene.add(door);
}

// Helper Function: Columns
function createColumns(scene) {
    const columnGeometry = new THREE.CylinderGeometry(0.3, 0.3, 3, 16);
    const columnMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff }); // White columns
    const leftColumn = new THREE.Mesh(columnGeometry, columnMaterial);
    leftColumn.position.set(-4.5, 1.5, -18);
    scene.add(leftColumn);

    const rightColumn = new THREE.Mesh(columnGeometry, columnMaterial);
    rightColumn.position.set(4.5, 1.5, -18);
    scene.add(rightColumn);
}

// Helper Function: Stairs
function createStairs(scene) {
    for (let i = 0; i < 3; i++) {
        const stepGeometry = new THREE.BoxGeometry(8 - i, 0.2, 1);
        const stepMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
        const step = new THREE.Mesh(stepGeometry, stepMaterial);
        step.position.set(0, 0.1 + i * 0.2, -15 - i);
        scene.add(step);
    }
}

// Helper Function: Windows
function createWindows(scene) {
    const windowGeometry = new THREE.BoxGeometry(2, 2, 0.1);
    const windowMaterial = new THREE.MeshStandardMaterial({ color: 0x87ceeb }); // Light blue
    const leftWindow = new THREE.Mesh(windowGeometry, windowMaterial);
    leftWindow.position.set(-3, 4, -20.05); // Slightly forward
    scene.add(leftWindow);

    const rightWindow = new THREE.Mesh(windowGeometry, windowMaterial);
    rightWindow.position.set(3, 4, -20.05); // Slightly forward
    scene.add(rightWindow);
}
