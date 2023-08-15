const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar');
const menubtn = document.querySelector('.menu-icon')
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    if (navMenu.classList.contains('show')) {
        menubtn.classList.add('open');
        gsap.fromTo(navMenu, {
            scaleX: 0, opacity: 1
        },
            {
                scaleX: 1, opacity: 1, display: "grid", transformOrigin: "right center"
            })
    } else {
        menubtn.classList.remove('open');

        gsap.fromTo(navMenu, {
            scaleX: 1, opacity: 1
        },
            {
                scaleX: 0, opacity: 1, display: "none", transformOrigin: "left center"
            })
    }
});

const navlinks = document.querySelectorAll('.navbar li a');
console.log(navlinks);


navlinks.forEach(item => {
    item.addEventListener("click", () => {
        if (window.matchMedia("(max-width:779px)").matches) {
            menubtn.classList.remove('open');
            gsap.to(navMenu, { display: "none", duration: 0.5, ease: 'power2.in' });
        }

    });
});






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
        // snap: {
        //     snapTo: 0.50,
        //     duration: 0.5,
        //     ease: "power2.out"
        // },
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

//contact icon

let t2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.s-icon',
        toggleActions: 'restart',

    }
})

t2.fromTo('#i-git-hub', {
    scale: 0,
}, {
    scale: 1,
    duration: 0.5,
    ease: 'elastic.out',
})

t2.fromTo('#i-site', {
    scale: 0,
}, {
    scale: 1,
    duration: 0.5,
    ease: 'elastic.out',
})

t2.fromTo('#i-mail', {
    scale: 0,
}, {
    scale: 1,
    duration: 0.5,
    ease: 'elastic.out',
})

//darkmode function

// let darkMode = localStorage.getItem('darkmode');
const darkModeBtn = document.querySelector(".darkbtn");
let toggle = false;

const enableDarkMode = () => {
    document.body.classList.add("darkmode");

    // localStorage.setItem("darkmode", "enabled");
};

const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    // localStorage.setItem("darkmode", null)
};

darkModeBtn.addEventListener("click", () => {
    // darkMode = localStorage.getItem("darkmode");
    if (toggle !== true) {
        enableDarkMode();
        toggle = true;


    }
    else {
        disableDarkMode();
        toggle = false;
    }
})

//hamburger menu






//smooth scroll
// const lenis = new lenis()

// lenis.on('scroll', (e) => {
//     console.log(e)
// })

// function raf(time) {
//     lenis.raf(time)
//     requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)


