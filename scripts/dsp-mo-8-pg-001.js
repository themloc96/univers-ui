var swiper = new Swiper(".banner", {
	pagination: {
		el: ".pageindicator",
		clickable: true,
		bulletActiveClass:'selected',
		renderBullet: function (index, className) {
			return '<div class="unselected ' + className + '"></div>';
		},
	},
	on: {
		init: function (sw) {
			let number = sw.el.querySelector('.pageindicator-num')
			number.innerHTML = `<div><span>${(sw.activeIndex +  1)}</span><span>/</span><span>${(sw.slides.length)}</span></div>`;
		},
		slideChange: function (sw) {
			let number = sw.el.querySelector('.pageindicator-num')
			number.innerHTML = `<div><span>${(sw.activeIndex +  1)}</span><span>/</span><span>${(sw.slides.length)}</span></div>`;
		},
	}
});

var btn_med = document.querySelectorAll('.tabs .btn-med')
btn_med.forEach(btn=>{
	btn.addEventListener('click',()=>{
		btn_med.forEach(btn=>{
			btn.classList.remove('active')
		})
		btn.classList.add('active')
	})
})