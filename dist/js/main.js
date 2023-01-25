


let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	devStatus = window.productionStatus === 'development';
	const win = document.body

$(document).ready(function ($) {
	$body = $('body');
	if(devStatus) {
		pageWidget(['index']);
		pageWidget(['about']);
		pageWidget(['shop']);
		pageWidget(['services']);
		pageWidget(['object']);
		pageWidget(['article']);
		pageWidget(['material']);
		pageWidget(['reviews']);
		pageWidget(['contacts']);
		pageWidget(['single-products']);
		pageWidget(['single-services']);
		pageWidget(['single-object']);
		pageWidget(['single-article']);
		getAllClasses('html', '.elements_list');
	}
});

$(window).on('load', function () {
	updateSizes();
	loadFunc();
	initPhoneMask();
	checkLastCol();
	
	if(mediaPoint1 < windowWidth) {
		popupForms('17px')
	} else {
		popupForms('0px');
		burgerMobile();
	}
});

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});

function loadFunc() {
	calcViewportHeight();
	// standartSlider();

}

function resizeFunc() {
	updateSizes();

	calcViewportHeight();
}

function scrollFunc() {}

function calcViewportHeight() {
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', vh + 'px');
	}
}

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

if ('objectFit' in document.documentElement.style === false) {
	document.addEventListener('DOMContentLoaded', function () {
		Array.prototype.forEach.call(
			document.querySelectorAll('img[data-object-fit]'),
			function (image) {
				(image.runtimeStyle || image.style).background =
					'url("' +
					image.src +
					'") no-repeat 50%/' +
					(image.currentStyle
						? image.currentStyle['object-fit']
						: image.getAttribute('data-object-fit'));

				image.src =
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
					image.width +
					"' height='" +
					image.height +
					"'%3E%3C/svg%3E";
			}
		);
	});
}

function succes(success) {
	$(success).toggleClass('active');
		setTimeout(function() {
			$(success).removeClass('active')
		}, 3000)
}

function failed(failed) {
	$(failed).toggleClass('active');
		setTimeout(function() {
			$(failed).removeClass('active')
		}, 3000)
}

// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min)) + min;
// }

// function getRandom(min, max) {
// 	return Math.random() * (max - min) + min;
// }

var styles = ['color: red', 'background: black'].join(';');
var message = 'Developed by KotoFeelGood Arkada-Studio https://arkada-web.ru/';
console.info('%c%s', styles, message);



// $(document).ready(function() {
// 	const btns = document.querySelectorAll('.btn')

// 	btns.forEach(el => {
// 			el.addEventListener('click', function(e) {
// 					let
// 							size = Math.max(this.offsetWidth, this.offsetHeight),
// 							x = e.offsetX - size / 2,
// 							y = e.offsetY - size / 2,
// 							wave = this.querySelector('.wave')
	
// 					// Create an element if it doesn't exist
// 					if (!wave) {
// 							wave = document.createElement('span')
// 							wave.className = 'wave'
// 					}
// 					wave.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`
// 					this.appendChild(wave)
// 			})
// 	})
// })



// const btnSubmit = document.querySelectorAll('button[type="submit"]')
// Array.from(btnSubmit).map((item) => {
// 	item.addEventListener('click', (e) => {
// 		e.preventDefault();
// 		succes('.succes')
// 	})
// })


// function allDefautAnim(bottom = false, start = '-=30% center', end = 'bottom') {
// 	const paralaxWrapper = Array.from(document.querySelectorAll('.sec_anim')).map(function(el) {
// 		const arr = Array.from(el.querySelectorAll('.el_anim')).map(function (item, index) {
// 			const tl = gsap.timeline();
// 			ScrollTrigger.create({
// 				animation: tl,
// 				trigger: el,
// 				start: start,
// 				end: end,
// 				ease: 'none',
// 			})
// 			tl.fromTo(item, {
// 				y: 100, 
// 				duration: .4,
// 				autoAlpha: 0,
// 			}, {
// 				y: 0,
// 				autoAlpha: 1,
// 				delay: 0.1 + (0.1 * index),
// 			});
// 		});
// 	});
// }

