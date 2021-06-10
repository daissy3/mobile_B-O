$(window).on('scroll', function () {
    if( $(window).scrollTop() > 100 && $(window).scrollTop() <600 ){
        $('.mainText').addClass('mainTextOpacity');
    }else{
        $('.mainText').removeClass('mainTextOpacity');
    }
});
$(window).on('scroll', function () {
    if( $(window).scrollTop() > 700 && $(window).scrollTop() <1300 ){
        $('.mainText2').addClass('mainTextOpacity2');
    }else{
        $('.mainText2').removeClass('mainTextOpacity2');
    }
});