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
        let mySplitText = new SplitText(text, {
            type: "words, chars",
            wordsClass: "__letterColorAppear--word letterColor--word",
            charsClass: "__letterColorAppear--char letterColor--char"
        })
        // console.log("mySplitText :", mySplitText)
        let words = mySplitText.words;
        let chars = mySplitText.chars;
        words.forEach((word, index) => {
            // Création d'une animation pour chaque mot, qui affecte ses caractères
            gsap.fromTo(word.children, {
                opacity: "30%",
                duration: 0.5,

            },{
                    opacity: "100%",

                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: word,
                        start: "center 75%",
                        end: "center center",
                    }

                })
        });
        // gsap.to(chars, {
        //     opacity: "100%",
        //     duration: 0.5,
        //     stagger: 0.1,
        //     scrollTrigger: {
        //         trigger: words,
        //         start: "center center",
        //         end: "center center",
        //         markers: true,
        //     }
        //
        // })

    }
});