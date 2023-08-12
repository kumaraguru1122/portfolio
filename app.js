gsap.fromTo(".greeting", { opacity: 0, }, { duration: 2, opacity: 1 });


let typeSplit1 = new SplitType('#profession', {
    types: 'lines, words, chars',
    tagName: 'span'
})

gsap.from('#profession .char', {
    y: '100%',
    opacity: 1,
    duration: 0.5,
    ease: 'power3.out',
    stagger: 0.1,

})


let typeSplit = new SplitType('.description', {
    types: 'lines, words, chars',
    tagName: 'span'
})

gsap.from('.description .word', {
    opacity: 0.3,
    duration: 1.8,
    ease: 'back.out',
    stagger: 0.1,

})

//skills

let t1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.skill',
        start: 'top bottom',
        end: 'bottom center',
        marker: 'true',
        toggleActions: 'restart',
        scrub: 'true',
    }
})
t1.fromTo('.skill-1', {
    x: -800,
    opacity: 0
}, {
    x: 0, opacity: 1, duration: 1, ease: 'power1.out',
})
t1.fromTo('.skill-2', {
    x: -800,
    opacity: 0
}, {
    x: 0, opacity: 1, duration: 1, ease: 'power1.out',
})

//smooth scroll
const lenis = new lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


