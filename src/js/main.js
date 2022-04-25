let $nav;
let $burgerBtn;
let $allNavItems;
let $navBtnBars;
let $allSections;
let $footerYear;
let $navD;
let $sectionOne;
const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px",
};

const prepareDOMElemets = () => {
  $nav = document.querySelector(".navigationM");
  $navD = document.querySelector(".navigationD");
  $sectionOne = document.querySelector(".navBlack");
  $burgerBtn = document.querySelector(".burger-btn");
  $allNavItems = document.querySelectorAll(".nav__mobile");
  $navBtnBars = document.querySelector(".burger-btn__bars");
  $allSections = document.querySelectorAll(".section");
  $footerYear = document.querySelector(".footer__year");
};

const prepareDOMEvents = () => {
  const sectionOneObserver = new IntersectionObserver(function (entries, sectionOneObserver) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        $navD.classList.add("nav-scrolled");
      } else {
        $navD.classList.remove("nav-scrolled");
      }
    });
  }, sectionOneOptions);

  const handleNav = () => {
    $nav.classList.toggle("navigationM--active");
    $navBtnBars.classList.remove("black-bars-color");
    $allNavItems.forEach((item) => {
      item.addEventListener("click", () => {
        $nav.classList.remove("navigationM--active");
      });
    });

    handleNavItemsAnimation();
  };

  const handleNavItemsAnimation = () => {
    let deleyTime = 0;

    $allNavItems.forEach((item) => {
      item.classList.toggle("nav-items-animation");
      item.style.animationDelay = "." + deleyTime + "s";
      deleyTime++;
    });
  };

  const handleCurrentYear = () => {
    const year = new Date().getFullYear();
    $footerYear.innerText = year;
  };

  const handleObserver = () => {
    const currentSection = window.scrollY;

    $allSections.forEach((section) => {
      if (section.classList.contains("white-section") && section.offsetTop <= currentSection + 60) {
        $navBtnBars.classList.add("black-bars-color");
      } else if (!section.classList.contains("white-section") && section.offsetTop <= currentSection + 60) {
        $navBtnBars.classList.remove("black-bars-color");
      }
    });
  };

  //I was trying to do it with API, but it is not working,
  //because google maps is only for developers, and I did with iframe.
  // const initMap = () => {
  //     let location = {lat: 49.879350, lng: 21.411597};
  //     let map = new google.maps.Map(document.getElementById("map"),{
  //         zoom: 14,
  //         center: location
  //     });
  //     let marker = new google.maps.Marker({
  //         position: location,
  //         map: map
  //     })
  // }
  sectionOneObserver.observe($sectionOne);
  handleCurrentYear();
  window.addEventListener("scroll", handleObserver);
  $burgerBtn.addEventListener("click", handleNav);
  window.addEventListener("load", AOS.refresh);
  // initMap();
};

const main = () => {
  prepareDOMElemets();
  prepareDOMEvents();
};

document.addEventListener("DOMContentLoaded", main);
