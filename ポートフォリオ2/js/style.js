
//タブメニュー用
$(function(){
	$('#tabmenu li').on('click',function(){
		var index = $('#tabmenu li').index(this);

		$("#tabmenu li").removeClass('active');
		$(this).addClass('active');
		$('#tabbox section').removeClass('show');
		$('#tabbox section').eq(index).addClass('show');
	});


	//スマホ時のハンバーガーメニュー用の挙動
	$('#toggle').on('click',function(){
		if($(this).hasClass('toggle-active')){
			$(this).removeClass('toggle-active');
			$('#toggle-menu').fadeOut();
		}else{
			$(this).addClass('toggle-active');
			$('#toggle-menu').fadeIn();
		}
	})


	//ウインドウがリサイズされるたびに行う挙動
	$(window).resize(function(){
		//スマホ用ハンバーガーメニューでクリックしたときにメニュー自体を消す
		if($(window).width() < 767){
			$('#tabmenu li').on('click', function(){
				$('#toggle-menu').fadeOut();
				$('#toggle').removeClass('toggle-active');
			});
		}

		//スマホ用ハンバーガーメニューが出た状態からリサイズされた場合もろもろ消す
		if($(window).width() > 768){
			$('#toggle-menu').css('display', 'none');
			$('#toggle').removeClass('toggle-active');
		}
	})

})