
$(function(){
	

	$(window).scroll(function(){  //スクロールするたびにこれを繰り返す
		var scroll = $(window).scrollTop(); //現在のスクロール位置を取得
		var windowHeight = $(window).height(); //ウインドウの高さを取得

		//ふわっと現れるボタン（トップには戻らない）
		$('#top-go').hide;
		if(scroll < 100){
			$('#top-go').fadeOut();
		}else{
			$('#top-go').fadeIn();
		}
		
		$(".hukidashi").each(function() {
		// 現在位置の取得とactiveをつける
			var position = $(this).offset().top; // 横からスライドインするやつの
			if(scroll > position - windowHeight + 100){
					$(this).addClass('active');
				}
			if(scroll < 100){
				$(this).removeClass('active');
			}
		});

		$('.fadein').each(function(){
			//現在位置の取得とactiveをつける
			var fadepos = $(this).offset().top; //下からフェードインするやつの
			if(scroll > fadepos - windowHeight + 50){
				$(this).addClass('fadeactive');
			}
			if(scroll < 100){
				$(this).removeClass('fadeactive');
			}

		});

		$('.kakudai').each(function(){
			//現在位置の取得とactiveをつける
			var kakudaipos = $(this).offset().top; //下からフェードインするやつの
			if(scroll > kakudaipos - windowHeight + 50){
				$(this).addClass('kakudaiactive');
			}
			if(scroll < 100){
				$(this).removeClass('kakudaiactive');
			}

		});

	});
});

