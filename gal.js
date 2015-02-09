$(document).ready(function(){
	var $photo = $('#photo');
	
	//проверка на наличие превью, вывод заглушки при отсутствии
	if ($('#img_prev img').is('#img_prev img')){
		//При клике по ссылке с превьюшкой
		$("#img_prev a").on('click', function(event){
			var $this = $(this),
				newImgSrc = $this.attr('href'),
				$oldImg = $photo.find('img');
			
			event.preventDefault();
			
			//Если текущая не активна
			if (newImgSrc != $oldImg.attr('src')){
				var $newImg = $('<img />');
				
				$newImg.on('load', function(){
					//
					$oldImg.fadeOut(300, function(){
						$oldImg.remove();
						$photo.prepend($newImg);
						
						$newImg.fadeIn(1000);
					});
				}).css({opacity: 0}).attr('src', newImgSrc);
			}
		});
		
		$("#img_prev a:first").trigger('click');
	}else{
		$photo.html('<img src="assets/templates/base/noimage.jpg">');
	}
});
// END
