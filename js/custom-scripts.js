$(document).ready(function () {

    $('.block-price .cost-currency li').click(function() {
        $('.block-price .cost-currency li').removeClass('active');
        $(this).addClass('active');
        $('.block-price .cost-value li').removeClass('active');
        $('.block-price .cost-value li').eq($(this).index()).addClass('active');
    });

    $('.accordion li').click(function() {
        if(!$(this).hasClass('active')){
            $(this).parent().find('.active').find('.element-content').fadeOut(0);
            $(this).siblings().removeClass('active');
            $(this).find('.element-content').fadeIn(600);
            $(this).addClass('active');
        }
    });

    $('.timer').eTimer({
        etType: 0,
        etDate: "14.04.2016.0.0",
        etShowSign: 1,
        etSep: ":",
        etTextColor: "#ffffff",
        etPaddingTB: 20,
        etPaddingLR: 20,
        etBackground: "transparent",
        etLastUnit: 3,
        etNumberSize: 56,
        etNumberColor: "white",
        etNumberPaddingTB: 0,
        etNumberPaddingLR: 0,
        etNumberBackground: "transparent",
    });

    $('.form-field').focus(function() {
        $(this).parent().find('.fa').fadeOut(0);
    });
    $('.form-field').blur(function() {
        $(this).parent().find('.fa').fadeIn(0);
    });


});
