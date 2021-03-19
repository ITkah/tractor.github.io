$('.phone').on('input', function() {
    $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
});

var year = new Date().getFullYear();
$(".year").text(year);

$(".call_menu").on("click", function() {
    $(".header_nav").slideToggle(250);
});

$("nav ul li").each(function() {
    this_li = $(this);
    if ($(this_li).find("ul").length > 0) {
        $(this_li).append('<div class="arrow_mob"></div>');
    }
});

$(".arrow_mob").on("click", function() {
    $(this).siblings(".sub-menu").slideToggle(250);
});

$(".form_feedback").submit(function(e) {
    e.preventDefault();
    let form_data = $(this).serializeArray();
    $.ajax({
        type: "POST",
        url: "../../mail.php",
        data: form_data,
        success: function(response) {
            console.log(response);
            $(".thank_click").click();
        },
        error: function(error) {
            $(".thank_click").click();
        }
    });
    return false;
});

const swiper = new Swiper('.swiper-container', {
    loop: true,
    spaceBetween: 20,
    grabCursor: true,
    speed: 800,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'fraction',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

$.fn.extend({
    toggleText: function(a, b) {
        return this.text(this.text() == b ? a : b);
    }
});


$('.accordeon .acc-head').on('click', function() {
    $('.accordeon .acc-body').not($(this).next()).slideUp(200).siblings(".acc-head").children("span").text("+");
    $(this).children("span").toggleText("-", "+")
    $(this).next().slideToggle(200);
});

var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 20,
    slidesPerView: 6,
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
        },
        // when window width is >= 480px
        576: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1100: {
            slidesPerView: 5,
        }
    },
});
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop: true,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs,
    },
});