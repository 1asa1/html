//ふわっと現れるボタン（トップには戻らない）
$(function(){
	

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if(scroll < 100){
			$('#top-go').fadeOut();
		}else{
			$('#top-go').fadeIn();
		}
		
		$(".hukidashi").each(function() {
		// 現在位置の取得とactiveをつける
		var position = $(this).offset().top;
		var windowHeight = $(window).height();

		if(scroll > position - windowHeight +200){
			$(this).addClass('active');
		}
		if(scroll < 100){
			$(this).removeClass('active');
		}
	});

	});
});

