$(document).ready(function() {
	// проверка есть ли картинки, иначе ставим заглушку
	if ($('#img_prev img').is('#img_prev img')) {

		$("#img_prev a").click(function(event){ 
			var $imgPath = $(this).attr('href');
				$bigImg = $("#photo img"); 

			// если текущая не активна
			event.preventDefault(); 

			if ($imgPath != $bigImg.attr('src')) {
				 
				// замена src у большой картинки на href от превью
				$bigImg.attr('src' , $imgPath);
				// анимация появления
				$bigImg.load(function(){
				    $bigImg.fadeIn(100);
				});

		};

	}); 
		// увеличиваем первую картинку сразу
		$("#img_prev a:first").trigger('click');
	} else{
		// заглушка
		$('#photo').html('<img src="assets/templates/base/noimage.jpg">');
	};

}); //   *** END ***
