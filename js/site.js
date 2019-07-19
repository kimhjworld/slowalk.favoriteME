"use strict";

$(document).ready(function () {


    $("#gnb .btn-gnb-folder, .gnb-icon").on("click",function() {
        if ($("#wrapper").hasClass("gnb-folder")) {
            //gnb 펼치기
            $("#wrapper").removeClass("gnb-folder");
            if($("body").hasClass("is-mobile")){
                console.log("Sd");
                $("body, html").css('overflow', 'hidden');
            }
        } else {
            //gnb 접기
            $("#wrapper").addClass("gnb-folder");
            if($("body").hasClass("is-mobile")){
                console.log("Sd");
                $("body, html").css('overflow', 'auto');
            }


        }
    });



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
            },
            // Responsive breakpoints
            breakpoints: {
                1200: {
                    //width: '100%',
                    init: true
                }

            }
        });
    }


});

function hidePopup(targetID) {
    $(targetID).removeClass("active");
}

function showPopup(targetID) {
    $(targetID).addClass("active");
}

function responsiveWeb() {
    var windowWidth = $( window ).width();
    if(windowWidth < 1200) { //mobile
        $("body")
            .removeClass("is-pc")
            .addClass("is-mobile");
        $("#wrapper").addClass("gnb-folder");
    } else { //pc
        $("body")
            .removeClass("is-mobile")
            .addClass("is-pc");

        if($("#post, #post-detail, #post-list").length > 0 ){
            $("#wrapper").addClass("gnb-folder");
        }else{
            $("#wrapper").removeClass("gnb-folder");
        }

    }

}

/* Preloader and animations */
$(window).load(function () { // makes sure the whole site is loaded

    responsiveWeb();

    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.

    /* WOW Elements */
    if (typeof WOW == 'function') {
        new WOW().init();
    }

    /* Parallax Effects */
    if (!!$.prototype.enllax) {
        $(window).enllax();
    }

});


$( window ).resize(function() {
    responsiveWeb();
});


