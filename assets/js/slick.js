$(document).ready(function() {

    if ($('#endpoint-samc-2016').length === 0) {
        return;
    }

    $('.slider').slick({
        lazyLoad: 'ondemand',
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        speed: 200,
        fade: true,
    });
});
