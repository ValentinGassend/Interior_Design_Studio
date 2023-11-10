document.addEventListener("DOMContentLoaded", function () {
    let titleContainer = document.getElementsByClassName('_titleAppear')


    let containers = []
    let container;
    let targets
    console.log(titleContainer)
    gsap.registerPlugin(ScrollTrigger);
    console.log(containers)
    document
    for (let i = 0; i < titleContainer.length; i++) {
        container = titleContainer[i].closest('section').classList[0]

        containers = [].concat(containers, container)
        for (let j = 0; j < titleContainer[i].children.length; j++) {
            let element = titleContainer[i].children[j].children[0]
            element.classList.add(containers[i] + "-title-children")
            targets = gsap.utils.toArray(element);


        }
    }
    for (let i = 0; i < containers.length; i++) {
        container = document.getElementsByClassName(containers[i] + "-title-children")[0].closest("section").classList[0]
        console.log("." + containers[i])
        console.log("." + container)
        gsap.from("." + containers[i] + "-title-children", {
            translateY: "100%",
            stagger: 0.5,
            duration: 1,
            scrollTrigger: {
                trigger: "." + container,
                start: "top center",
                end: "center center",
                markers: false,
            }
        })
    }
});
