$(window).on('scroll', function () {
    if( $(window).scrollTop() > 200  ){
        $('.mainText').addClass('mainTextOpacity');
    }else{
        $('.mainText').removeClass('mainTextOpacity');
    }
});
$(window).on('scroll', function () {
    if( $(window).scrollTop() > 900  ){
        $('.mainText2').addClass('mainTextOpacity2');
    }else{
        $('.mainText2').removeClass('mainTextOpacity2');
    }
});
$(window).on('scroll', function () {
    if( $(window).scrollTop() > 1450  ){
        $('.mainNav').addClass('asd');
        $('.slide').addClass('asdsfd');
        $('.cartIcon').addClass('vsd');
    }else{
        $('.mainNav').removeClass('asd');
        $('.slide').removeClass('asdsfd');
        $('.cartIcon').removeClass('vsd');
    }
});

$('.countSel').on('click', function () {
    if( $('.countryList').css('display') === 'none'){
        $('.countryList').show();
    }else{
        $('.countryList').hide();
     }
 });

 $('.langSel').on('click', function () {
    if( $('.languageList').css('display') === 'none'){
        $('.languageList').show();
    }else{
        $('.languageList').hide();
     }
 });
