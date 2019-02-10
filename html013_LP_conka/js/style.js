$(function(){
	
	$(window).scroll(function(){
		var y = $(window).scrollTop();
		var deru = 100

		if(y < deru){
			console.log("100より小さい");
			console.log(y);
			$('#top-go').fadeOut();
		}else{
			console.log("100より大きい");
			console.log(y-10);
			$('#top-go').fadeIn();
		}
		
	})

})