let cursor = document.querySelector("#cursor");
let cursorBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function(coordinate){
    // minus (-) custom cursor radius (width / 2) & radius (height / 2) from 
    // my x-coordinate and y-coordinate.
    // so my custom pointer moves wtih mouse poiner.
    cursor.style.left = coordinate.x + (cursor.clientWidth ) + "px";
    cursor.style.top = coordinate.y + (cursor.clientWidth ) + "px";
    cursorBlur.style.left = coordinate.x - (cursorBlur.clientWidth / 2) + "px"; 
    cursorBlur.style.top = coordinate.y - (cursorBlur.clientHeight / 2) + "px"; 
});

let h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        cursor.style.scale = 3;
        cursor.style.border = "1px solid #fff";
        cursor.style.backgroundColor = "transparent";
    });

    elem.addEventListener("mouseleave", function(){
        cursor.style.scale = 1;
        cursor.style.border = "0px solid #95C11E";
        cursor.style.backgroundColor = "#95C11E";
    });

});

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "150px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        scrub: 1
    }
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2

    }
});

gsap.from("#about-us img, #about-us-in", {
    y: 90,
    opacity: 0,
    duration: 0.6,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 1
    }

});

gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 0.6,
    // stagger: 0.1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 1
    }

});

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }

});

gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }

});

gsap.from("#page4 h1",{
    y: 50,
    scrollTrigger:{
        trigger: "#page4 h1",
        scroller: "body",
        // markers: true,
        start: "top 75%",
        end: "top 70%",
        scrub: 3
    }
});