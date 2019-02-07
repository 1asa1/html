$(function(){
	$('a[href^="#"]').click(function(){
		var speed = 500; //速さを入力、変更可能
		var href = $(this).attr("href") //クリックされた部分のhrefを変数hrefに入力
		var target = $(href == "#" || href==""?'html':href); //idを入力してるっぽいけど後半がよくわからん
		var position = target.offset().top; //topからのtargetの位置をpositionに入力
		//ここまで変数への代入
		$("html, body").animate({scrollTop:position},speed,"swing");
		return false;
	});
});

$(function(){
    $(window).scroll(function (){
        $('.fade-in').css('opacity','0');
        $('.fade-in').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 100){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
});