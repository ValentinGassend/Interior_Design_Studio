import {SplitText} from "./gsap-business-green/src/SplitText.js";

document.addEventListener("DOMContentLoaded", function () {
    // gsap.registerPlugin(SplitText);

    let textAnim;
    const doText = () => {
        let lineContainer = document.getElementsByClassName('_lineAppear')
        let containers = []
        let container;
        const text = new SplitText("._lineAppear", { types: "lines", linesClass: "lineChild"});
        const mask = new SplitText("._lineAppear", { types: "lines", linesClass: "lineParent"});

        for (let i = 0; i < lineContainer.length; i++) {
            container = lineContainer[i].closest('section').classList[0]
            containers = [].concat(containers, container)
            textAnim && textAnim.progress(1);
            const lineChild = lineContainer[i].getElementsByClassName('lineChild')
            const trigger = lineContainer[i].classList[lineContainer[i].classList.length-1] === 'item' ? lineChild : '.'+container
            gsap.fromTo(lineChild,{yPercent: 200}, {
                yPercent: 0,
                duration: 0.5,
                stagger: 0.25,
                scrollTrigger: {
                    trigger: trigger,
                    start: "top center",
                    end: "center center",
                    markers: true,
                }
            })
        }

    };
    doText();
    window.addEventListener("resize", doText);
});
