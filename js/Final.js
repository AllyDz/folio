$(document).ready(function(){

	// var theWidth = $(window).width();
	// 	if(theWidth < 768)[
	// 		return;
	// 		] //IF MOB TURN OFF JS



	//browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
	//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
	offset_opacity = 1200,
	//duration of the top scrolling animation (in ms)
	scroll_top_duration = 700;
	//scroll option 1

	var amountScrolled = 300;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
}); //scroll option 2



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


});