document.addEventListener("DOMContentLoaded", function () {
    let btnContainer = document.getElementsByClassName('Btn-primary')


    let containers = []
    let container;

    for (let i = 0; i < btnContainer.length; i++) {

        container = btnContainer[i].closest('section').classList[0]

        containers = [].concat(containers, container)


        for (let j = 0; j < btnContainer[i].getElementsByClassName("Btn-primary-border")[0].children.length; j++) {
            let elementLeft = btnContainer[i].getElementsByClassName("Btn-primary-border")[0].children[0].children[0]
            let elementright = btnContainer[i].getElementsByClassName("Btn-primary-border")[0].children[1].children[0]
            elementLeft.classList.add(container + "-btn-primary-left-children")
            elementright.classList.add(container + "-btn-primary-right-children")


        }
    }
    for (let i = 0; i < containers.length; i++) {
        container = containers[i]

        gsap.to("." + container + "-btn-primary-left-children", {
            animationName: "rotate-left",
            duration: 2.5,
            scrollTrigger: {
                trigger: "." + container,
                start: "top center",
                end: "center center",
                // markers: true,
            },
            onComplete: function () {
                this._pt.t.classList.add("active")
            }
        })
        gsap.to("." + container + "-btn-primary-right-children", {
            animationName: "rotate-right",
            duration: 2.5,
            // delay:1,
            scrollTrigger: {
                trigger: "." + container,
                start: "top center",
                end: "center center",
                // markers: true,
            },
            onComplete: function () {
                this._pt.t.classList.add("active")
            }
        })
    }
});
