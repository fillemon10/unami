//const indexcontainer = document.querySelector(".index-container");

//const tl = new TimelineMax();
//tl.fromTo( indexcontainer, 7, { opacity: "0" }, { opacity: "100", ease: Power2.easeInOut });

//dropdown on hover
window.addEventListener("load", function () {
  const dropdown1 = document.querySelector(".dropdown1");
  const dropdownmenu1 = document.querySelector(".dropdown-menu1");
  const dropdowntoggle1 = document.querySelector(".dropdown-toggle1");

  dropdown1.addEventListener("mouseover", (event) => {
    dropdown1.classList.add("show");
    dropdownmenu1.classList.add("show");
    dropdowntoggle1.setAttribute("aria-expanded", "true");
  });

  dropdown1.addEventListener("mouseout", (event) => {
    dropdown1.classList.remove("show");
    dropdownmenu1.classList.remove("show");
    dropdowntoggle1.setAttribute("aria-expanded", "false");
  });
  const dropdown2 = document.querySelector(".dropdown2");
  const dropdownmenu2 = document.querySelector(".dropdown-menu2");
  const dropdowntoggle2 = document.querySelector(".dropdown-toggle2");

  dropdown2.addEventListener("mouseover", (event) => {
    dropdown2.classList.add("show");
    dropdownmenu2.classList.add("show");
    dropdowntoggle2.setAttribute("aria-expanded", "true");
  });

  dropdown2.addEventListener("mouseout", (event) => {
    dropdown2.classList.remove("show");
    dropdownmenu2.classList.remove("show");
    dropdowntoggle2.setAttribute("aria-expanded", "false");
  });

  dropdown1.onclick = function () {
    location.href = "gallery.html";
  };
  dropdown2.onclick = function () {
    location.href = "about.html";
  };
});

includeHTML();