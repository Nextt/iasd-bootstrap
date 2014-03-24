(function($){

	$(document).ready(function (){
		footer.handleEvents();
	});

	var footer = {
		
		handleEvents : function(){
			$('body > footer .back-top').on('click', footer.backTop);		
		},

		backTop : function(e){
			$('body,html').animate({
				scrollTop: 0
			}, 500, 'swing');
			e.preventDefault();
		}
	};

})(jQuery);