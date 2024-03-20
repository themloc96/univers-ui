gsap.ticker.fps(60);

////////////////////////////////////
const carouselwrap = document.querySelector(".slider");
const thumbnails = carouselwrap.querySelectorAll(".card");

let thumbnail_gap = 10;
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
  carouselwrap.classList.add("is-dragging");

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
  carouselwrap.classList.remove("is-dragging");

  startIdleTimer(); // start the idle timer when the user stops interacting with the carousel
};

// event listeners
carouselwrap.addEventListener("touchstart", handleTouchStart);
carouselwrap.addEventListener("touchmove", handleTouchMove);
carouselwrap.addEventListener("touchend", handleTouchEnd);

carouselwrap.addEventListener("mousedown", handleTouchStart);
carouselwrap.addEventListener("mousemove", handleTouchMove);
carouselwrap.addEventListener("mouseleave", handleTouchEnd);
carouselwrap.addEventListener("mouseup", handleTouchEnd);

carouselwrap.addEventListener("selectstart", () => {
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
      return Math.sin(wrappedIndex * 1 + -time) * 25;
    },
    modifiers: {
      x: (x, target) => {
        const s = gsap.utils.wrap(
          -thumbnailWidth,
          wrapWidth - thumbnailWidth,
          parseInt(x)
        );
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
window.addEventListener("resize", () => {
  carouselwrapWidth = carouselwrap.clientWidth;
  thumbnailWidth = thumbnails[0].clientWidth + thumbnail_gap;
  wrapWidth = thumbnails.length * thumbnailWidth;
});

// 테스트용 딜레이
gsap.delayedCall(0.5, () => {
  //toast();
});

// function resendCode() {
//   s = 0;
//   m = 5;

//   clearResendTimeout();
//   // deActiveResend();
//   setUpResend();
//   stopCountdowns();
//   removeError();
//   clearInput();
//   doActiveSubmitBtn("");
//   startCountdowns();
// }

let n = 0;
function toast(dur) {
  const toast = document.querySelectorAll(".popup-toast")[n];
  const toastContent = toast.querySelector("p");

  gsap.killTweensOf([toast, toastContent], "all");

  gsap.set(toast, { opacity: 0 });
  gsap.set(toastContent, { opacity: 0 });

  const sv = 0.95;

  gsap.set(toast, { display: "flex" });
  gsap.from(toast, { scale: sv, duration: 0.35, ease: "power1.out" });
  gsap.to(toast, {
    opacity: 1,
    duration: 0.3,
    ease: "power1.out",
    onComplete: () => {
      gsap.delayedCall(dur ?? 2, () => {
        gsap.to(toast, {
          opacity: 0,
          duration: 0.2,
          ease: "power1.out",
          onComplete: () => {
            gsap.set(toast, { display: "none" });
          },
        });
      });
    },
  });

  gsap.set(toastContent, { display: "block" });
  gsap.from(toastContent, { scale: sv, duration: 0.35, ease: "power1.out" });
  gsap.to(toastContent, {
    opacity: 1,
    duration: 0.3,
    ease: "power1.out",
    onComplete: () => {
      gsap.delayedCall(dur ?? 2, () => {
        gsap.to(toastContent, {
          opacity: 0,
          duration: 0.2,
          ease: "power1.out",
          onComplete: () => {
            gsap.set(toastContent, { display: "none" });
          },
        });
      });
    },
  });
}
function resetAlert(__n) {
  n = __n;
  // deActiveResend();
  gsap.delayedCall(0.5, (n) => {
    toast(n);
  });
}