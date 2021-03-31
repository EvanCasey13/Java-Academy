$(window).scroll(function() {
		$("body").removeClass("scrolling");
		if($(window).scrollTop() + $(window).height() > ($(document).height() -600) ) {
		//you are at bottom
		$("body").addClass("scrolling");
		}});