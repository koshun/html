$(function(){
	
	$(".lang").click(function(){
		$(".lang-choce").toggleClass('hide');
	});


	$(".lang-choce li").click(function(){

		var oldLang = $(".lang").text();
		var newLang = $(this).text();

		$(".lang").text(newLang);
		$(this).text(oldLang);
		$(".lang-choce").addClass('hide');
	});
});