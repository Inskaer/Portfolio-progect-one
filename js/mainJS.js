// Это функция нужна для того чтобы сначала подгружалась страница а потом скрипты
$(document).ready(function() {


	// Button menu click
	menu_button.onclick =  function() {
	nav_collapsede.classList.toggle ('nav_collapsed');
	};

	// прокрутка header
	$(window).scroll(function(){
    if ($(window).scrollTop() > 300) {
        $('header').addClass('active');
    }
    else {
        $('header').removeClass('active');
    }
	});


	// nav_collapsed
	$(window).scroll(function(){
    if ($(window).scrollTop() > 300) {
        $('.sectionbgcolor').addClass('active');
    }
    else {
        $('.sectionbgcolor').removeClass('active');
    }
});

  // user_btn_info_model
 
	// plagin skroll
	$('.wraperr_news').slick({
  	    slidesToShow: 4, //shows how many bytes there will be in a row of slides//
  		slidesToScroll: 3,
  		autoplay: true,
  		autoplaySpeed: 1500,
  		adaptiveHeight: true, //hight:auto//
  		responsive: [
    	{
      		breakpoint: 1024,
      		settings: {
      			slidesToShow:2,
      			slidesToScroll: 3,
  			}			
  		},

  		{
      		breakpoint: 769,
      		settings: {
      			slidesToShow:2,
      			arrows: false, //delete arrows//
      			slidesToScroll: 3,
  			}			
  		},

  		{
      		breakpoint: 600,
      		settings: {
      			slidesToShow:2,
      			arrows: false, //delete arrows//
      			slidesToScroll: 3,
  			}			
  		},

  		{
      		breakpoint: 480,
      		settings: {
      			slidesToShow:2,
      			arrows: false, //delete arrows//
      			slidesToScroll: 3,
  			}			
  		},
      ]
  	});
});

