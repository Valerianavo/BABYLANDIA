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

