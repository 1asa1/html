
// トップへ戻るがふわっと浮き出るはず
$(function(){
	
	$(window).scroll(function(){
		var y = $(window).scrollTop();
		var deru = 100

		if(y < deru){
			$('#top-go').fadeOut();
		}else{
			$('#top-go').fadeIn();
		}
	})
})

//トップへ勢いよく戻るはず

$(function(){
	$('#top-go').click(function(){
		$('body, html').animate({scrollTop:0}, 500, 'swing');
		return false;
	})
})


// dd dtのあれこれそれ
