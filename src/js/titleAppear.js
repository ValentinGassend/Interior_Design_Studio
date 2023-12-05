document.addEventListener("DOMContentLoaded", function () {
    let titleContainer = document.getElementsByClassName('_titleAppear')


    let containers = []
    let container;
    let targets
    // console.log(titleContainer)
    gsap.registerPlugin(ScrollTrigger);
    // console.log(containers)

    for (let i = 0; i < titleContainer.length; i++) {
        // console.log(titleContainer[i])
        container = titleContainer[i].closest('section').classList[0]

        containers = [].concat(containers, container)
        for (let j = 0; j < titleContainer[i].children.length; j++) {
            // console.log(titleContainer[i].children[j])
            var content = titleContainer[i].children[j].textContent
            // // console.log(content)
            // // console.log(titleContainer[i].children[j])
            titleContainer[i].children[j].innerHTML ='<span class="'+container+'-title-children">'+content+'</span>';


        }
    }
    for (let i = 0; i < containers.length; i++) {
        container = document.getElementsByClassName(containers[i] + "-title-children")[0].closest("section").classList[0]
        gsap.from("." + containers[i] + "-title-children", {
            translateY: "100%",
            stagger: 0.5,
            duration: 1,
            scrollTrigger: {
                trigger: "." + container,
                start: "top center",
                end: "center center",
                // markers: true,
            }
        })
    }
});
