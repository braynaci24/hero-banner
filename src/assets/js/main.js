$(document).ready(function () {
    $('.owl-carousel-product').owlCarousel({
        dots: false,
        nav: true,
        loop: true,
        navText: ["", "<div class='nav-button owl-next product-slider-next'><img src='https://cdn.shopify.com/s/files/1/0696/4858/0886/files/right-arrow.png?v=1671830421' class='next-arrow-image'></div>"],
        responsive: {
            0: {
                items: 1,
                stagePadding: 25,
                loop: false,
                nav: false,
            },
            600: {
                items: 2,
                loop: false,
                nav: false,
            },
            1000: {
                items: 2,
            }
        }
    })
});