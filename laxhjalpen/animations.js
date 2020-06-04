const container = document.querySelector(".pagecontainer");
const background = document.querySelector(".background");
const tl = new TimelineMax();

tl.fromTo(background, 1.2 , { y: "-100%" }, { y: "0%", ease: Power2.easeInOut });
tl.fromTo(container, 1.5, { y: "+100%" },{ y: "0%", ease: Power2.easeInOut }, "-=1.5");  
