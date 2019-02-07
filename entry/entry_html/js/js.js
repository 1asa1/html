$(document).ready(function(){

var _window = $(window),　// windowに代入する
    _header = $('nav'),
    heroBottom;

_window.on('scroll',function(){　// スクロールした場合の処理として
    heroBottom = $('.header_p').height();
    if(_window.scrollTop() > heroBottom){　// スクロールした量がheroBottomに代入してあるもの＝.header_pの高さを越えたら
        _header.addClass('fixed'); //クラスを付与する
    }
    else{
        _header.removeClass('fixed'); //そうじゃないならクラスを付与しない
    }
});


});


/*トップに戻るボタン*/
$(function(){
    var topBtn = $('.pagetop');
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
        //ボタンの表示方法
            topBtn.fadeIn();
        } else {
        //ボタンの非表示方法
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,  html').animate({
            scrollTop: 0
        },   500);
        return false;
    });
/*トップに戻るボタンここまで*/
});
