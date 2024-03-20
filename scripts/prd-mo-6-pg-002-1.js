function openLoginPopup() {
    var popupElem = document.querySelector(".popup-wrap");
    console.log(popupElem);
    popupElem.style.display = "block";
}

function closeLoginPopup() {
    var popupElem = document.querySelector(".popup-wrap");
    console.log(popupElem);
    popupElem.style.display = "none";
}

function changeCouponDownloadStatus(e) {
    if (!e.classList.contains("disable")){
        e.classList.add("disable");
        gsap.delayedCall(0.5, () => {
            toast();
        });
    }
}

function changeAllCouponDownloadStatus(e) {
    if (e.classList.contains("bg-black")){
        e.classList.add("disabled");
        e.classList.remove("bg-black");
        e.querySelector(".txt").innerText = "모든 쿠폰을 받았어요";
        document.querySelectorAll(".coupon-download").forEach((elem) => {
            console.log(elem.classList.contains("disable"));
            if(!elem.classList.contains("disable")) {
                elem.classList.add("disable");
            }
        });
        document.querySelector(".popup-toast").innerText = "전체 쿠폰이 발급되었어요."
        gsap.delayedCall(0.5, () => {
            toast();
        });
    }
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