import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.155.0/build/three.module.js';

import { courageScene } from './scenes/courageScene.js';
import { bikiniScene } from './scenes/bikiniScene.js';
import { regularScene } from './scenes/regularScene.js';
import { gumballScene } from './scenes/gumballScene.js';


let scene, camera, renderer, currentAudio;
let moveForward = false, moveBackward = false, moveLeft = false, moveRight = false;
let velocity = new THREE.Vector3();
let direction = new THREE.Vector3();
let audioVolume = 0.5; // Default volume
let showFPS = false; // Default FPS display setting
let stats; // FPS Stats object

function init() {
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1, 5);

    scene = new THREE.Scene();

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // Setup sidebar toggle functionality
    setupSidebarToggle();

    // Load initial scene and start animation loop
    courageScene(scene);

    setupMovementControls();

    animate();
}


function setupMovementControls() {
    document.addEventListener('keydown', (event) => {
        switch (event.code) {
            case 'KeyW': moveForward = true; break;
            case 'KeyS': moveBackward = true; break;
            case 'KeyA': moveLeft = true; break;
            case 'KeyD': moveRight = true; break;
        }
    });

    document.addEventListener('keyup', (event) => {
        switch (event.code) {
            case 'KeyW': moveForward = false; break;
            case 'KeyS': moveBackward = false; break;
            case 'KeyA': moveLeft = false; break;
            case 'KeyD': moveRight = false; break;
        }
    });
}

function animate() {
    requestAnimationFrame(animate);

    // Handle movement
    const delta = 0.1; // Speed multiplier
    direction.z = Number(moveForward) - Number(moveBackward);
    direction.x = Number(moveRight) - Number(moveLeft);
    direction.normalize(); // Normalize to prevent faster diagonal movement

    velocity.z = direction.z * delta;
    velocity.x = direction.x * delta;

    camera.position.x += velocity.x;
    camera.position.z += velocity.z;

    renderer.render(scene, camera);
}

function setupSidebarButtons() {
    const buttons = document.querySelectorAll('.scene-button');

    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const sceneName = event.target.getAttribute('data-scene');
            switch (sceneName) {
                case 'courage':
                    switchScene(courageScene);
                    break;
                case 'bikini':
                    switchScene(bikiniScene);
                    break;
                case 'regular':
                    switchScene(regularScene);
                    break;
                case 'gumball':
                    switchScene(gumballScene);
                    break;
                default:
                    console.error('Scene not found:', sceneName);
            }
        });
    });
}

function setupSidebarToggle() {
    const sidebar = document.getElementById('sidebar');
    const menuButton = document.getElementById('menu-button');
    const sceneButtons = document.querySelectorAll('.scene-button');

    // Function to attach event listeners to scene buttons
    function attachSceneButtonListeners() {
        sceneButtons.forEach((button) => {
            button.removeEventListener('click', handleSceneClick); // Avoid duplicate listeners
            button.addEventListener('click', handleSceneClick);
        });
    }

    // Handle scene button click: switch scene and hide sidebar
    function handleSceneClick(event) {
        const sceneName = event.target.getAttribute('data-scene');
        switch (sceneName) {
            case 'courage':
                switchScene(courageScene);
                break;
            case 'bikini':
                switchScene(bikiniScene);
                break;
            case 'regular':
                switchScene(regularScene);
                break;
            case 'gumball':
                switchScene(gumballScene);
                break;
            default:
                console.error('Scene not found:', sceneName);
        }

        // Hide sidebar and show menu button
        sidebar.classList.add('hidden');
        menuButton.classList.remove('hidden');
    }

    // Show sidebar and hide menu button
    menuButton.addEventListener('click', () => {
        sidebar.classList.remove('hidden');
        menuButton.classList.add('hidden');
        attachSceneButtonListeners(); // Re-attach listeners when sidebar is reopened
    });

    // Initial attachment of scene button listeners
    attachSceneButtonListeners();
}

function switchScene(newSceneFunction) {
    // Clear the current scene
    while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
    }

    // Re-add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // Stop current audio if any
    if (currentAudio) currentAudio.stop();

    // Load the new scene
    newSceneFunction(scene);
}

function setupSettings() {
    const settingsButton = document.getElementById('settings-button');
    const settingsModal = document.getElementById('settings-modal');
    const closeSettingsButton = document.getElementById('close-settings');
    const volumeSlider = document.getElementById('music-volume');
    const fpsToggle = document.getElementById('fps-toggle');

    // Open settings
    settingsButton.addEventListener('click', () => {
        settingsModal.classList.remove('hidden');
    });

    // Close settings
    closeSettingsButton.addEventListener('click', () => {
        settingsModal.classList.add('hidden');
    });

    // Adjust music volume
    volumeSlider.addEventListener('input', (event) => {
        audioVolume = parseFloat(event.target.value);
        if (currentAudio) currentAudio.setVolume(audioVolume);
    });

    // Toggle FPS Counter (if applicable)
    fpsToggle.addEventListener('change', (event) => {
        showFPS = event.target.checked;
        toggleFPSCounter(showFPS);
    });
}

function toggleFPSCounter(enable) {
    if (enable) {
        if (!stats) {
            import('https://cdn.jsdelivr.net/npm/stats.js').then((module) => {
                stats = new module.default();
                stats.showPanel(0);
                document.body.appendChild(stats.dom);
            });
        }
    } else if (stats) {
        document.body.removeChild(stats.dom);
        stats = null;
    }
}

// Handle window resizing
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// Initialize the application
init();
