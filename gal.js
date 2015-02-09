$(document).ready(function() {
	if ($('#img_prev img').is('#img_prev img')) {
		$("#img_prev a").click(function(evt){ 
			evt.preventDefault(); 
			if ($(this).attr('href') != $('photo img').attr('src')) {
			var imgPath = $(this).attr('href'); 
			var oldImg = $("#photo img"); 
			var newImg = $("<img src='" + imgPath + "'>"); 
			oldImg.remove();
			$("#photo").prepend(newImg);
			oldImg.css({opacity: 0})
			$('#photo img').load(function(){
			$('#photo img').fadeIn(100);
			});

		};

	}); 
		$("#img_prev a:first").click();
	} else{
		$('#photo').html('<img src="assets/templates/base/noimage.jpg">');
	};

}); //   *** END ***
