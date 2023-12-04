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
            targets = gsap.utils.toArray(elementLeft);
            targets = gsap.utils.toArray(elementright);


        }
    }
    for (let i = 0; i < containers.length; i++) {

        console.log("elements : ", "." + containers[i] + "-btn-primary-left-children")
        console.log("elements : ", "." + containers[i] + "-btn-primary-right-children")
        // console.log("trigger : ", "." +container)
        // console.log(document.getElementsByClassName(containers[i] + "-btn-primary-left-children")[0])
        container = containers[i]
        console.log("trigger : ", "." + container)
        gsap.from("." + containers[i] + "-btn-primary-left-children", {
            animationName: "rotate-left",
            duration: 1,
            scrollTrigger: {
                trigger: "." + container,
                start: "top center",
                end: "center center",
                markers: true,
            }
        })
        gsap.from("." + containers[i] + "-btn-primary-right-children", {
            animationName: "rotate-right",
            duration: 1,
            scrollTrigger: {
                trigger: "." + container,
                start: "top center",
                end: "center center",
                markers: true,
            }
        })
    }
});
