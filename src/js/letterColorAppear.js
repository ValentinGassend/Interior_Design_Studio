import {SplitText} from "./gsap-business-green/src/SplitText.js";

document.addEventListener("DOMContentLoaded", function () {


    // gsap.registerPlugin(SplitText);
    // console.log(gsap)
    let titles = document.getElementsByClassName("__letterColorAppear")
    if (titles.length > 0) {
        for (let i = 0; i < titles.length; i++) {
            scrambleUppercase(titles[i]);
        }
    }

    function scrambleUppercase(text) {
        let mySplitText = new SplitText(text, {type: "words, chars", wordsClass: "__letterColorAppear--word letterColor--word", charsClass: "__letterColorAppear--char letterColor--char"})
        // console.log("mySplitText :", mySplitText)
        gsap.fromTo(".__letterColorAppear--char", {
            opacity: "30%",
            duration: 0.5,
        },{
            opacity: "100%",
            stagger: 0.1,
            scrollTrigger: {
                trigger: text,
                start: "center center",
                end: "center center",
                // markers: true,
            }

        })

    }
});