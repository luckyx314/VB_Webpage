// // HIDING NAVS
// const navbar = document.getElementById("navbar");
// let lastScrollY = window.scrollY;
//
// window.addEventListener("scroll", () => {
//   hideNavOnScroll();
//   showNavOnLastScrollPos()
// })
//
//
// const showNavOnLastScrollPos = () => {
//   let scrollMaxY = window.scrollMaxY || (document.documentElement.scrollHeight - document.documentElement.clientHeight)
//   if (lastScrollY >= scrollMaxY) {
//     navbar.classList.remove("hidden");
//   }
// }


// CURSOR EVENTS
// let cursor = document.getElementById("cursor");
//
// document.addEventListener("mousemove", (e) => {
//   followMouse(e)
// })
//
//
// const followMouse = (e) => {
//   let x = e.clientX;
//   let y = e.clientY;
//
//   cursor.style.left = x + "px";
//   cursor.style.top = y + "px";
// }




const floatRightElements = document.querySelectorAll(".float-right");
const fadedElements = document.querySelectorAll(".fade");
const progbar = document.querySelectorAll(".progbar");
const magicBtn = document.getElementById("magic-btn");
const contact1 = document.querySelectorAll(".contact1")
const contact2 = document.querySelectorAll(".contact2")
const mapContainer = document.getElementById("map-container");


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  })
})
const progGrowObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("prog-grow");
    } else {
      entry.target.classList.remove("prog-grow");
    }
  })
})

floatRightElements.forEach((el) => observer.observe(el));
fadedElements.forEach((el) => observer.observe(el));
progbar.forEach((el) => progGrowObserver.observe(el));


const hideNavOnScroll = () => {
  if (lastScrollY < window.scrollY) {
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
  }
  lastScrollY = window.scrollY;
}

let isClicked = true;
magicBtn.addEventListener("click", () => {
  if (isClicked) {
    contact1.forEach(div => {
      div.classList.add("contact-hide");
    })
    contact2.forEach(div => {
      div.classList.add("contact-show");
    })
    isClicked = false;
  } else {
    contact1.forEach(div => {
      div.classList.remove("contact-hide");
    })
    contact2.forEach(div => {
      div.classList.remove("contact-show");
    })
    isClicked = true;
  }
})
