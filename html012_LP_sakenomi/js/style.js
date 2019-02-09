$('.slider').slick({
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,
    arrows: false,
    nextArrow:'display:none',
    prevArrow:'display:none',
});

// ハンバーガーメニューを作るjquery
$(function(){
    $('.toggle').on('click', function(){
        $('nav').slideToggle();
        $(this).toggleClass('active');
        $('nav').toggleClass('open').removeClass('close');
    });
});

//ハンバーガーメニュー内のページ内リンクがクリックされたらハンバーガーメニューを閉じるためのjquery
$(function(){
    //変更サイズである767より小さければ
    //これを入れないと大きくても消えて出てくる
    $('.toggle_menu a').on('click',function(){
        if(window.innerWidth < 767){
            $('.toggle').click();
        }
    });

});


// dtをクリックすると隠されていたddが開く。ついでに横の△も変わる
$(function(){
    $('dt').on('click', function(){
        if($(this).hasClass('down')){
            $(this).next('dd').slideToggle();
            $(this).removeClass('down').addClass('up');
        }else{
            $(this).next('dd').slideToggle();
            $(this).removeClass('up').addClass('down');
        }

    });
})

var scroll = new SmoothScroll(
    'a[href*="#"]',
    {header: '[data-scroll-header]'}

 );