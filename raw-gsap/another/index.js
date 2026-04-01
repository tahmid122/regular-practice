// gsap.to("#watch", {
//   scrollTrigger: {
//     trigger: "#cards",
//     scrub: 0.5,
//     start: "top 60%",
//     end: "top 20%",
//     markers: true,
//   },
//   top: () => {
//     console.log(document.querySelector("#stop-here").offsetTop);
//     return document.querySelector("#stop-here").offsetTop;
//   },
//   left: () => document.querySelector("#stop-here").offsetLeft,
// });
// ScrollTrigger.matchMedia({
//   // Desktop
//   "(min-width: 1024px)": function () {
//     let tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: "#description",
//         start: "top 70%",
//         end: "top 16%",
//         // markers: true,
//         scrub: 0.5,
//       },
//     });

//     tl.to("#watch", {
//       top: "900px",
//       right: "50px",
//       opacity: 0.95,
//       rotate: 360,
//     });

//     let tl2 = gsap.timeline({
//       scrollTrigger: {
//         trigger: "#cards",
//         scrub: 0.5,
//         start: "top 60%",
//         end: "top 16%",
//       },
//     });

//     tl2.to("#watch", {
//       top: "1550px",
//       right: "50%",
//       xPercent: 50,
//       scale: 0.9,
//       opacity: 1,
//       rotate: 0,
//     });
//   },

//   // Tablet
//   "(min-width: 640px) and (max-width:1023px)": function () {
//     let tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: "#description",
//         start: "top 90%",
//         end: "top 0%",
//         scrub: 0.5,
//         // markers: true,
//       },
//     });

//     tl.to("#watch", {
//       top: "950px",
//       right: "50%",
//       xPercent: 50,
//       scale: 0.9,
//       rotate: 360,
//     });

//     let tl2 = gsap.timeline({
//       scrollTrigger: {
//         trigger: "#cards",
//         scrub: 0.5,
//         start: "top 75%",
//         end: "top 25%",
//         // markers: true,
//       },
//     });

//     tl2.to("#watch", {
//       top: "1650px",
//       right: "25%",
//       xPercent: 50,
//       scale: 0.8,
//       rotate: 0,
//     });
//   },

//   // Mobile
//   "(max-width: 639px)": function () {
//     let tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: "#description",
//         start: "top 95%",
//         end: "top 0%",
//         scrub: 0.5,
//         // markers: true,
//       },
//     });

//     tl.to("#watch", {
//       top: "1380px",
//       right: "50%",
//       xPercent: 50,
//       scale: 0.7,
//       rotate: 360,
//     });

//     let tl2 = gsap.timeline({
//       scrollTrigger: {
//         trigger: "#cards",
//         scrub: 0.5,
//         start: "top 75%",
//         end: "top -20%",
//         // markers: true,
//       },
//     });

//     tl2.to("#watch", {
//       top: "2480px",
//       right: "50%",
//       xPercent: 50,
//       scale: 0.7,
//       rotate: 0,
//     });
//   },
// });

// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#description",
//     // markers: true,
//     start: "top 70%",
//     end: "top 16%",
//     scrub: 0.5,
//   },
// });

// tl.to("#watch", {
//   top: "900px",
//   right: "50px",
//   opacity: 0.95,
//   rotate: 360,
// });

// let tl2 = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#cards",
//     markers: true,
//     scrub: 0.5,
//     start: "top 60%",
//     end: "top 16%",
//   },
// });

// tl2.to("#watch", {
//   top: "1550px",
//   right: "50%",
//   transform: "translateX(50%)",
//   scale: 0.9,
//   opacity: 1,
//   rotate: 0,
//   //   width: "368px",
//   //   height: "225px",
// });

// responsive by a stop easy to make responsive on all devices
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#description",
    start: "top 70%",
    end: "top 16%",
    markers: true,
    scrub: 0.5,
  },
});

tl.to("#watch", {
  opacity: 0.95,
  rotate: 360,
  top: () => document.querySelector("#stop1").offsetTop - 200,
  left: () => {
    console.log(document.querySelector("#stop1").offsetLeft);
    return document.querySelector("#stop1").offsetLeft;
  },
});

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#cards",
    scrub: 0.5,
    start: "top 60%",
    end: "top 16%",
  },
});

tl2.to("#watch", {
  top: "1550px",
  right: "50%",
  xPercent: 50,
  scale: 0.9,
  opacity: 1,
  rotate: 0,
});
