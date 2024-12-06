export function enableMouseNavigation(camera) {
    window.addEventListener('mousemove', (event) => {
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = -(event.clientY / window.innerHeight) * 2 + 1;

        camera.rotation.y = x * Math.PI * 0.25; // Horizontal rotation
        camera.rotation.x = y * Math.PI * 0.25; // Vertical rotation
    });
}
