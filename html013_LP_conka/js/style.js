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