const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  //Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");

});

//Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());
// initialize swiper 
const swiper = new Swiper('.slider-wrapper',{
  loop:true,
  spaceBetween:25,
  //if we need pagination
  pagination:{
    el:'.swiper-pagination',
    clickable: true,
    dynamicBullets: true,

  },
  //Navigation arrows
  navigation: {
    nextE1:'.swiper-button-next',
    nextE1:'swiper-button-prev'
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768:{
      slidesPerView: 2
    },
    1024:{
      slidsPerView: 3
    }

    }
  

});  

