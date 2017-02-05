$(document).ready(function() {
	
	//Mobile menu
	$(".burger").click(function() {
		$(this).children("span").toggleClass("active");
		$(".main-header .menu-top").slideToggle("normal");
	}); 
		   
	//Carousel
	function carousel_1() {
		var owl = $(".carousel");
		owl.owlCarousel({
			items : 1,
			loop : true,
			autoHeight : true,
			dots : true,
			singleItem : true,
			navigation : true,
			autoPlay : 3000,
			navigationText: [
			"<i class='fa fa-arrow-left'></i>",
			"<i class='fa fa-arrow-right'></i>"
			]
		});
	};
	carousel_1();

	//Fancybox
	$(".fancybox").fancybox({
		'padding'		: 0,
		'margin' : 0,
		'autoScale'		: true,
		'autoHeight' : true,
		'autoWidth' : true,
		'autoResize' : true,
		'transitionIn'	: 'none',
		'transitionOut'	: 'none'  
	});

	//PHP Ajax form
	$("#callback").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",  
			data: $(this).serialize()
		}).done(function() {
			$("#callback").trigger("reset");
			$.fancybox.close();
			$.fancybox.open({type: 'inline', href: '#feedback'}, {
				'padding'		: 0,
				'margin' : 0,
				'autoScale'		: true,
				'autoHeight' : true,
				'autoWidth' : true,
				'autoResize' : true,
				'transitionIn'	: 'none',
				'transitionOut'	: 'none', 
				'showCloseButton' : false,
				'closeBtn' : false
			});
		}); 
		return false; 
	});

});
 
