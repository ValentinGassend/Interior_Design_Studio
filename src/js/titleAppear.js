let titleContainer = document.getElementsByClassName('_titleAppear')
let containers = [
    "Dream",
    "Confort",
    "Project",
    "Testimonial",
    "Contact"]
let container
let targets
console.log(titleContainer)
gsap.registerPlugin(ScrollTrigger);
for (let i = 0; i < titleContainer.length; i++) {
    for (let k = 0; k < titleContainer[i].classList.length; k++) {
        for (let l = 0; l <containers.length; l++) {

            titleContainer[i].classList[k] == containers[l] ? container ="."+titleContainer[i].classList[k]:console.log(titleContainer[i].classList);
        }
    }
    for (let j = 0; j < titleContainer[i].children.length; j++) {
        let element = titleContainer[i].children[j].children[0]
        element.classList.add(container +"-title-children")
        targets = gsap.utils.toArray(element);


    }
}
for (let i = 0; i < containers.length; i++) {
    gsap.from("."+containers[i]+"-title-children", {
        translateY: "100%",
        stagger:0.5,
        duration:1,
        scrollTrigger: {
            trigger: container,
            start: "top center",
            end: "center center",
            markers: true,
        }
    })
}
