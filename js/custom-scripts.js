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
        etNumberBackground: "transparent"
    });

    /*$('.comments-slider').slick({
        arrows: false,
        autoplay: false,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });*/

    $('.comments-slider-controls li').click(function() {
        var currentChoice = $(this).index();
        $('.comments-slider-controls li').removeClass('active');
        $(this).addClass('active');
        changeComment(currentChoice);
    });

    function changeComment(id) {
        $('.comments-slide').css('display', 'none');
        $('.comments-slide').eq(id).fadeIn();
    }

    $('.form-field').focus(function() {
        $(this).parent().find('.fa').css('display', 'none');
    });
    $('.form-field').blur(function() {
        $(this).parent().find('.fa').css('display', 'block');
    });

    $('.icon-show-more').click(function(){
        if($(this).hasClass('opened-block')) {
            $(this).siblings('p').animate({
                height: '250px'
            }, 1000);
        } else {
            $(this).siblings('p').animate({
                height: '100%'
            }, 1000);
        }

        $(this).toggleClass('opened-block');
    });


});
