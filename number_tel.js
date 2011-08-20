(function ($) {
	Drupal.behaviors.showTel = {
		attach:function(context) {
			$('div.telephone-number a.telphone-number-value').click(function (e) {
				e.preventDefault();
				if (!$(this).hasClass('loaded-number')) {
				  var mask = "<div class='mask-value'>" + $(this).attr('value') + "</div>";	
				  $(this).parent('span.value').append(mask);
				}
				$(this).addClass('loaded-number');
			});
		}
	};
})(jQuery);
