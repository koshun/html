$( function() {
	
	var old_big = $("#zoom img").attr('src');
	
	$(".img-forecast img").hover(function() {
		/* Stuff to do when the mouse enters the element */
		var new_big = $(this).attr('src');
		$("#zoom img").attr('src', new_big);
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$("#zoom img").attr('src', old_big);
	
	});
});