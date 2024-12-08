// Helper Function: Regular Show House
function createRegularShowHouse(scene) {
    const houseXPosition = 15; // Move the house to the right

    // House Main Body
    const houseGeometry = new THREE.BoxGeometry(10, 6, 8);
    const houseMaterial = new THREE.MeshStandardMaterial({ color: 0x2e8b57 }); // Green
    const house = new THREE.Mesh(houseGeometry, houseMaterial);
    house.position.set(houseXPosition, 3, -20);
    scene.add(house);

    // Roof
    const roofGeometry = new THREE.ConeGeometry(7, 4, 4);
    const roofMaterial = new THREE.MeshStandardMaterial({ color: 0x8b0000 }); // Dark red roof
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.rotation.y = Math.PI / 4; // Rotate for a pyramid shape
    roof.position.set(houseXPosition, 7, -20);
    scene.add(roof);

    // Porch
    const porchGeometry = new THREE.BoxGeometry(10, 0.2, 4);
    const porchMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 }); // Wooden porch
    const porch = new THREE.Mesh(porchGeometry, porchMaterial);
    porch.position.set(houseXPosition, 0.1, -17);
    scene.add(porch);

    // Columns
    createColumns(scene, houseXPosition);

    // Stairs
    createStairs(scene, houseXPosition);

    // Windows
    createWindows(scene, houseXPosition);

    // Door
    const doorGeometry = new THREE.BoxGeometry(1.5, 2.5, 0.1);
    const doorMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 }); // Brown door
    const door = new THREE.Mesh(doorGeometry, doorMaterial);
    door.position.set(houseXPosition, 1, -16);
    scene.add(door);
}

// Helper Function: Columns
function createColumns(scene, houseXPosition) {
    const columnGeometry = new THREE.CylinderGeometry(0.3, 0.3, 3, 16);
    const columnMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff }); // White columns
    const leftColumn = new THREE.Mesh(columnGeometry, columnMaterial);
    leftColumn.position.set(houseXPosition - 4.5, 1.5, -18);
    scene.add(leftColumn);

    const rightColumn = new THREE.Mesh(columnGeometry, columnMaterial);
    rightColumn.position.set(houseXPosition + 4.5, 1.5, -18);
    scene.add(rightColumn);
}

// Helper Function: Stairs
function createStairs(scene, houseXPosition) {
    for (let i = 0; i < 3; i++) {
        const stepGeometry = new THREE.BoxGeometry(8 - i, 0.2, 1);
        const stepMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
        const step = new THREE.Mesh(stepGeometry, stepMaterial);
        step.position.set(houseXPosition, 0.1 + i * 0.2, -15 - i);
        scene.add(step);
    }
}

// Helper Function: Windows
function createWindows(scene, houseXPosition) {
    const windowGeometry = new THREE.BoxGeometry(2, 2, 0.1);
    const windowMaterial = new THREE.MeshStandardMaterial({ color: 0x87ceeb }); // Light blue
    const leftWindow = new THREE.Mesh(windowGeometry, windowMaterial);
    leftWindow.position.set(houseXPosition - 3, 4, -20.05); // Slightly forward
    scene.add(leftWindow);

    const rightWindow = new THREE.Mesh(windowGeometry, windowMaterial);
    rightWindow.position.set(houseXPosition + 3, 4, -20.05); // Slightly forward
    scene.add(rightWindow);
}
