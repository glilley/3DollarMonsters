$(window).scroll(function() {
		$('.animatedElement').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			if ((imagePos < topOfWindow+600) && $(this).hasClass('left')) {
				$(this).addClass("slideRight");
			}
			if ((imagePos < topOfWindow+550) && $(this).hasClass('right')) {
				$(this).addClass("slideLeft");
			}
			if ((imagePos < topOfWindow+400) && $(this).hasClass('up')) {
				$(this).addClass("slideUp");
			}
			if ((imagePos < topOfWindow+400) && $(this).hasClass('peek')) {
				$(this).addClass("little-monster");
			}
			if ((imagePos < topOfWindow+865) && $(this).hasClass('sticky')) {
				$('.cyclops').addClass("rise");
			}
			if ((imagePos < topOfWindow+865) && $(this).hasClass('sticky')) {
				$('.hands').addClass("pull");
			}
		});
	});
    $(document).scroll(function(){
        var top=$(this).scrollTop();
        if(top<150){
            var dif=1-top/75;
            $(".tip").css({opacity:dif});
        }
    });
	$('a[href*=#goto]').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') || location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
	