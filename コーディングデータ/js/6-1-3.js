
var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 7){
			var responsiveImage = [
				{ src: 'img/top1.jpg'},
				{ src: 'img/top2.jpg'},
				{ src: 'img/top3.jpg'}
			];
		} else {
			var responsiveImage = [
				{ src: 'img/top1.jpg' },
				{ src: 'img/top2.jpg' },
				{ src: 'img/top3.jpg' }
			];
		}

		$('#slider').vegas({
			//overlay: true,
			transition: 'blur',
			transitionDuration: 2000,
			delay: 10000,
			animationDuration: 20000,
			animation: 'kenburns',
			slides: responsiveImage,
			timer:false,
		});

		$(window).scroll(function () {
			var scrollAnimationElm = document.querySelectorAll('#features .img');
			var scrollAnimationFunc = function () {
			  for (var i = 0; i < scrollAnimationElm.length; i++) {
				var triggerMargin = 100;
				if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
				  scrollAnimationElm[i].classList.add('on');
				}
			  }
			}
			window.addEventListener('load', scrollAnimationFunc);
			window.addEventListener('scroll', scrollAnimationFunc);
		  });

		  $(window).scroll(function () {
			var scrollAnimationElm = document.querySelectorAll('#creator .img');
			var scrollAnimationFunc = function () {
			  for (var i = 0; i < scrollAnimationElm.length; i++) {
				var triggerMargin = 100;
				if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
				  scrollAnimationElm[i].classList.add('on');
				}
			  }
			}
			window.addEventListener('load', scrollAnimationFunc);
			window.addEventListener('scroll', scrollAnimationFunc);
		  });

		  $(window).scroll(function () {
			var scrollAnimationElm = document.querySelectorAll('#achievement .main .opencampus,#achievement .main .sale,#achievement .main .online');
			var scrollAnimationFunc = function () {
			  for (var i = 0; i < scrollAnimationElm.length; i++) {
				var triggerMargin = 100;
				if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
				  scrollAnimationElm[i].classList.add('on');
				}
			  }
			}
			window.addEventListener('load', scrollAnimationFunc);
			window.addEventListener('scroll', scrollAnimationFunc);
		  });

		  $('.picture').slick({
			arrows: false,
			autoplay: true,
			autoplaySpeed: 0,
			speed: 6900,
			infinite: true,
			pauseOnHover: false,
			pauseOnFocus: false,
			cssEase: 'linear',
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
			  {
			  breakpoint: 769,
			  settings: {
				slidesToShow: 2,
			  }
			},
			{
			  breakpoint: 426,
			  settings: {
				slidesToShow: 1.5,
			  }
			}
		  ]
		  });

		  $('#b-t .main').slick({
			autoplay: true,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			prevArrow: '<div class="slick-prev"></div>',
			nextArrow: '<div class="slick-next"></div>',
			dots: true,
			responsive: [
			  {
			  breakpoint: 769,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			  }
			},
			{
			  breakpoint: 426,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			  }
			}
		  ]
		  });

		  //scroll_effect
$(window).scroll(function () {
	var scrollAnimationElm = document.querySelectorAll('#m-p .m-picture');
	var scrollAnimationFunc = function () {
	  for (var i = 0; i < scrollAnimationElm.length; i++) {
		var triggerMargin = 100;
		if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
		  scrollAnimationElm[i].classList.add('on');
		}
	  }
	}
	window.addEventListener('load', scrollAnimationFunc);
	window.addEventListener('scroll', scrollAnimationFunc);
  });