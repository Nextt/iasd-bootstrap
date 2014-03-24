(function($){

	$(document).ready(function (){
		InstitucionalController.repositionInstitutionalMenu();
		InstitucionalController.initProgressionPlayer();
	});
	
	$(window).load(function() {
		setTimeout( InstitucionalController.initMasonry, 500);
	});

	$(window).scroll(function () {
	    InstitucionalController.repositionInstitutionalMenu();
	});

	$(window).resize(function(){
		if ($('audio.progression-single').size()){
			//there's a calculation bug on resize. reload fixes it temporarely
			window.location.reload();
		}		
	});


	var InstitucionalController = {
		initMasonry : function(){
			$('#iasd-masonry, #iasd-masonry-two').each(function(){
				new Masonry( this, {
			 		itemSelector: '.col-md-4',
			  		isResizable: true
				});
			});
		},

		initProgressionPlayer : function(){
			$('audio.progression-single').mediaelementplayer({
		    	audioHeight: 30, // height of audio player
		    	startVolume: 1, // initial volume when the player starts
		    	features: ['playpause','current','progress','duration','tracks','volume','fullscreen']
		    });
		},

		repositionInstitutionalMenu : function() {
		    var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
			if (top > $('.iasd-institutional').offset().top)
		        $('.iasd-institutional-menu').stop().addClass("active");
		    else
		        $('.iasd-institutional-menu').stop().removeClass("active");
		}
	};

	
	

})(jQuery);	
