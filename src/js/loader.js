import {SplitText} from "./gsap-business-green/src/SplitText.js";

document.addEventListener("DOMContentLoaded", function () {
    let title = document.getElementsByClassName("Landing-center--title--content")
    scrambleUppercase(title[0]);

    function scrambleUppercase(text) {
        let mySplitText = new SplitText(text, {
            type: "words, chars",
            wordsClass: "__Landing-center--title--content--word Landing-center--title--content--word",
            charsClass: "__Landing-center--title--content--char Landing-center--title--content--char"
        })
        // console.log("mySplitText :", mySplitText)
        gsap.fromTo(".__Landing-center--title--content--char", {
            opacity: "0%",
            y: "200%",
        }, {
            opacity: "100%",
            y: "-0%",
            ease: "power1.inOut",
            delay:1,
            stagger: 0.2,

        })

    }
});