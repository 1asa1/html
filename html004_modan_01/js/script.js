$(function(){
	$('#toggle').on('click', function(){

		$('.global-nav').slideToggle();
	});
})

$(function(){
	$(window).resize(function(){
		var size = $(window).width();

		if(size < 480){
			$('.global-nav').hide();
		}else{
			$('.global-nav').show();
		}


	})


})