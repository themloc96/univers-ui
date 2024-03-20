let s = 0;
let m = 5;
let timeout = null;
let tActiveResend = null;
const TIME_ACTIVE_RESEND = 6000;

const startCountdowns = () => {
  if (s === -1) {
    m -= 1;
    s = 59;
  }

  if (s == 0 && m == 0) {
    document.querySelector(".inp-auth-number").blur();
    // alert("인증 시간이 초과되었어요. 인증번호를 재전송해주세요");
    onTimeOut();
  }

  if (m == -1) {
    clearTimeout(timeout);
    return false;
  }

  txtM = m < 10 ? `0${m.toString()}` : `${m.toString()}`;
  txtS = s < 10 ? `0${s.toString()}` : `${s.toString()}`;

  document.querySelector(".auth-number").innerText = `${txtM}:${txtS}`;

  timeout = setTimeout(function () {
    s--;
    startCountdowns();
  }, 1000);
};

const stopCountdowns = () => {
  clearTimeout(timeout);
};

const clearCountdowns = () => {
  clearTimeout(timeout);
  document.querySelector(".auth-number").innerText = `05:00`;
};

function clearResendTimeout() {
  clearTimeout(tActiveResend);
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

function resetAlert() {
  // deActiveResend();
  gsap.delayedCall(0.5, () => {
    toast();
  });
};

// function goBack() {
//   if (confirm("인증을 중단하고 나가실 건가요?")) {
//     if (document.referrer == "") {
//       window.location.replace(
//         `${window.location.href.replace(
//           "login/MEM-MO-PG-003.html",
//           "login/MEM-MO-PG-001.html"
//         )}`
//       );
//     } else {
//       history.back();
//     }
//     return true;
//   } else {
//     return false;
//   }
  // if (document.referrer == "") {
  //     window.location.replace(`${window.location.href.replace('login/MEM-MO-PG-003.html', 'login/MEM-MO-PG-001.html')}`);
  // } else {
  //     history.back()
  // }
  // return false;
// }

// function clearInput() {
//   document.querySelector(".inp-auth-number").value = "";
// }

// function activeLoadingButton() {
//   document.querySelector(".btn-submit").textContent = "";
//   document.querySelector(".btn-submit").classList.add("disabled-loading");
// }

// function inActiveLoadingButton() {
//   document.querySelector(".btn-submit").textContent = "";
//   document.querySelector(".btn-submit").classList.remove("disabled-loading");
//   document.querySelector(".btn-submit").textContent = "인증하기";
// }

// function removeError() {
//   document.querySelectorAll(".form-group")[0].classList.remove("has-error");
//   document.querySelector(".txt-notice").classList.remove("has-error");
//   document.querySelector(".txt-notice").classList.add("info");
//   document.querySelector(".txt-notice").textContent =
//     "인증번호가 도착하지 않으셨나요?";
// }

// function addError() {
//   document.querySelectorAll(".form-group")[0].classList.add("has-error");
//   document.querySelector(".txt-notice").classList.remove("info");
//   document.querySelector(".txt-notice").classList.add("has-error");
//   document.querySelector(".txt-notice").textContent =
//     "인증번호가 일치하지 않아요. 다시 확인해 주세요.";
// }

// function onTimeOut() {
//   document.querySelector(".inp-auth-number").blur();
//   document.querySelectorAll(".form-group")[0].classList.add("has-error");
//   document.querySelector(".txt-notice").classList.remove("info");
//   document.querySelector(".txt-notice").classList.add("has-error");
//   document.querySelector(".txt-notice").textContent =
//     "인증 시간이 초과되었어요. 인증번호를 재전송해 주세요.";
// }

function submit(event) {
  const validNumber = "123123";
  let num = document.querySelector(".inp-auth-number").value;

  if (!num || num.length === 0) {
    return;
  }

  if (6 > num.length || validNumber !== num) {
    addError();
  } else {
    stopCountdowns();
    removeError();
    clearCountdowns();
  }
}

function doActiveSubmitBtn(num) {
  if (num && num.length > 0) {
    document.querySelector(".btn-submit").classList.add("btn-active");
    document.querySelector(".btn-submit").disabled = false;
  } else {
    document.querySelector(".btn-submit").classList.remove("btn-active");
    document.querySelector(".btn-submit").disabled = false;
  }
}

function activeResend() {
  let btn = document.querySelector(".btn-small");
  btn.classList.add("btn-active");
  btn.disabled = false;
}

function deActiveResend() {
  let btn = document.querySelector(".btn-small");
  btn.classList.remove("btn-active");
  btn.disabled = true;
}

// function alertWaitFirst() {
//   if ((m >= 4 && s > 55) || m == 5) {
//     alert("인증번호가 재전송 되었어요. 확인 후 입력해 주세요.");
//   } else {
//     addToastPopup();
//   }
// }

// function setUpResend() {
//   document
//     .querySelector(".btn-small")
//     .addEventListener("click", alertWaitFirst);

//   tActiveResend = setTimeout(() => {
//     document.querySelector(".btn-small").addEventListener("click", () => {
//       if ((m <= 4 && s <= 55) || m <= 3) {
//         resendCode();
//       } else {
//         return false;
//       }
//     });
//     activeResend();
//   }, TIME_ACTIVE_RESEND);
// }

// function alertPopup() {
//   // activeLoadingButton();
//   let inpAuthNumber = document.querySelector(".inp-auth-number");
//   let num = inpAuthNumber.value;

//   if (num !== "000000" && num.length !== 0) {
//     // 000000 이외 인증번호는 오류 메시지로 처리
//     addError();
//     // alert("인증번호가 일치하지 않아요. 다시 확인해 주세요");
//     inActiveLoadingButton();
//     return false;
//   }

//   if ((!num || num.length === 0) && s > 1) {
//     document.querySelector(".inp-auth-number").blur();
//     // alert("인증번호 입력 후 인증해 주세요.");
//     document.querySelector(".form-group").classList.add("active");
//     inActiveLoadingButton();
//     // inpAuthNumber.focus();
//     return false;
//   }

//   if (s > 1) {
//     activeLoadingButton();
//     setTimeout(() => {
//       inActiveLoadingButton();
//     }, 1500);
//   }
// }

// init
// (function () {
//   let num = document.querySelector(".inp-auth-number");

//   num.addEventListener("focus", (event) => {
//     document.querySelector(".form-group").classList.add("active");
//   });

//   num.addEventListener("blur", (event) => {
//     if (num.value.length <= 0) {
//       alertPopup();
//       document.querySelector(".form-group").classList.add("active");
//     }
//     document.querySelector(".form-group").classList.remove("active");
//   });

//   num.addEventListener("input", (event) => {
//     removeError();
//     let val = event.target.value;
//     num.value = val.replace(/[^\d.-]+/g, "");
//     doActiveSubmitBtn(num.value);
//   });

//   num.addEventListener("change", (event) => {
//     removeError();
//     let val = event.target.value;
//     num.value = val.replace(/[^\d.-]+/g, "");
//     doActiveSubmitBtn(num.value);
//   });

//   num.addEventListener("keyup", (event) => {
//     if (event.key === "Enter" || event.target.value.length === 6) {
//       alertPopup();
//     }
//   });
//   resendCode();
// })();
