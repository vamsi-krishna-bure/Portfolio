function init() {

    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init()

// use class reveal
function logoReveal() {

    TweenMax.to(".overlay img", 2, {
        opacity: 0,
        delay: 0.5,
        y: -1000,
        ease: Expo.easeInOut
    })


    TweenMax.to(".overlay", 2, {
        delay: 1,
        top: "-100vh",
        opacity: 0,
        ease: Expo.easeInOut
    })

    TweenMax.from(".navigation", {
        opacity: 0,
        delay: 2,
        ease: Expo.easeInOut
    })
}

// use class reveal to load while loading
function homeReveal() {
    const myText = new SplitType('.reveal')

    gsap.to('.char', {
        y: 0,
        delay: 2,
        stagger: 0.05,
        duration: 0.1,
        ease: "back.outIn",
    })
}


function aboutReveal() {
    const myText = new SplitType('.about-reveal', { type: 'chars' })

    gsap.to('.char', {
        y: 0,
        stagger: 0.08,
        ease: "back.outIn",
        duration: 0,
        scrollTrigger: {
            trigger: ".about-head",
            scroller: ".main",
            start: "top 80%",
            end: "top 80%",
            scrub: 1
        }
    })
}


function workReveal() {
    const myText = new SplitType('.work-reveal', { type: 'chars' })

    gsap.to('.char', {
        y: 0,
        stagger: 0.08,
        ease: "back.outIn",
        duration: 0.1,
        scrollTrigger: {
            trigger: ".work-head",
            scroller: ".main",
            start: "top 80%",
            end: "top 80%",
            scrub: 1
        }
    })
}

var t2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".work",
        scroller: ".main",
        start: "top 80%",
        end: "top 80%",
        scrub: 1,
        duration: 1,
    }
});

t2.to(".work-container hr, .navigation a", {
    filter: "invert(1)",
    border: "#000"
}, "work")

t2.to(".navigation", {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    color: "#000",
}, "work")

t2.to(".about-head", {
    color: "#000",
}, "work")

t2.to(".card", {
    color: "#fff",
    backgroundColor: "#fff"
}, "work")



t2.to(".main", {
    color: "#000",
    backgroundColor: "#fff",
}, "work")

var t3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".contact",
        scroller: ".main",
        start: "top 70%",
        end: "top 70%",
        scrub: 1,
        duration: 1,
    }
});

t3.to(".main", {
    color: "#fff",
    backgroundColor: "#000",
}, "contact")

t3.to(".navigation a", {
    filter: "invert(0)",
}, "contact")

t3.to(".card", {
    filter: "invert(0)",
}, "contact")

function contactReveal() {
    const myText = new SplitType('.contact-reveal', { type: 'chars' })

    gsap.to('.char', {
        y: 0,
        stagger: 0.08,
        ease: "back.outIn",
        duration: 0.1,
        scrollTrigger: {
            trigger: ".contact-head",
            scroller: ".main",
            start: "top 70%",
            end: "top 70%",
            scrub: 1
        }
    })
}


logoReveal();

homeReveal();

aboutReveal();

workReveal();

contactReveal();