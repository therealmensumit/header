$(document).ready(function(){
    $("ul li .drp").click(function(){
        $("ol").slideToggle();
    });

    $("li a").click(function(){
        $("a").removeClass("active");
        $(this).addClass("active");
    });
    $("li a#about").click(function(){
        $("a").removeClass("active");
        $(this).addClass("active");
    });
    $("li a#service").click(function(){
        $("a").removeClass("active");
        $(this).addClass("active");
    });
    $("li a#contact").click(function(){
        $("a").removeClass("active");
        $(this).addClass("active");
    });

    $(".bars i").click(function(){
        $("nav").fadeToggle();
        $(".fa-bars").hide(500);
        $(".fa-xmark").show(500);
    });
    $(".bars i.fa-xmark").click(function(){
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