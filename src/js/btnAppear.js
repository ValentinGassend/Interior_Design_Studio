document.addEventListener("DOMContentLoaded", function () {
    let btnContainer = document.getElementsByClassName('Btn-primary')


    let containers = []
    let container;
    let targets
    console.log(btnContainer)
    console.log(containers)
    document
    for (let i = 0; i < btnContainer.length; i++) {
        container = btnContainer[i].closest('section').classList[0]

        containers = [].concat(containers, container)


        for (let j = 0; j < btnContainer[i].getElementsByClassName("Btn-primary-border")[0].children.length; j++) {
            let elementLeft = btnContainer[i].getElementsByClassName("Btn-primary-border")[0].children[0].children[0]
            let elementright = btnContainer[i].getElementsByClassName("Btn-primary-border")[0].children[1].children[0]
            elementLeft.classList.add(containers[i] + "-btn-primary-left-children")
            elementright.classList.add(containers[i] + "-btn-primary-right-children")


        }
    }
    for (let i = 0; i < containers.length; i++) {

        // console.log("trigger : ", "." +container)
        // console.log(document.getElementsByClassName(containers[i] + "-btn-primary-left-children")[0])
        container = containers[1]
        console.log("trigger : ", "." + container)
        console.log("elements : ", "." + container + "-btn-primary-left-children")
        console.log("elements : ", "." + container + "-btn-primary-right-children")

        gsap.from("." + container + "-btn-primary-left-children", {
            animationName: "rotate-left",
            duration: 1.5,
            scrollTrigger: {
                trigger: "." + container,
                start: "center center",
                end: "center center",
                // markers: true,
            }
        })
        gsap.from("." + container + "-btn-primary-right-children", {
            animationName: "rotate-right",
            duration: 1.5,
            delay:1,
            scrollTrigger: {
                trigger: "." + container,
                start: "center center",
                end: "center center",
                // markers: true,
            }
        })
    }
});
