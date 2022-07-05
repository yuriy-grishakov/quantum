// photo gallery 


var swiper = new Swiper(".mySwiper", {
    loop: false,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    loop: false,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});


// quantity


$(function() {
 
  (function quantityProducts() {
    var $quantityArrowMinus = $(".quantity__arrow-minus");
    var $quantityArrowPlus = $(".quantity__arrow-plus");
    var $quantityNum = $(".quantity__num");
 
    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);
 
    function quantityMinus() {
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }
 
    function quantityPlus() {
      $quantityNum.val(+$quantityNum.val() + 1);
    }
  })();
});



//  tabs

const tabs  = document.getElementById('info-tabs');
const description = document.getElementById('info-content-wrap');


const changeClass = el => {
    for(let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.tab;
    changeClass(e.target);
    for(let i = 0; i < description.children.length; i++) {
        description.children[i].classList.remove('active');
        if(description.children[i].dataset.content == currTab) {
            description.children[i].classList.add('active');
        }
    }
});









