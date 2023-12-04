document.addEventListener("DOMContentLoaded", function () {


    gsap.registerPlugin(SplitText);
    console.log(gsap)
    let titles = document.getElementsByClassName("__letterColorAppear")
    if (titles.length > 0) {
        for (let i = 0; i < titles.length; i++) {
            scrambleUppercase(titles[i]);
        }
    }

    function scrambleUppercase(text) {
        let mySplitText = new SplitText(text, {type: "words, chars", wordsClass: "Title--word"})
        console.log("mySplitText :",mySplitText)
        gsap.from(text, {
            opacity: "30%",
            stagger: 0.5,
            duration: 1,
            scrollTrigger: {
                trigger: text,
                start: "top center",
                end: "center center",
                markers: true,
            }
        })

    }
});