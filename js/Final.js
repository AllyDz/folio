//* LOAD MORE IMAGES BTN

	$(function(){
	    $("div").slice(0, 4).show(); // select the first ten
	    $(".more-imgs").click(function(e){ // click event for load more
	        e.preventDefault();
	        $("div:hidden").slice(0, 4).show(); // select next 10 hidden divs and show them
	        if($("div:hidden").length == 0){ // check if any hidden divs still exist
	            alert("Fin"); // alert if there are none left
	    }
   });

//* HIDE IMAGES BTN

	// after load more BTN is hit show Hide Img BTN

	// when Hide Img BTN is clicked hide all images in hidden divs


$(document).ready(function(){
//alert('hello');

//* BACK TO TOP scroll option 1

	// var theWidth = $(window).width();
	// 	if(theWidth < 768)[
	// 		return;
	// 		] //IF MOB TURN OFF JS

//* BACK TO TOP scroll option 2

	//browser window scroll (in pixels) after which the "back to top" link is shown
//	var offset = 300,
	//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
//	offset_opacity = 1200,
	//duration of the top scrolling animation (in ms)
//	scroll_top_duration = 700;
	//scroll option 1

//	var amountScrolled = 300;

//	$(window).scroll(function() {
//		if ( $(window).scrollTop() > amountScrolled ) {
//			$('a.back-to-top').fadeIn('slow');
//		} else {
//			$('a.back-to-top').fadeOut('slow');
//		}
//	}); 

//* BACK TO TOP scroll option 2

	// $('.autoplay').slick({
	//   slidesToShow: 3,
	//   slidesToScroll: 1,
	//   autoplay: true,
	//   autoplaySpeed: 2000,
	// }); //slick by ken wheeler

		// Nave 'sticky'
		// Hover 'Nav', 'Hire Me', 'Port Img', 'B4 & After' 

		// $("nav li").hover(function(){
	 //    	$('ul').slideUp('slow');            
  //   });

		// Rotating 'Imgs'
		// Click & go to section on page

//	});

//* CONTACT FORM

	// 	var success = form [ 'Name', 'email', 'password', 'agree' $(formCompletion).width();
			

	// if($success){
	// 	alert('Thank you, your information has been sent.');
	// }

	// else{
	// 	print '<meta http-equic=\'refresh\' content=\0;url=error.html\'>';
	// }

	//above is a test

	$('.required').on('blur', function(e){
	    validateField(this);  
	    
	})

	$('#contact-form').on('submit', function(event){
	    var nameValid = validateField('.name').val();
	    var emailValid = validateField('.email').val();
	    if(nameValid && emailValid){
	      return true;
	    } else {
	      return false;
	    }
	})

	function validateField(field){
	    var inputValue = $(field).val();  
	    if(inputValue === ''){  
	        $(field).addClass('error');
	        return false;
	    }
	    else {
	        $(field).removeClass('error');
	        return true;
	    }  
		}
	})

});

