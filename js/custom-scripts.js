$(document).ready(function () {

    /**** accordion ****/
    $( '.accordion' ).accordion(

    );

    jQuery('.timer').eTimer({
        etType: 0,
        etDate: "01.04.2016.0.0",
        etShowSign: 1,
        etSep: ":",
        etTextColor: "#ffffff",
        etPaddingTB: 15,
        etPaddingLR: 15,
        etBackground: "transparent",
        etBorderColor: "white",
        etShadow: " 0px 0px 0px 0px #333333",
        etLastUnit: 3,
        etNumberSize: 48,
        etNumberColor: "white",
        etNumberPaddingTB: 0,
        etNumberPaddingLR: 2,
        etNumberBackground: "transparent",
        etNumberBorderSize: 0,
        etNumberBorderRadius: 5,
        etNumberBorderColor: "white"
    });


});
