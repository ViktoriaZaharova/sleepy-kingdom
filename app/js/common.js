$('.reviews-slider').slick({
    slidesToShow: 2,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

// accordeon
function accordeon() {
    var panel = $('.panel_heading');

    $('.panel_heading-btn').on('click', function (e) {
        e.preventDefault();
        $(this).parents('.panel_heading').toggleClass('in').find('.block_hover').slideToggle();
        if ($(this).parents('.panel_heading').hasClass('in')) {
            $('.in').find('.panel_heading-btn').html('СВЕРНУТЬ ОПИСАНИЕ');
        } else {
            $(this).html('Развернуть ОПИСАНИЕ');
        }
    });
    if (panel.hasClass('in')) {
        $('.in').find('.block_hover').slideDown();
    }

}

accordeon();


