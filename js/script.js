
// =============== Smooth Scrolling Link ================

// // Select all links with hashes
// $('a[href*="#"]')
//     // Remove links that don't actually link to anything
//     .not('[href="#"]')
//     .not('[href="#0"]')
//     .click(function(event) {
//         // On-page links
//         if (
//             location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
//             &&
//             location.hostname == this.hostname
//         ) {
//             // Figure out element to scroll to
//             var target = $(this.hash);
//             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//             // Does a scroll target exist?
//             if (target.length) {
//                 // Only prevent default if animation is actually gonna happen
//                 event.preventDefault();
//                 $('html, body').animate({
//                     scrollTop: target.offset().top -10
//                 }, 1000, function() {
//                     // Callback after animation
//                     // Must change focus!
//                     var $target = $(target);
//                     $target.focus();
//                     if ($target.is(":focus")) { // Checking if the target was focused
//                         return false;
//                     } else {
//                         $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//                         $target.focus(); // Set focus again
//                     };
//                 });
//             }
//         }
//     });
//





// ========== Preloader ==========

// $(window).on('load', function () {
//     $('.preloader-part').fadeOut();
// });

setTimeout(function(){
    $(".preloader-part").fadeOut();
},3000);



// =========MixItUp Link=========
var mixer = mixitup('.box');


// ===========AOS Link===========
AOS.init();



// ============= Color Switcher ===========

$(".red").click(function(){
    $(".switcher").css("color","red")
    $(".div-bg").css("background","red")
    $(".head").addClass("ami")
})

$(".yellow").click(function(){
    $(".switcher").css("color","yellow")
    $(".div-bg").css("background","yellow")
    $(".head").addClass("tmi")
    $(".trd").addClass("new")
})

$(".green").click(function(){
    $(".switcher").css("color","#58FF26")
    $(".div-bg").css("background","#58FF26")
})

$(".violet").click(function(){
    $(".switcher").css("color","violet")
    $(".div-bg").css("background","violet")
})




// =============Menu bar click============

$(".navbar-collapse a").click(function () {
    $(".navbar-collapse").collapse('hide')
})


// ======== fixed menu. ===========

$(window).scroll(function () {
    $scrollamount = $(window).scrollTop();

    if ($scrollamount > 40) {
        $(".menu").addClass("fixed");
    } else {
        $(".menu").removeClass("fixed");
    }

    if ($scrollamount > 1000) {
        $(".btnlast").fadeIn();
    } else {
        $(".btnlast").fadeOut();
    }

});

//Back to top button
$(".btnlast").click(function () {
    $("html,body").animate({
        scrollTop: 0
    }, 100)
});

// ============ Slick slider Banner =============

$('#banner-part').slick({
    dots: true,
    infinite: true,
    speed: 1300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<i class="fa fa-arrow-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-arrow-right next" aria-hidden="true"></i>',
    autoplay: true,
    fade: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }


        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});



// ========== slider for about part ==========

$('.item2').slick({
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    vertical: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});



// ========Testimonial image slider=======
$('#testimonial-part .item-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    arrows: true,
    centerMode: true,
    centerPadding: 0,
    autoplay: false,
    prevArrow: '<i class="fa fa-arrow-up prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-arrow-down next" aria-hidden="true"></i>',
    asNavFor: '#testimonial-part .head-line',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});





// ============ testimonial text =============

$('#testimonial-part .head-line').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    asNavFor: '#testimonial-part .item-slider',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll:1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});




// ========Company slider=======
$('#company-part .company-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: false,
    arrows: true,
    centerMode: true,
    centerPadding: 0,
    autoplay: true,
    prevArrow: '<i class="fa fa-arrow-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-arrow-right next" aria-hidden="true"></i>',
    asNavFor: '#testimonial-part .head-line',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});





// ========Counter Link=========
$('.counter').counterUp({
    delay: 10,
    time: 1000
});



// ========Veno Box Link=========
$('.venobox').venobox();



// =======parallax Js========
$('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});






