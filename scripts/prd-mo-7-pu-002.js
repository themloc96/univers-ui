function productFliter(scroll) {
	let box_fliter = document.querySelector('.box-fliter')
	let rect = box_fliter.getBoundingClientRect()
	let eleme_scroll = rect.top// + window.pageYOffset
	let fliter = box_fliter.querySelector('.fliter')
	if (scroll >= eleme_scroll) {
		fliter.classList.add('top')
	} else {
		fliter.classList.remove('top')
	}
	return fliter.clientHeight;
}

(function () {
	let body = document.querySelector('body')
	let content = document.querySelector('.prd-mo-7-pu-002 .content')
	// document.styleSheets[0].addRule('.prd-mo-7-pu-002:before',`transform:translate(${body.clientWidth}px, 0);display: block;`);
	content?.addEventListener("scroll", (event) => {
		productFliter(115)
	});
	let tabsearch = document.querySelector('.btn-input-search')
	tabsearch.addEventListener('click', function () {
		const popup = document.querySelector(".prd-mo-7-pu-002-1");
		// gsap.killTweensOf([popup], "all");
		gsap.set(body, { overflow: 'hidden' });
		gsap.set(popup, { display: 'block' });
		gsap.set(popup, { transform: `translate(${body.clientWidth}px, 0)` });
		gsap.to(popup, {
			transform: "translate(0, 0)",
			duration: 0.5,
			onComplete: () => {
				let search = document.querySelector(".input-search-gray-2")
				let searchInput = search.querySelector("input[type=search]");
				searchInput.focus();
				// gsap.set(main, { display: 'none' });
				gsap.set(popup, {zIndex:9999 });
			},
		});
	})
	let btn_back = document.querySelector('.btn-header-back')
	btn_back.addEventListener('click', function () {
		const popup = document.querySelector(".prd-mo-7-pu-002-1");
		let content = popup.querySelector('.content');
		gsap.set(body, { overflow: 'auto' });
		gsap.set(popup, {zIndex:999 });
		gsap.to(popup, {
			transform: `translate(${body.clientWidth}px, 0)`,
			duration: 0.5,
			onComplete: () => {
				content.scrollTo(0,0)
				gsap.set(popup, { display: 'none' });
			},
		});
	})
}());