document.addEventListener("DOMContentLoaded", function () {
    let parallax = document.getElementsByClassName('__parallax')
    for (let i = 0; i < parallax.length; i++) {

        gsap.from(parallax[i], {
            translateY: "50%",
            duration: 5,
            ease: "none",
            scrollTrigger: {
                trigger: parallax[i],
                start: "top center",
                end: "bottom center",
                scrub:true,
                markers: true,
            }
        })

    }



});
