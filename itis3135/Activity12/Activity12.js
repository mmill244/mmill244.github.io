$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 300,
        slideMargin: 20,
        randomStart: true,
        moveSlides: 1,
        captions: true,
        speed: 3000,
        pagerType: 'short'
    });
});