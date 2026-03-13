import {SplitText} from "./gsap-business-green/src/SplitText.js";

document.addEventListener("DOMContentLoaded", function () {
    let titles = document.getElementsByClassName("__letterColorAppear")
    if (titles.length > 0) {
        for (let i = 0; i < titles.length; i++) {
            scrambleUppercase(titles[i]);
        }
    }

    function scrambleUppercase(text) {
        let mySplitText = new SplitText(text, {
            type: "words, chars",
            wordsClass: "__letterColorAppear--word letterColor--word",
            charsClass: "__letterColorAppear--char letterColor--char"
        })
        
        let chars = mySplitText.chars;
        
        // Animating all characters with scrub for bi-directional scroll effect
        gsap.fromTo(chars, {
            opacity: 0.2, // Base dimmed state
        }, {
            opacity: 1, // Full color state
            stagger: 0.05,
            ease: "none",
            scrollTrigger: {
                trigger: text,
                start: "top 80%", // Start when top of text hits 80% of viewport
                end: "bottom 40%", // Finish when bottom hits 40%
                scrub: true, // Sync animation with scroll (reverse on scroll up)
            }
        });
    }
});
