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

    $('.portfolio-slick').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: true,
        appendArrows: '.portfolio-control',
        prevArrow: '.left-control',
        nextArrow: '.right-control'
    });

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
    $('.form-field').blur(function(){
        if(!$(this).val()) {
            $(this).parent().find('.fa').css('display', 'block');
        }
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

    $('.close-marker').click(function() {
        $(this).parents('.modal-window').fadeOut();
    });

    $('.footer .phone-number .to-change').click(function() {
        $('.footer-hint').fadeToggle();
    });

    /***** modal windows *****/

    $('.mz-form .form-submit').click(function() {
        $(this).parents('.mz-form').find('.question').fadeOut();
        $(this).parents('.mz-form').find('.answer').fadeIn();
    });

    /* window-callback */
    $('.get-callback').click(function () {
        $('.window-callback').fadeIn();
    });

    $('.window-callback').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.form-callback')).length) $('.window-callback').fadeOut();
        if ($target.hasClass('close-marker')) $('.window-callback').fadeOut();
    });

    $('.icon-arrow-down').click(function() {
        $('.image-of-select ul').fadeToggle();
    });

    $('.image-of-select ul li').click(function() {
        var chosenId = $(this).index();
        var thisOptions = $($('#select-time option'));
        $(thisOptions).each(function(id, option) {
            if(id == chosenId){
                $(option).attr('selected', 'selected');
            } else {
                $(option).attr('selected', false);
            }
        });
        $('#select-time option').eq(chosenId).attr('selected', 'selected');
        $('.image-of-select .form-field').html($(this).html());
        $('.image-of-select ul').fadeToggle();
    });
    //////////////////////

    /* window-make-order */
    $('.send-order').click(function () {
        $('.window-make-order').fadeIn();
    });
    $('.window-make-order').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.form-make-order')).length) $('.window-make-order').fadeOut();
        if ($target.hasClass('close-marker')) $('.window-make-order').fadeOut();
    });
    //////////////////////

    /* window-discuss */
    $('.ask-question').click(function () {
        $('.window-discuss').fadeIn();
    });
    $('.window-discuss').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.form-discuss')).length) $('.window-discuss').fadeOut();
        if ($target.hasClass('close-marker')) $('.window-discuss').fadeOut();
    });

    /////////////////////


});
