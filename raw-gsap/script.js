let initialPath = `M 10 100 Q 250 100 490 100`;
let finalPath = `M 10 150 Q 250 200 490 100`;

const string = document.getElementById("string");

string.addEventListener("mousemove", (dets) => {
  let path = `M 10 100 Q ${dets.x} ${dets.y} 490 100`;
  gsap.to("svg path", {
    attr: {
      d: path,
    },
    duration: 0.3,
    ease: "power3.out",
  });
});
string.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: {
      d: initialPath,
    },
    duration: 0.8,
    ease: "elastic.out(1,0.2)",
  });
});
string.addEventListener("mouseleave", (e) => {});
