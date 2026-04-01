let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#two",
    // markers: true,
    scrub: 1,
    start: "top 54%",
    end: "top 20%",
  },
});

tl.to("#box", {
  top: "900px",
  right: 0,
  borderRadius: "100%",
});

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#three",
    markers: true,
    start: "top 60%",
    end: "top 20%",
    scrub: 1,
  },
});

tl2.to("#box", {
  top: "1400px",
  right: "95%",
  borderRadius: "18px",
});
