$(document.body).ready(function () {
	
	var windowWidth = $(window).width();
	
	 Splitting();
	
	/************* PAGE LAYERS ***************/


	var pages = [].slice.call(document.querySelectorAll('.pages > .page')),
		currentPage = 0,

		revealerOpts = {
			// the layers are the elements that move from the sides
			nmbLayers: 3,
			// bg color of each layer
			bgcolor: ['#dd6c00', '#f7e132', '#f1b021'],
			// effect classname
			effect: 'animate-layer-3', //CSS properties
			onStart: function (direction) {
				// next page gets class page-animate-[direction]
				var nextPage = pages[currentPage === 0 ? 0 : currentPage];
				classie.add(nextPage, 'page-animate-' + direction);
			},
			onEnd: function (direction) {
				// remove class page-animate-[direction] from next page
				var nextPage = pages[currentPage === 0 ? pages.length - 1 : 0];
				nextPage.className = 'page';
			}

		};

	revealer = new Revealer(revealerOpts);

	// clicking the page nav buttons
	document.querySelector('button.button_left').addEventListener('click', function () {
		reveal('left');
	});
	document.querySelector('button.button_right').addEventListener('click', function () {
		reveal('right');
	});
	document.querySelector('button.button_bottom').addEventListener('click', function () {
		reveal('bottom');
	});

	// triggers the effect by calling instance.reveal(direction, callbackTime, callbackFn)
	/*function reveal(direction) {
		var callbackTime = 750,
			callbackFn = function () {
				classie.remove(pages[currentPage], 'page-current');
				currentPage = currentPage < pages.length -1 ? currentPage+1 : 0;
				classie.add(pages[currentPage], 'page-current');
				classie.add(pages[currentPage], 'row');
			};
*/

	//ESSAI PAGE NON ALEATOIRE

	function reveal(direction) {
		if (direction === 'left') {
			var callbackTime = 750,
				callbackFn = function () {
					classie.remove(pages[currentPage], 'page-current');
					currentPage = currentPage < pages.length - 2 ? currentPage + 2 : 0;
					classie.add(pages[currentPage], 'page-current');
					classie.add(pages[currentPage], 'row');
				};
		} else if (direction === 'right') {
			var callbackTime = 750,
				callbackFn = function () {
					classie.remove(pages[currentPage], 'page-current');
					currentPage = currentPage < pages.length - 3 ? currentPage + 3 : 0;
					classie.add(pages[currentPage], 'page-current');
					classie.add(pages[currentPage], 'row');
				};
		} else if (direction === 'bottom') {
			var callbackTime = 750,
				callbackFn = function () {
					classie.remove(pages[currentPage], 'page-current');
					currentPage = currentPage < pages.length - 1 ? currentPage + 1 : 0;
					classie.add(pages[currentPage], 'page-current');
					classie.add(pages[currentPage], 'row');
				};
		}



		revealer.reveal(direction, callbackTime, callbackFn);
	}


})