$(document).ready(function(){






    $('#home').click(function () {

        $('html, body').animate({
            scrollTop: 0},1100);

    });

    $('#art').click(function () {


        $('html, body').animate({
            scrollTop: $("#artPage").offset().top
        },1100);
    });

    $('#design').click(function () {

        $('html, body').animate({
            scrollTop: $("#designPage").offset().top
        },1100);
    });

    $('#journal').click(function () {

        $('html, body').animate({
            scrollTop: $("#journalPage").offset().top
        },1100);
    });


    $('#about').click(function () {

        $('html, body').animate({
            scrollTop: $("#aboutPage").offset().top
        },1100);
    });

    $('#travel').click(function () {

        $('html, body').animate({
            scrollTop: $("#travelPage").offset().top
        },1100);
    });


    $('#fashion').click(function () {

        $('html, body').animate({
            scrollTop: $("#fashionPage").offset().top
        },1100);
    });



    var rellax = new Rellax('.landingImage');
    var rellax = new Rellax('.landingText');












});