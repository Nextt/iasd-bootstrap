if (!window.matchMedia){ window.matchMedia = function(){ return { matches:false }; }; }

(function($){

	$(document).ready(function (){
		globalNav.handleEvents();
	});


	var isSmallDevice = window.matchMedia("(max-width: 767px)").matches; //Changes functionality on small devices

	var globalNav = {
		
		handleEvents : function(){
			$('.iasd-global_navbar .more-panel a').on('click', globalNav.changeActiveTab);
			$('.iasd-global_navbar .more a').on('click', globalNav.toggleMorePanel);
			$('.iasd-global_navbar .navbar-header button').on('click', globalNav.toggleResponsiveMenu);
			$('.iasd-global_navbar .headquarters > li > a').on('click', globalNav.toggleSubmenu);
			$('.iasd-global_navbar .headquarters > li > a').on('mouseover', globalNav.changeMap);
			$('.iasd-global_navbar .headquarters > li > a').on('mouseout', globalNav.cleanMap);
			$('.iasd-global_navbar .search-link').on('click', globalNav.toggleSearchBox);
		},
		
		changeActiveTab : function(e) {
			var jqThis = $(this);
			if (isSmallDevice) {
				jqThis.parent().toggleClass('active').find('> ul').toggleClass('open');
			} else {
				jqThis.tab('show');
			}
			e.preventDefault();
		},
		
		toggleMorePanel : function(e) {
			var jqThis = $(this);
			$('.iasd-global_navbar .search-link').removeClass('active');
			$('.iasd-global_navbar .iasd-global_navbar-search').removeClass('open');
			jqThis.parent().toggleClass('active');
			$('.iasd-global_navbar .iasd-global_navbar-more').toggleClass('open');
			$('.iasd-global_navbar .more-panel a:first').trigger( "click" );
			e.preventDefault();
		},

		toggleResponsiveMenu : function(){
			$('.iasd-global_navbar .search-link').removeClass('active');
			$('.iasd-global_navbar .iasd-global_navbar-search').removeClass('open');			
			$('.iasd-global_navbar .navbar-collapse').toggleClass('collapse').toggleClass('in');
			$('.iasd-global_navbar .iasd-global_navbar-more').toggleClass('open');
			$('.iasd-global_navbar .more-panel a').each(function(){
				var jqThis = $(this);
				var selector = jqThis.attr('href');
				if (isSmallDevice) {
					$(selector).children('ul').insertAfter(jqThis);
				}
			});			
		},

		toggleSubmenu : function(e){
			var jqThis = $(this);
			if (isSmallDevice) {
				jqThis.parent().toggleClass('active').find('ul').toggleClass('open');
			} else {
				jqThis.parent().parent().find('ul').removeClass('open');
				jqThis.parent().find('> ul').addClass('open');
				jqThis.parent().parent().find('li').removeClass('active');
				jqThis.parent().addClass('active');	
				$('.tutorial').remove();
			}
			e.preventDefault();
		},

		toggleSearchBox : function(e){
			var jqThis = $(this);
			$('.iasd-global_navbar .navbar-collapse').addClass('collapse').removeClass('in');
			$('.iasd-global_navbar .more a').parent().removeClass('active');
			$('.iasd-global_navbar .iasd-global_navbar-more').removeClass('open');
			jqThis.toggleClass('active');
			$('.iasd-global_navbar .iasd-global_navbar-search').toggleClass('open');
			e.preventDefault();
		},

		changeMap : function(){
			var jqThis = $(this).attr('data-region');
			$('.headquarters-map').attr('class', 'headquarters-map visible-md visible-lg');
			$('.headquarters-map').addClass('map-region_'+jqThis);
		},

		cleanMap : function(){
			var jqThis = $(this);
			var defaultRegion = "01";
			var newDefaultRegion = $('.iasd-global_navbar .headquarters > li.active > a').attr('data-region');
			if(!newDefaultRegion){
				$('.headquarters-map').attr('class', 'headquarters-map visible-md visible-lg map-region_'+defaultRegion);
			} else{
				$('.headquarters-map').attr('class', 'headquarters-map visible-md visible-lg map-region_'+newDefaultRegion);
			}
		}		

	};

})(jQuery);