//menu para telefono
function copyMenu(){
    //inside .dpt-cat to .departaments
    let dptCategory = document.querySelector('.dpt-menu');
    let dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    //inside nav to nav
    let mainNav = document.querySelector('.header-nav nav');
    let navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;

    //.header-top.wrapper to .thetop-nav
    let topNav = document.querySelector('.header-top .wrapper');
    let topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu(); 


//menu para celulares burguer
const menuButton = document.querySelector('.trigger'), 
    closeButton = document.querySelector('.t-close'),
    addClass = document.querySelector('.site');
menuButton.addEventListener('click',function(){
    addClass.classList.toggle('showmenu');
})

closeButton.addEventListener('click', function(){
    addClass.classList.remove('showmenu')
})

//submenu para teelfonod
const submenus = document.querySelectorAll('.has-child .icon-small');

submenus.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
  e.preventDefault();

  // Cerrar los otros submenús
  submenus.forEach((item) => {
    if (item !== this) {
      item.closest('.has-child').classList.remove('expand');
    }
  });

  // Alternar el submenú actual
  this.closest('.has-child').classList.toggle('expand');
}


//slider
const swiper = new Swiper('.swiper', {
  loop: true, 

  pagination: {
    el: '.swiper-pagination',
  },

});


//show search
const searchButton = document.querySelector('.t-search'),
      tClose = document.querySelector('.search-close'),
      showClass = document.querySelector('.site');
searchButton.addEventListener('click', function(){
  showClass.classList.toggle('showsearch')
})
tClose.addEventListener('click', function(){
  showClass.classList.remove('showsearch')
})


//show dpt menu
const dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
      dptClass = document.querySelector('.site');
dptButton.addEventListener('click', function(){
  dptClass.classList.toggle('showdpt')
})


//product image sliderrr
var productThumb = new Swiper('.small-image',{
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    481: {
      spaceBetween:32,
    }
  }
});

var productBig = new Swiper('.big-image',{
  loop:true,
  autoHeight: true,
  navigation: {
    nexEl: '.swiper-button-next',
    preEl: '.swiper-button-prev',
  },
  thumbs:{
    swiper: productThumb,
  }
})

//stock products bar witdh jsjjs
var stocks = document.querySelectorAll('.products .stock');
for(let x = 0; x < stocks.length; x++){
  let stock = stocks[x].dataset.stock,
  available = stocks[x].querySelector('.qty-available').innerHTML,
  sold = stocks[x].querySelector('.qty-sold'),innerHTML,
  percent = sold*100/stock;

  stocks[x].querySelector('.available').style.width = percent + ' %'
}