function popupForms(pr) {

	let popupForms = document.querySelector('.popupForm')
	let popupFormsTrigger = document.querySelectorAll('.trigger_callback')
	let popupFormsClose = document.querySelectorAll('.remove_popup')
	let popupFormsSubmit = popupForms.querySelector('input[type="submit"]')
	// const burgerPopup = document.querySelector('.burger')
	
	Array.from(popupFormsTrigger).map((item) => {
		item.addEventListener('click', () => {
			popupForms.classList.add('active');
			win.style.overflowY = "hidden";
			win.style.paddingRight = pr; 
			// burgerPopup.classList.remove('active')
		})
	})


	Array.from(popupFormsClose).map((item) => {
		item.addEventListener('click', () => {
			popupForms.classList.remove('active')
			win.style.overflow = "";
			win.style.paddingRight = ""; 
		})
	})

	popupFormsSubmit.addEventListener('click', () => {
		popupForms.classList.remove('active')
		win.style.overflow = "";
		win.style.paddingRight = ""; 
		succes('.succes')
	})
}

function burgerMobile() {
	const triggerBurger = document.querySelector('.header_shop')
	const burgerPopup = document.querySelector('.burger')
	const burgerFail = document.querySelectorAll('.remove')
	const btnName = triggerBurger.querySelector('button p')
	btnName.innerHTML = "Меню"
	
	triggerBurger.addEventListener('click', () => {
		burgerPopup.classList.add('active')
		triggerBurger.classList.add('active')
		win.style.overflow = "hidden";
	})

	Array.from(burgerFail).map((item) => {
		item.addEventListener('click', () => {
			burgerPopup.classList.remove('active')
			triggerBurger.classList.remove('active')
			win.style.overflow = "";
		})
	})

}









function initPhoneMask() {
	var inputsTel = document.querySelectorAll('input[type="tel"]');
	Inputmask({
		"mask": "+7 (999) 999-99-99",
		showMaskOnHover: false
	}).mask(inputsTel);
}



async function maps(street, city, size) {

	function init() {
		const geocoder = ymaps.geocode(`${street} ${city}`);
		geocoder.then(
			async function (res) {
				var myMapMobile = await new ymaps.Map('map', {
						center: res.geoObjects.get(0).geometry.getCoordinates(),
						zoom: 16,
					}, {
						searchControlProvider: 'yandex#search'
					}),
					myPlacemark = new ymaps.Placemark(myMapMobile.getCenter(), {
						balloonContent: `${street} ${city}`
					}, {
						iconLayout: 'default#image',
						iconImageHref: '/i/global/map.svg',
						iconImageSize: size,
						iconImageOffset: [-5, -38]
					});

				myMapMobile.geoObjects
					.add(myPlacemark)
				myMapMobile.behaviors.disable('scrollZoom')
			}
		);
	}
	await ymaps.ready(init);

}

// Slider all function init in full load website

(function() {

	const productSlider = new Swiper('.homeproducts_slider', {
		wathOverflow: true,
		navigation: {
			nextEl: ".homeproducts_nav_next",
			prevEl: ".homeproducts_nav_prev",
		},
		scrollbar: {
			el: '.homeproducts_scrollbar',
			draggable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 35,
			},
			480: {
				slidesPerView: 2,
				spaceBetween: 35,
			},
			1200: {
				slidesPerView: 4.2,
				spaceBetween: 35,
			}
		}
	})
}());

(function() {

	const serviceSlider = new Swiper('.homeservice_slider', {
		wathOverflow: true,
		centeredSlides: true,
		centeredSlidesBounds: true,
		loop: true,
		navigation: {
			nextEl: ".homeservice_nav_next",
			prevEl: ".homeservice_nav_prev",
		},
		scrollbar: {
			el: '.homeservice_scrollbar',
			draggable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 35,
			},
			480: {
				slidesPerView: 2,
				spaceBetween: 35,
			},
			1200: {
				slidesPerView: 3.9,
				spaceBetween: 35,
			}
		}
	})
}());

(function() {
	const newsSlider = new Swiper('.homenews_slider', {
		wathOverflow: true,
		loop: true,
		navigation: {
			nextEl: ".homenews_nav_next",
			prevEl: ".homenews_nav_prev",
		},
		scrollbar: {
			el: '.homenews_scrollbar',
			draggable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 35,
			},
			480: {
				slidesPerView: 2,
				spaceBetween: 35,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 35,
			}
		}
	})
}());

(function() {
	const brandSlider = new Swiper('.brand_slider', {
		wathOverflow: true,
		loop: true,
		navigation: {
			nextEl: ".brand_nav_next",
			prevEl: ".brand_nav_prev",
		},
		scrollbar: {
			el: '.brand_scrollbar',
			draggable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 3,
				spaceBetween: 35,
			},
			480: {
				slidesPerView: 3,
				spaceBetween: 35,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 183,
			}
		}
	})
}());

