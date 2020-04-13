//const indexcontainer = document.querySelector(".index-container");

//const tl = new TimelineMax();
//tl.fromTo( indexcontainer, 7, { opacity: "0" }, { opacity: "100", ease: Power2.easeInOut });



//dropdown on hover
window.addEventListener("load", function () {
  const dropdown = document.querySelector(".dropdown");
  const dropdownmenu = document.querySelector(".dropdown-menu");
  const dropdowntoggle = document.querySelector(".dropdown-toggle");

  dropdown.addEventListener("mouseover", (event) => {
    dropdown.classList.add("show");
    dropdownmenu.classList.add("show");
    dropdowntoggle.setAttribute("aria-expanded", "true");
  });

  dropdown.addEventListener("mouseout", (event) => {
    dropdown.classList.remove("show");
    dropdownmenu.classList.remove("show");
    dropdowntoggle.setAttribute("aria-expanded", "false");
  });
});
