window.addEventListener('load', () => {
    const circleB = document.querySelector('.circle-b');
    const dot2 = document.getElementById('dot-2');

    const radius = 200; // Radius of circle-b
    let angle = 0; // Initial angle for dot-2 position

    setInterval(() => {
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        dot2.style.left = `${50 + x}px`; // Adjust the center position of circle-b
        dot2.style.top = `${50 - y}px`; // Adjust the center position of circle-b

        angle += 0.05; // Adjust the speed of movement
    }, 30); // Adjust the interval for smooth movement
});
