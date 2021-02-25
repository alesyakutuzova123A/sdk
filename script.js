
  $(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:true,
        slidesToShow:3,
        autoplay: false,
        speed:1000,
        autoplaySpeed:1000,
        responsive:[
            {
                breakpoint: 1170,
                settings: {
                    slidesToShow:1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });
});

$(document).ready(function(){
    $('.slider__mobile').slick({
        arrows:true,
        dots:false,
        slidesToShow:3,
        autoplay: false,
        speed:1000,
        autoplaySpeed:1000,
        responsive:[
            {
                breakpoint: 1170,
                settings: {
                    slidesToShow:1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });
});
$(document).ready(function($) {
	$('.popup-open').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});