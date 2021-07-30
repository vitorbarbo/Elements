let tl= gsap.timeline({
    scrollTrigger: {
        trigger: "#section_2",
        start: "center bottom",
    }
});

tl.from("#img_2", {opacity: 0, duration: 1})
    .from("#section_2", {opacity: 0, duration: 1}, "-=1")