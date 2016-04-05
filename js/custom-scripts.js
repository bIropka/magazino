$(document).ready(function () {

    $('.block-timer .to-run').click(function() {
        $('#timer').countDown({
            targetOffset: {
                'day': 		14,
                'month': 	0,
                'year': 	0,
                'hour': 	0,
                'min': 		0,
                'sec': 		0
            },
            omitWeeks: true
        });
        $(this).attr('disabled', true);
        $(this).css('background','#990000');
    });

    $('.block-price .cost-currency li').click(function() {
        $('.block-price .cost-currency li').removeClass('active');
        $(this).addClass('active');
        $('.block-price .cost-value li').removeClass('active');
        $('.block-price .cost-value li').eq($(this).index()).addClass('active');
    });

    $('.accordion li').click(function () {
        if (!$(this).hasClass('active')) {
            $(this).siblings('.accordion .active').find('.element-content').animate({
                height: 'hide'
            }, 1000);
            $(this).find('.element-content').animate({
                height: 'show'
            }, 1000);
            $(this).siblings('.accordion .active').removeClass('active');
            $(this).addClass('active');
        }
    });

    $('.portfolio-slick').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: true,
        appendArrows: '.portfolio-control',
        prevArrow: '.left-control',
        nextArrow: '.right-control',
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    arrows: false,
                    appendArrows: '',
                    prevArrow: '',
                    nextArrow: ''
                }
            }
        ]
    });

    $('.comments-slider').slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 6000,
            arrows: false,
            appendArrows: '',
            prevArrow: '',
            nextArrow: ''
    }
    );

    $('.comments-slider').on('setPosition', function() {
        $('.invisible-part').animate({
            height: 'hide'
        }, 300);
        $('.comments-slider .icon-show-more').removeClass('opened-block');
    });

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
            $(this).siblings('.invisible-part').animate({
                height: 'hide'
            }, 1000);
        } else {
            $(this).siblings('.invisible-part').animate({
                height: 'show'
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
    $('.header .phone-number a').click(function() {
        $('.header-hint').fadeToggle();
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
    $('.header .promo-text a').click(function () {
        $('.window-discuss').fadeIn();
    });
    $('.window-discuss').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.form-discuss')).length) $('.window-discuss').fadeOut();
        if ($target.hasClass('close-marker')) $('.window-discuss').fadeOut();
    });

    /////////////////////


});
