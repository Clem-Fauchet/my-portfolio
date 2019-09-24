$(document).ready(function () {

	var windowWidth = $(window).width();

	/************* PAGE LAYERS ***************/
	var classie = {
		// full names
		hasClass: hasClass,
		addClass: addClass,
		removeClass: removeClass,
		toggleClass: toggleClass,
		// short names
		has: hasClass,
		add: addClass,
		remove: removeClass,
		toggle: toggleClass
	};



	var pages = [].slice.call(document.querySelectorAll('.pages > .page')),
		currentPage = 0,

		revealerOpts = {
			// the layers are the elements that move from the sides
			nmbLayers: 3,
			// bg color of each layer
			bgcolor: ['#dd6c00', '#f7e132', '#dd9800'],
			// effect classname
			effect: 'animate-layer-3', //CSS properties
			onStart: function (direction) {
				// next page gets class page-animate-[direction]
				var nextPage = pages[currentPage === 0 ? 1 : 0];
				classie.add(nextPage, 'page-animate' + direction);
			},
			onEnd: function (direction) {
				// remove class page-animate-[direction] from next page
				var nextPage = pages[currentPage === 0 ? 1 : 0];
				nextPage.className = 'page';
			}
		};
	
	revealer = new Revealer(revealerOpts);








})