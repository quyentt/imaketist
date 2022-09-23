$(document).ready(function() {

    var benefitHeight = $('.benefit-item:nth-child(2)').height();
    $('.benefit-item:nth-child(4)').css('top', benefitHeight + 22);

    var tab_attribs = [];
    $('.prices .title').each(function() {
        tab_attribs.push($(this).height());
    });



    $('.box-price').each(function() {
        $(this).find('.get-height').each(function(i) {
            $(this).height(tab_attribs[i]);
        })
    })





    $('.menu-icon').on('click', function() {
        $('.main-menu').toggleClass('show');
        $(this).toggleClass('fa-times');
    });
    $('.main-menu a').on('click', function() {
        $('.main-menu').toggleClass('show');
    })
})
var swiper = new Swiper(".title-swipper", {
    spaceBetween: 0,
    slidesPerView: "auto",

    freeMode: true,
    watchSlidesProgress: false,
    // simulateTouch: false

});
var swiper2 = new Swiper(".content-swipper", {
    autoHeight: true,
    spaceBetween: 0,
    navigation: false,
    thumbs: {
        swiper: swiper,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});
var swiper4 = new Swiper(".banner-slider", {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    freeMode: false,
    watchSlidesProgress: false,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});

var swiper3 = new Swiper(".custommer-slider", {
    slidesPerView: "auto",

    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    breakpoints: {
        821: {
            slidesPerView: 4,
        },
        650: {
            slidesPerView: 3,
        },

    },
});