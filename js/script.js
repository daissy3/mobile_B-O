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


 $('.hambergerMenu').on('click', function () {
    if( $('.slide_hide').css('display') === 'none'){
        $('.slide_hide').show();
        $('.slide_top').addClass('rotateTop2')
        $('.slide_top').removeClass('rotateTop1')
        $('.slide_bottom').addClass('rotateBottom2')
        $('.slide_bottom').removeClass('rotateBottom1')
        $('.menuScreen').removeClass('menuScreenT')
        $('.screenText').fadeOut(10)
        $('.subText').fadeOut(10)
    }else{
        $('.slide_hide').hide();
        $('.slide_top').addClass('rotateTop1')
        $('.slide_top').removeClass('rotateTop2')
        $('.slide_bottom').addClass('rotateBottom1')
        $('.slide_bottom').removeClass('rotateBottom2')
        $('.menuScreen').addClass('menuScreenT')
        $('.screenText').fadeIn(1000)
        $('.subText').fadeIn(1000)
     }
 });

