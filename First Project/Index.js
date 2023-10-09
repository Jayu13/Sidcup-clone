var cursor = document.querySelector("#cursor");
var cursorBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
  cursorBlur.style.left = dets.x - 200 + "px";
  cursorBlur.style.top = dets.y - 200 + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (element) {
  element.addEventListener("mouseenter", function () {
    cursor.style.scale = 2;
    cursor.style.border = "2px solid #fff";
    cursor.style.backgroundColor = "transparent";
  });
  element.addEventListener("mouseleave", function () {
    cursor.style.scale = 1;
    cursor.style.border = "0px solid #95c11e";
    cursor.style.backgroundColor = "#95c11e";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "110px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -11%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    starter: "top -30%",
    end: "top -70%",
    scrub: 1,
  },
});

gsap.from("#about-us img,#about-us-inner", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top 55%",
    scrub:2
  },
});

gsap.from(".cards", {
  scale: 0.5,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".cards",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 55%",
    scrub:3
  },
});
