$(function(){
	$('#tabmenu li').on('click',function(){
		var index = $('#tabmenu li').index(this);

		$("#tabmenu li").removeClass('active');
		$(this).addClass('active');
		$('#tabbox section').removeClass('show');
		$('#tabbox section').eq(index).addClass('show');
		console.log(index);
	});
})