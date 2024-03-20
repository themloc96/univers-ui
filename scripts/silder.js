gsap.ticker.fps(60);

////////////////////////////////////
const carouselwrap = document.querySelector('.slider');
const thumbnails = carouselwrap.querySelectorAll('.card');

let thumbnail_gap = 7;
let carouselwrapWidth = carouselwrap.clientWidth;
let thumbnailWidth = thumbnails[0].clientWidth + thumbnail_gap;
let wrapWidth = thumbnails.length * thumbnailWidth;

let time = 0;
let scrollSpeed = 1;
let oldScrollY = thumbnail_gap;
let scrollY = thumbnail_gap;
let _y = thumbnail_gap;
let autoscroll = true;

// lerp
const lerp = (v0, v1, t) => {
    return v0 * (1 - t) + v1 * t;
};

/// touch
let touchStart = 0;
let touchX = 0;
let isDragging = false;
let idleTimer;

const startIdleTimer = () => {
    idleTimer = setTimeout(() => {
        // Resume auto scrolling after 100ms of idle time
        autoscroll = true;
        scrollSpeed = 1; // autoscroll speed
    }, 100);
};

const stopIdleTimer = () => {
    autoscroll = false;
    clearTimeout(idleTimer);
};

const handleTouchStart = (e) => {
    touchStart = e.clientX || e.touches[0].clientX;
    isDragging = true;
    carouselwrap.classList.add('is-dragging');

    stopIdleTimer(); // Stop the idle timer when the user interacts with the carousel
};

const handleTouchMove = (e) => {
    if (!isDragging) return;
    touchX = e.clientX || e.touches[0].clientX;
    scrollY += (touchX - touchStart) * 1.5;
    touchStart = touchX;

    stopIdleTimer(); // stop the idle timer when the user interacts with the carousel
};

const handleTouchEnd = () => {
    isDragging = false;
    carouselwrap.classList.remove('is-dragging');

    startIdleTimer(); // start the idle timer when the user stops interacting with the carousel
};

// event listeners
carouselwrap.addEventListener('touchstart', handleTouchStart);
carouselwrap.addEventListener('touchmove', handleTouchMove);
carouselwrap.addEventListener('touchend', handleTouchEnd);

carouselwrap.addEventListener('mousedown', handleTouchStart);
carouselwrap.addEventListener('mousemove', handleTouchMove);
carouselwrap.addEventListener('mouseleave', handleTouchEnd);
carouselwrap.addEventListener('mouseup', handleTouchEnd);

carouselwrap.addEventListener('selectstart', () => {
    return false;
});

// reposition
const reposition = (scroll) => {
    gsap.set(thumbnails, {
        x: (i) => {
            return i * thumbnailWidth + scroll;
        },
        y: (i) => {
            const index = (i * thumbnailWidth) / thumbnailWidth;
            const wrappedIndex = gsap.utils.wrap(-1, thumbnails.length - 1, index);
            return (Math.sin(wrappedIndex * 1 + -time)) * 25;
        },
        modifiers: {
            x: (x, target) => {
                const s = gsap.utils.wrap(-thumbnailWidth, wrapWidth - thumbnailWidth, parseInt(x));
                return `${s}px`;
            },
        },
    });
};

// tick
const render = () => {
    if (autoscroll) {
        scrollY -= scrollSpeed;
    }
    _y = lerp(_y, scrollY, 0.1);
    reposition(_y);

    if (!autoscroll) {
        scrollSpeed = _y - oldScrollY;
        oldScrollY = _y;
    }

    time += 0.05;
    // requestAnimationFrame(render);
};

// onload reposition once
reposition(0);
// onload start the idle timer
// startIdleTimer();
gsap.ticker.add(render);

// resize
window.addEventListener('resize', () => {
    carouselwrapWidth = carouselwrap.clientWidth;
    thumbnailWidth = thumbnails[0].clientWidth + thumbnail_gap;
    wrapWidth = thumbnails.length * thumbnailWidth;
});

