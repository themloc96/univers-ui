function handlerSearch() {
  let box = document.querySelector(".input_search_default");
  if (!box) {
    return;
  }

  
  let input = box.querySelector(".input_search");
  let icon_clean = box.querySelector(".btn_clean");
  input.addEventListener("keyup", (e) => {
    let val = e.target.value || String();
    if (val.length > 0) {
      icon_clean.classList.add("active");
    } else {
      icon_clean.classList.remove("active");
    }
  });
  icon_clean.addEventListener("click", (event) => {
    input.value = "";
    icon_clean.classList.remove("active");
  });
}
handlerSearch();

function myFunction() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}


function toast(dur) {
  const toast = document.querySelector(".popup-toast");
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
// 테스트용 딜레이
gsap.delayedCall(0.5, () => {
  toast();
});

