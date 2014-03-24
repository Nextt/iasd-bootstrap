(function($){

	$(document).ready(function (){
		iasdCloseModal.closeModal();
		iasdFilterToggleActive.handleEvents();
		iasdLoadMorePosts.handleEvents();
		iasdReturnPageNav.handleEvents();
	});

	$(window).load(function() {
		iasdReturnPageNav.autoCollapse();
	});

	/* ------------------------------------------ */

	var iasdCloseModal = {
		closeModal : function(e){
			$('.modal').each(function(){
			        var src = $(this).find('iframe').attr('src');
			    $(this).on('click', function(){
			        $(this).find('iframe').attr('src', '');
			        $(this).find('iframe').attr('src', src);
			    });
			});
		}
	};

	var iasdFilterToggleActive = {

		handleEvents : function(){
			$('.iasd-search-filters > a > h3').on('click', iasdFilterToggleActive.filterToggleActive);
		},

		filterToggleActive : function(e){
			$(this).toggleClass('active');
		}
	};



	var iasdReturnPageNav = {
		
		handleEvents : function(){
			$('.iasd-plugin-return_page .toggle-visibility-link').on('click', iasdReturnPageNav.toggleVisibility);
		},

		toggleVisibility : function(e){
			jqThis = $(this);
			jqThis.parent().toggleClass('collapsed');
			if(jqThis.parent().hasClass('collapsed')){
				jqThis.attr("title", "Clique para visualizar o link da página anterior");
			} else{
				jqThis.attr("title", "Clique para fechar este link");
			}
			e.preventDefault();
		},

		autoCollapse : function(){
			var jqThis = $('.iasd-plugin-return_page')
			jqThis.removeClass('collapsed');
			jqThis.find('.toggle-visibility-link').attr("title", "Clique para fechar este link");
			setTimeout(function() {
				jqThis.addClass('collapsed');
				jqThis.find('.toggle-visibility-link').attr("title", "Clique para visualizar o link da página anterior");
			}, 5000);
		}

	};

	var iasdLoadMorePosts = {
		
		handleEvents : function(){
			$('.load-more_posts-link').on('click', iasdLoadMorePosts.loadMorePosts);
		},

		loadMorePosts : function(event) {
			var $button = jQuery(this);
			
			if(!$button.hasClass('loading')) {
				$button.addClass('loading');

				$.ajax({
					url : $button.attr('href'),
					context: $button,
					dataType: 'html'
				}).done(iasdLoadMorePosts.renderMorePosts).fail(iasdLoadMorePosts.renderMorePostsError);
				
			}
			event.preventDefault();
		},

		renderMorePosts : function(data, textStatus, jqXHR) {
			var $nextPage = jQuery(data);
			var $ajaxContainer = jQuery('.iasd-post-list-ajax');
			var $newAjaxContainer = $nextPage.find('.iasd-post-list-ajax');
			var nextPageHref = $nextPage.find('.load-more_posts-link').attr('href');

			$newAjaxContainer.find('> .iasd-post-list-item-ajax').appendTo($ajaxContainer);

			var currentPage = $newAjaxContainer.data('page');
			var maxPages = $ajaxContainer.data('pages');
			$ajaxContainer.data('page', currentPage);

			var $button = jQuery(this);
			$button.removeClass('loading');

			if(maxPages == currentPage)
				$button.hide();

			jQuery('.load-more_posts-link').attr('href', nextPageHref);
		},

		renderMorePostsError : function(){
			var $button = jQuery(this);
			$button.removeClass('loading');
		}

	};

})(jQuery);