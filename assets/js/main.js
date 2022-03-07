/*
	Directive by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ '481px',   '736px'  ],
			mobilep:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

})(jQuery);

window.addEventListener("load", function() {
	const form = document.getElementById('contact-form');
	form.addEventListener("submit", function(e) {
	  e.preventDefault();
	  const data = new FormData(form);
	  const action = 'https://script.google.com/macros/s/AKfycbw1-RmsWKq_UUd0hQv1ZjfRFk_F29nUGmaV6VaBEQlJMQALxcSSo-uGhk-BlIVhl-6E/exec';
	  fetch(action, {
		method: 'POST',
		body: data,
	  })
	  .then(() => {
		form.reset();
		document.getElementById('success-msg').classList.add('show-hidden');
		document.getElementById('success-msg').classList.add('fade-out-image');
	  })
	});
  });