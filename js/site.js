"use strict";

$(document).ready(function () {

    if ($("#wrapper").hasClass("gnb-folder")) {
        $("#gnb .btn-gnb-folder, .gnb-icon").on("click",function() {
            if ($("#wrapper").hasClass("gnb-folder")) {
                $("#wrapper").removeClass("gnb-folder");
            } else {
                $("#wrapper").addClass("gnb-folder");

            }
        });
    }


    $(".selectbox.writer").change(function () {
        $(".post-gallery-more .thumbnail").addClass("active");
    });

    if($('.post-gallery .swiper-container').length>0){
        var swiper = new Swiper('.post-gallery .swiper-container', {
            //width: 'auto',
            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
                formatFractionCurrent : function (number) {
                    if(number<10) {
                        return '0'+number;
                    }else{
                        return number;
                    }
                },
                formatFractionTotal: function (number) {
                    if(number<10) {
                        return '0'+number;
                    }else{
                        return number;
                    }
                }
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            fadeEffect: {
                crossFade: true
            }
        });
    }


});


/* Preloader and animations */
$(window).load(function () { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow-y': 'visible'});

    /* WOW Elements */
    if (typeof WOW == 'function') {
        new WOW().init();
    }

    /* Parallax Effects */
    if (!!$.prototype.enllax) {
        $(window).enllax();
    }

});
