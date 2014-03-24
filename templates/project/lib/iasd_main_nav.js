if (!window.matchMedia){ window.matchMedia = function(){ return { matches:false }; }; }
(function($){

	$(document).ready(function (){
		mainNav.handleEvents();
		mainNav.duplicateTouchLink();
	});

	var isSmallDevice = window.matchMedia("(max-width: 767px)").matches; //Changes functionality on small devices

	var mainNav = {

		handleEvents : function(){
			$('.iasd-main_navbar .navbar-nav li > a').on('click', mainNav.preventDefaultTouchBehavior); // Fix events for large touch devices
			$('.iasd-main_navbar .navbar-toggle').on('click', mainNav.toggleResponsiveMenu);
		},

		preventDefaultTouchBehavior : function(e) {
			var jqThis = $(this).parent();
			if (!isSmallDevice) {
				jqThis.siblings().removeClass('open');
			}

			jqThis.toggleClass('open');

			if(jqThis.find('ul').length > 0 && (isSmallDevice || $('html').hasClass('touch')) ){
				e.preventDefault();
			}
            var aThis = jqThis.find('>:first-child');
            if(aThis)
                if(aThis.attr('href') == '#')
                    e.preventDefault();
		},

		duplicateTouchLink : function() {
			if(isSmallDevice || $('html').hasClass('touch')){
				$('.iasd-main_navbar .navbar-nav li.has-children').each(function(){
					var jqThis = $(this);
					var elementURL = jqThis.find('> a').attr('href');
					var elementContent = jqThis.find('> a').html();
					if(elementURL!='#'){
						jqThis.find('> ul').prepend('<li><a href="'+ elementURL +'" title="'+elementContent+'">'+elementContent+'</a></li>'); //TODO Usar jquery templates
					}
				});
			}
		},

		toggleResponsiveMenu : function(){
			$('.iasd-main_navbar .navbar-collapse').toggleClass('collapse').toggleClass('in');
		}

	};

})(jQuery);
