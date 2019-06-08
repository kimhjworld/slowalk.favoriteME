"use strict";

$(document).ready(function () {

    $("#gnb .btn-gnb-folder").on("click",function() {
        if ($("#wrapper").hasClass("gnb-folder")) {
            $("#wrapper").removeClass("gnb-folder");
        } else {
            $("#wrapper").addClass("gnb-folder");

        }
    });


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
