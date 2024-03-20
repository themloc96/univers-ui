// .popup-toast 클래스 태그를 가진 팝업 컴포넌트를 노출시킴.
function toast(dur, n) {
  if (!n) {
    n = 0;
  }
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

// 선택한 요소에 대한 z-index 값 변경
function setZIndex(e, number) {
  e.style.zIndex = number;
}
