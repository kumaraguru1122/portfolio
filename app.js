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



let typeSplit2 = new SplitType('[animate]', {
    types: 'lines, words, chars',
    tagName: 'span'
})

gsap.from('[animate] .word', {
    opacity: 0.3,
    duration: 1.8,
    ease: 'back.out',
    stagger: 0.1,

    scrollTrigger: {
        trigger: '[animate]',
        start: 'top center',
        scrub: true
    }
})
