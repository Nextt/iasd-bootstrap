(function($){

	$(document).ready(function (){
		dropdownNav.handleEvents();
	});

	var dropdownNav = {
		
		handleEvents : function(){
			$('.iasd-dropdown-navigation .dropdown-menu').on('click', dropdownNav.preventClosing);
			$('.iasd-dropdown-navigation .dropdown-toggle').on('click', dropdownNav.openMenu);
			$('.iasd-dropdown-navigation .dropdown-menu > ul > li:not(.dsa-link) > a').bind('click', dropdownNav.openSubmenu);
			$('.iasd-dropdown-navigation .back > a').bind('click', dropdownNav.closeSubmenu);		
		},
		
		preventClosing : function(e) {
			e.stopPropagation();
		},

		openMenu : function(){
			var jqThis = $('.iasd-dropdown-navigation .dropdown-menu > ul > li').find('ul.active');
			if (jqThis.size()){
				setTimeout(function(){ 
					$('.iasd-dropdown-navigation .dropdown-menu').css('height', jqThis.height()+15); //15px from padding
				}, 15);
			}
		},

		openSubmenu : function(e) {
			var jqThis = $(this);
			var submenuTarget = jqThis.closest('li').find('ul');
			submenuTarget.toggleClass('active');
			$('.iasd-dropdown-navigation .dropdown-menu').css('height', submenuTarget.height()+15); //15px from padding
			e.preventDefault();
		},

		closeSubmenu : function(e) {
			var $this = $(this);
			var submenuTarget = $this.closest('ul');
			$('.iasd-dropdown-navigation .dropdown-menu').css('height', '');
			submenuTarget.removeClass('active');
			e.preventDefault();
		}		

	};

})(jQuery);