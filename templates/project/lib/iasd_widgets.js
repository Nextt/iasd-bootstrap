(function($){

	var owlCarousels = [];
	var widthCheckerInterval = false;

	$(document).ready(function (){
		widgets.handleEvents();
		owlPlugin.initPostCarousel();
		owlPlugin.initServiceCarouselLarge();
		owlPlugin.initServiceCarouselSmall();
		owlPlugin.initGalleriesCarousel();
		owlPlugin.initColumnsCarousel();
		owlPlugin.initMagazineCarousel();
		owlPlugin.initNewsstandCarouselSmall();
		owlPlugin.initNewsstandCarouselLarge();
		owlPlugin.initInstitutionalCarousel();
		$('.iasd-images-gallery').IASDImageGallery();

		if(owlCarousels.length > 0) {
			widthCheckerInterval = setInterval(function() { for (var i = owlCarousels.length - 1; i >= 0; i--) { owlCarousels[i].updateVars(); }; }, 2000);
			setTimeout(function() { clearInterval(widthCheckerInterval); }, 30000);
		}
	});

	var widgets = {
		
		handleEvents : function(){
			$('.toggle-config-link').on('click', widgets.toggleConfig);
			$('.custom-select > select').on('change', widgets.removeFocus);
		},

		toggleConfig : function(e){
			jqThis = $(this);
			jqThis.parent().toggleClass('open');
			e.preventDefault();
		},

		removeFocus : function(){
			jqThis = $(this);
			jqThis.blur();
		}

	};

	var owlPlugin = {

		initPostCarousel : function(){
			var element = $(".iasd-widget-slider > .posts, .iasd-widget-slider > .header");
			if(element.length > 0) {
				owlCarousels.push(element.owlCarousel({
					navigation : false,
					slideSpeed : 500,
					paginationSpeed : 1000,
					singleItem: true,
					autoPlay: true,
					stopOnHover: true,
					lazyLoad : true
				}).data('owlCarousel'));
			}
		},

		initServiceCarouselLarge : function(){
			var element = $(".iasd-widget-slider > .services.large");
			if(element.length > 0) {
				owlCarousels.push(element.owlCarousel({
					items : 5,
					itemsDesktop : [1200,5],
					itemsDesktopSmall : [991,5],
					itemsTablet : [768,3],
					itemsMobile: [479,2],
					slideSpeed : 500,
					paginationSpeed : 1000,
					autoPlay: false,
					stopOnHover: true
				}).data('owlCarousel'));
			}
		},

		initServiceCarouselSmall : function(){
			var element = $(".iasd-widget-slider > .services.small");
			if(element.length > 0) {
				owlCarousels.push(element.owlCarousel({
					items : 2,
					itemsDesktop : [1200,2],
					itemsDesktopSmall : [991,2],
					itemsTablet : [768,5],
					itemsMobile: [479,2],
					navigation : false,
					slideSpeed : 500,
					paginationSpeed : 1000,
					autoPlay: false,
					stopOnHover: true
				}).data('owlCarousel'));
			}
		},

		initGalleriesCarousel : function(){
			var element = $(".iasd-widget-slider > .galleries");
			if(element.length > 0) {
				owlCarousels.push(element.owlCarousel({
					navigation : true,
					slideSpeed : 500,
					pagination : false,
					singleItem: true,
					autoPlay: false,
					stopOnHover: true,
					navigationText: false,
					mouseDrag: false,
					touchDrag: false,
					transitionStyle : "fade",
					lazyLoad : true
				}).data('owlCarousel'));
			}
		},

		initColumnsCarousel : function(){
			var element = $(".iasd-widget-slider .columns > div");
			if(element.length > 0) {
				owlCarousels.push(element.owlCarousel({
					items: 5,
					itemsDesktop : [1200,4],
					itemsDesktopSmall : [992,4],
					itemsTablet : [768,2],
					itemsMobile: [480,1],
					navigation : false,
					slideSpeed : 500,
					paginationSpeed : 1000,
					autoPlay: false,
					stopOnHover: true
				}).data('owlCarousel'));
			}
		},

		initMagazineCarousel : function(){
			var element = $(".iasd-widget-slider > .magazine");
			if(element.length > 0) {
				owlCarousels.push(element.owlCarousel({
					navigation : true,
					items : 1,
					itemsDesktop : [1200,1],
					itemsDesktopSmall : [991,1],
					itemsTablet : [768,3],
					itemsMobile: [479,1],
					slideSpeed : 500,
					pagination : false,
					paginationSpeed : 1000,
					autoPlay: false,
					navigationText: false,
					stopOnHover: true,
					mouseDrag: false,
					touchDrag: false,
					lazyLoad : true	
				}).data('owlCarousel'));
			}
		},


		initNewsstandCarouselSmall : function(){
			var element = $(".iasd-widget-slider > .newsstand.small");
			if(element.length > 0) {
				owlCarousels.push(element.owlCarousel({
					navigation : true,
					items : 1,
					itemsDesktop : [1200,1],
					itemsDesktopSmall : [991,3],
					itemsTablet : [768,2],
					itemsMobile: [479,1],
					slideSpeed : 500,
					pagination : false,
					paginationSpeed : 1000,
					autoPlay: false,
					navigationText: false,
					stopOnHover: true,
					mouseDrag: false,
					touchDrag: false,
					lazyLoad : true	
				}).data('owlCarousel'));
			}
		},


		initNewsstandCarouselLarge : function(){
			var element = $(".iasd-widget-slider > .newsstand.large");
			if(element.length > 0) {
				owlCarousels.push(element.owlCarousel({
					navigation : true,
					items : 2,
					itemsDesktop : [1200,2],
					itemsDesktopSmall : [991,2],
					itemsTablet : [768,2],
					itemsMobile: [479,1],
					slideSpeed : 500,
					pagination : false,
					paginationSpeed : 1000,
					autoPlay: false,
					navigationText: false,
					stopOnHover: true,
					mouseDrag: false,
					touchDrag: false,
					lazyLoad : true	
				}).data('owlCarousel'));
			}
		},

		initInstitutionalCarousel : function(){
			var element = $(".iasd-institutional-gallery");
			if(element.length > 0) {
				owlCarousels.push(element.owlCarousel({
					items : 1,
					itemsDesktop : [1200,1],
					itemsDesktopSmall : [991,1],
					itemsTablet : [768,1],
					itemsMobile: [479,1]
				}).data('owlCarousel'));
			}
		}

	};


	$.fn.IASDImageGallery = function(options){

		if ($.type(options) != 'object'){
			options = {};
		}

		this.each(function(){
			ImageGalleryController.init.apply(this, [options]);
		});
	}

	var ImageGalleryController = {
		defaultOptions : {
			items 					: 7,
			itemsDesktop 			: [1199,7],
			itemsDesktopSmall 		: [979,5],
			itemsTablet 			: [768,6],
			itemsMobile  			: [479,3],
			pagination 				: false,
			responsiveRefreshRate 	: 100,
			afterInit : function(el){
				el.find(".owl-item").eq(0).addClass("synced");
			}
		},

		init : function (userOptions){
			var $container = $(this);

			var options = $.extend({}, ImageGalleryController.defaultOptions, userOptions);
			var $pics = $container.find(".iasd-images-gallery-pics");
			var $thumbs = $container.find(".iasd-images-gallery-thumbs");

			$pics.owlCarousel({
				afterAction				: ImageGalleryController.syncPosition,
				pagination 				: false,
				responsiveRefreshRate 	: 200,
				navigation 				: false,
				singleItem 				: true,
				slideSpeed				: 1000,
				autoHeight 				: true,
				autoPlay				: false,
				lazyLoad 				: true,					
				transitionStyle			: "fade"
			});

			$thumbs.owlCarousel(options);

			$thumbs.on("click", ".owl-item", ImageGalleryController.onClickThumbItem);

		},
		
		syncPosition: function(el){
			$thumbs = $(el).closest('.iasd-images-gallery').find('.iasd-images-gallery-thumbs');
			var current = this.currentItem;
			$thumbs.find(".owl-item").removeClass("synced").eq(current).addClass("synced");

			if( $thumbs.data("owlCarousel") !== undefined ){
				ImageGalleryController.center(current, $thumbs);
			}
		},

		onClickThumbItem: function(e){
			e.preventDefault();

			$this = $(this);
			$pics = $this.closest('.iasd-images-gallery').find('.iasd-images-gallery-pics');
			var number = $this.data("owlItem");
			$pics.trigger("owl.goTo",number);
		},

		center: function(number, $thumbs){

			var $thumbsvisible = $thumbs.data("owlCarousel").owl.visibleItems;
			var num = number;
			var found = false;
			for(var i in $thumbsvisible){
				if(num === $thumbsvisible[i]){
					var found = true;
				}
			}

			if(found===false){
				if(num>$thumbsvisible[$thumbsvisible.length-1]){
					$thumbs.trigger("owl.goTo", num - $thumbsvisible.length+2)
				}else{
					if(num - 1 === -1){
						num = 0;
					}
					$thumbs.trigger("owl.goTo", num);
				}
			} else if(num === $thumbsvisible[$thumbsvisible.length-1]){
				$thumbs.trigger("owl.goTo", $thumbsvisible[1])
			} else if(num === $thumbsvisible[0]){
				$thumbs.trigger("owl.goTo", num-1)
			}

		}

	};

})(jQuery);