$(document).ready(function() {
    $("ul li .drp").click(function() {
        $("ol").slideToggle();
    });

    $("li a").click(function() {
        $("a").removeClass("active");
        $(this).addClass("active");
    });
    $("li a#about").click(function() {
        $("a").removeClass("active");
        $(this).addClass("active");
    });
    $("li a#service").click(function() {
        $("a").removeClass("active");
        $(this).addClass("active");
    });
    $("li a#contact").click(function() {
        $("a").removeClass("active");
        $(this).addClass("active");
    });

    $(".bars i").click(function() {
        $("nav").fadeToggle();
        $(".fa-bars").hide(500);
        $(".fa-xmark").show(500);
    });
    $(".bars i.fa-xmark").click(function() {
        $(".fa-bars").show(500);
        $(".fa-xmark").hide(500);
    });


    /* $(".drp").click(function(){
        $(".ar_down").hide(500);
    });
    $(".drp").click(function(){
        $(".ar_up").show(500);
    });
    $(".drp").click(function(){
        $(".ar_up").hide(500);
    });
    $(".drp").click(function(){
        $(".ar_down").show(500);
    }); */
});


var swiper = new Swiper(".ban-slide ", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


var swiper = new Swiper(".slide", {
    slidesPerView: 1,
    // slidesPerGroup: 1,
    spaceBetween: 30,
    loop: true,
    freeMode: true,
    autoPlay: true,
    speed: 700,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".slider .swiper-button-next",
        prevEl: ".slider .swiper-button-prev",

    },
    /* pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }, */
    breakpoints: {
        500: {
            slidesPerView: 4,
        },
    }
});