// (function() {
// 	const brandSlider = new Swiper('.brand_slider', {
// 		wathOverflow: true,
// 		loop: true,
// 		navigation: {
// 			nextEl: ".brand_nav_next",
// 			prevEl: ".brand_nav_prev",
// 		},
// 		scrollbar: {
// 			el: '.brand_scrollbar',
// 			draggable: true,
// 		},
// 		breakpoints: {
// 			320: {
// 				slidesPerView: 1,
// 				spaceBetween: 35,
// 			},
// 			480: {
// 				slidesPerView: 2,
// 				spaceBetween: 35,
// 			},
// 			1200: {
// 				slidesPerView: 4,
// 				spaceBetween: 183,
// 			}
// 		}
// 	})
// }());

(function() {
	const singleGallerySlider = new Swiper('.singleGallery_slider', {
		wathOverflow: true,
		centeredSlides: true,
		centeredSlidesBounds: true,
		navigation: {
			nextEl: ".singleGallery_nav_next",
			prevEl: ".singleGallery_nav_prev",
		},
		scrollbar: {
			el: '.singleGallery_scrollbar',
			draggable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 35,
			},
			480: {
				slidesPerView: 2,
				spaceBetween: 35,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 35,
			}
		}
	})
}());

(function() {
	const singleObjectSlider = new Swiper('.singleObjectGallery_slider', {
		wathOverflow: true,
		centeredSlides: true,
		centeredSlidesBounds: true,
		// loop: true,
		navigation: {
			nextEl: ".singleObjectGallery_nav_туче",
			prevEl: ".singleObjectGallery_nav_prev",
		},
		scrollbar: {
			el: '.singleObject_scrollbar',
			draggable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 35,
			},
			480: {
				slidesPerView: 2,
				spaceBetween: 35,
			},
			1200: {
				slidesPerView: 1.3,
				spaceBetween: 35,
			}
		}
	})
}());

(function() {

	const decisionSlider = new Swiper('.decisionGallery_slider', {
		wathOverflow: true,
		centeredSlides: true,
		centeredSlidesBounds: true,
		navigation: {
			nextEl: ".decisionGallery_nav_next",
			prevEl: ".decisionGallery_nav_prev",
		},
		scrollbar: {
			el: '.decision_scrollbar',
			draggable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 35,
			},
			480: {
				slidesPerView: 2,
				spaceBetween: 35,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 35,
			}
		}
	})
}());

(function() {
	const objectSliders = new Swiper('.mod_object_slider', {
		wathOverflow: true,
		navigation: {
			nextEl: ".objects_slider_nav_next",
			prevEl: ".objects_slider_nav_prev",
		},
		scrollbar: {
			el: '.modObject_scrollbar',
			draggable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 35,
			},
			480: {
				slidesPerView: 2,
				spaceBetween: 35,
			},
			1200: {
				slidesPerView: 2,
				spaceBetween: 35,
			}
		}
	})
}());

(function() {
	const objectGallery = new Swiper('.objectGallery_slider', {
		wathOverflow: true,
		navigation: {
			nextEl: ".objects_slider_nav_next",
			prevEl: ".objects_slider_nav_prev",
		},
		scrollbar: {
			el: '.objectGallery_scrollbar',
			draggable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 35,
			},
			480: {
				slidesPerView: 2,
				spaceBetween: 35,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 35,
			}
		}
	})
}());

// End slider init

function checkLastCol() {
	let rowTable = document.querySelectorAll('tbody tr');
	rowTable.forEach(function(el) {

		let rowItem = el.querySelectorAll('td')

		if(rowItem.length === 2) {
			rowItem[1].classList.add('td_mod')
		}
	});
}
 
// const array = [
// 	{
// 		id: 1,
// 		name: 'Alexey',
// 		number: 1
// 	},
// 	{
// 		id: 2,
// 		name: 'Alex',
// 		number: 1
// 	},
// 	{
// 		id: 3,
// 		name: 'Sofia',
// 		number: 1
// 	},
// 	{
// 		id: 4,
// 		name: 'Victor',
// 		number: 1
// 	}
// ]

// const arrayMap = array.map((item)=>{
// 	const name = item.name.split('');
// 	return name.filter((itemFilter)=> {
		
// 	})
// })

// console.log('arrayMap',arrayMap);





























