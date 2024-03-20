class Context {
	constructor(element, gap = 10) {
		this.carouselwrap = document.querySelector(element)
		this.thumbnails = this.carouselwrap.querySelectorAll('.card');
		this.thumbnail_gap = gap;
		
		this.carouselwrapWidth = this.carouselwrap.clientWidth;
		this.thumbnailWidth = this.thumbnails[0].clientWidth + this.thumbnail_gap;
		this.wrapWidth = this.thumbnails.length * this.thumbnailWidth;

		this.time = 0;
		this.scrollSpeed = 1;
		this.oldScrollY = this.thumbnail_gap;
		this.scrollY = this.thumbnail_gap;
		this._y = this.thumbnail_gap;
		this.autoscroll = true;

		this.touchStart = 0;
		this.touchX = 0;
		this.isDragging = false;
		this.idleTimer;


	}
	init(){
		this.reposition(0);
		let _render = this.render.bind(this)
		gsap.ticker.add(_render);
		let _handleTouchStart = this.handleTouchStart.bind(this)
		let handleTouchMove = this.handleTouchMove.bind(this)
		let handleTouchEnd = this.handleTouchEnd.bind(this)
		this.carouselwrap.addEventListener('touchstart', _handleTouchStart);
		this.carouselwrap.addEventListener('touchmove', handleTouchMove);
		this.carouselwrap.addEventListener('touchend', handleTouchEnd);
		this.carouselwrap.addEventListener('mousedown', _handleTouchStart);
		this.carouselwrap.addEventListener('mousemove', handleTouchMove);
		this.carouselwrap.addEventListener('mouseleave', handleTouchEnd);
		this.carouselwrap.addEventListener('mouseup', handleTouchEnd);

		// this.carouselwrap.addEventListener('selectstart', () => {
		// 	return false;
		// });

	}
	render() {
		if (this.autoscroll) {
			this.scrollY -= this.scrollSpeed;
		}
		this._y = this.lerp(this._y, this.scrollY, 0.1);
		this.reposition(this._y);

		if (!this.autoscroll) {
			this.scrollSpeed = this._y - this.oldScrollY;
			this.oldScrollY = this._y;
		}

		this.time += 0.05;
	}
	reposition(scroll) {
		gsap.set(this.thumbnails, {
			x: (i) => {
				return i * this.thumbnailWidth + scroll;
			},
			y: (i) => {
				const index = (i * this.thumbnailWidth) / this.thumbnailWidth;
				const wrappedIndex = gsap.utils.wrap(-1, this.thumbnails.length - 1, index);
				return (Math.sin(wrappedIndex * 1 + -this.time)) * 25;
			},
			modifiers: {
				x: (x, target) => {
					const s = gsap.utils.wrap(-this.thumbnailWidth, this.wrapWidth - this.thumbnailWidth, parseInt(x));
					return `${s}px`;
				},
			},
		});
	}
	handleTouchStart(e) {
		this.touchStart = e.clientX || e.touches[0].clientX;
		this.isDragging = true;
		this.carouselwrap.classList.add('is-dragging');
	
		this.stopIdleTimer(); // Stop the idle timer when the user interacts with the carousel
	}
	handleTouchMove(e) {
		if (!this.isDragging) return;
		this.touchX = e.clientX || e.touches[0].clientX;
		this.scrollY += (this.touchX - this.touchStart) * 1.5;
		this.touchStart = this.touchX;
	
		this.stopIdleTimer(); // stop the idle timer when the user interacts with the carousel
	}
	handleTouchEnd() {
		this.isDragging = false;
		this.carouselwrap.classList.remove('is-dragging');
	
		this.startIdleTimer(); // start the idle timer when the user stops interacting with the carousel
	}
	startIdleTimer() {
		this.idleTimer = setTimeout(() => {
			// Resume auto scrolling after 100ms of idle this.time
			this.autoscroll = true;
			this.scrollSpeed = 1; // this.autoscroll speed
		}, 100);
	}
	stopIdleTimer() {
		this.autoscroll = false;
		clearTimeout(this.idleTimer);
	}
	lerp(v0, v1, t) {
		return v0 * (1 - t) + v1 * t;
	};
}