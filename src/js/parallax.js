document.addEventListener("DOMContentLoaded", function () {
    let parallaxItems = document.getElementsByClassName('__parallax');
    
    for (let i = 0; i < parallaxItems.length; i++) {
        const item = parallaxItems[i];
        
        // Define different speeds/intensities for each item to create a more dynamic feel
        // Item 1: 60px, Item 2: 120px, Item 3: 90px etc.
        const intensities = [60, 120, 90, 150];
        const yDist = intensities[i % intensities.length];
        const rotDist = 5 + (i % 3); // Vary rotation slightly too

        gsap.fromTo(item, {
            y: `${yDist}px`,
            rotationX: -rotDist,
        }, {
            y: `-${yDist}px`,
            rotationX: rotDist,
            ease: "none",
            scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            }
        });
    }
});
