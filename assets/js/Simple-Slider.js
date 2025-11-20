document.addEventListener("DOMContentLoaded", function() {

    // Initializing the swiper plugin for the slider.
    // Read more here: http://idangero.us/swiper/api/
    
    var mySwiper = new Swiper('.simple-slider .swiper-container', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 2,
        centeredSlides: false,
        keyboard: {
            enabled: true,
            onlyInViewport: true
        },
        pagination: {
            el: '.simple-slider .swiper-pagination',
            clickable: true
        },
        paginationClickable: true,
        navigation: {
            nextEl: '.simple-slider .swiper-button-next',
            prevEl: '.simple-slider .swiper-button-prev'
        }
    });
    
});