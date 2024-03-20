let giftSection = document.querySelector(".giftInfo");
let productSection = document.querySelector(".productInfo");
var isToastOpened = false;

function expanded() {
  if (
    document.querySelector(".detail-info-img").classList.contains("expanded")
  ) {
    document.querySelector(".btn-more").innerHTML =
      "<span>상품정보 더보기</span><i></i>";
    document.querySelector(".detail-info-img").classList.remove("expanded");
  } else {
    document.querySelector(".detail-info-img").classList.add("expanded");
    document.querySelector(".btn-more").innerHTML =
      "<span>상품정보 접기</span><i></i>";
  }
}

function change2product() {
  console.log(giftSection);
  console.log(productSection);

  giftSection.style.display = "none";
  productSection.style.display = "block";
}

function change2gift() {
  giftSection.style.display = "block";
  productSection.style.display = "none";
}

function displayPopup() {
  if (!isToastOpened) {
    var bg = document.querySelector(".background-overlay");
    bg.style.cssText = "display : block;";
    setTimeout(()=>{
      bg.style.cssText = "display : block; opacity : 0.5";
    },50)

    document.querySelector(".popup-center-02").style.display = "block";
    document.body.style.overflow = "hidden";
  }
}

function dismissPopup() {
  document.querySelectorAll(".background-overlay").forEach((elem) => {
  

    elem.style.cssText = "display : block; opacity : 0";
    setTimeout(()=>{
      elem.style.cssText = "display : none;";
    },500)
  
    
  });
  // document.querySelector(".popup-center-02").style.display = "none";
  document.querySelectorAll(".popup-center-02").forEach((elem) => {
    elem.style.display = "none";
  });
  document.body.style.overflow = "auto";
}

function displayToast() {
  console.log(isToastOpened);
  if (!isToastOpened) {
    isToastOpened = true;
    setTimeout(() => {
      isToastOpened = false;
    }, 3000);
    document.querySelector(".background-overlay").style.display = "none";
    document.querySelector(".popup-center-02").style.display = "none";
    document.body.style.overflow = "auto";
    gsap.delayedCall(0.5, () => {
      toast();
    });
  }
}

function popupView(type) {
  console.log(type);
  document.body.style.overflow = "hidden";
  var bg = document.querySelector(".background-overlay");
  bg.style.cssText = "display : block;";
  setTimeout(()=>{
    bg.style.cssText = "display : block; opacity : 0.5";
  },50)
  
  
  document.querySelector("#" + type).style.display = "block";
}

function popupDelete() {
  var bg = document.querySelector(".background-overlay");
  bg.style.cssText = "display : block; opacity : 0";
  setTimeout(()=>{
    bg.style.cssText = "display : none;";
  },500)


  
  document.querySelectorAll(".popup-center-02").forEach(function (el) {
    el.style.display = "none";
  });
  document.body.style.overflow = "auto";
}

function resetAlert() {
  // deActiveResend();
  gsap.delayedCall(0.5, () => {
    toast();
  });
}

function disableClickEvent() {
  return;
}

function appendListener() {
  switch (document.title) {
    case "SUB-MO-8-PG-001(1)":
      //다시 보내기 버튼
      document
        .querySelectorAll(".btn-txt-underline")[0]
        .addEventListener("click", () => {
          displayPopup();
        });

      //재전송 팝업 내 취소 버튼
      document
        .querySelector(".btn-area .bg-gray")
        .addEventListener("click", () => {
          dismissPopup();
        });

      //재전송 팝업 내 전송 버튼
      document
        .querySelector(".btn-area .bg-black")
        .addEventListener("click", () => {
          displayToast();
        });

      //전송 취소 팝업 내 취소 버튼
      document
        .querySelector("#refuse .bg-gray")
        .addEventListener("click", () => {
          dismissPopup();
        });

      //전송 취소 팝업 내 확인 버튼
      // document.querySelector("#refuse .bg-black")
      // .addEventListener("click", )

      //보낸 선물 취소하기 버튼
      document
        .querySelector(".con-info .btn-txt-underline")
        .addEventListener("click", () => {
          popupView("refuse");
        });
      break;

    case "SUB-MO-8-TB-003":
    case "SUB-MO-8-TB-003(1)":
    case "SUB-MO-8-TB-003(2)":
    case "SUB-MO-8-TB-004":
      //선물정보 탭 온클릭
      document
        .querySelectorAll(".tab-category button:nth-child(1)")
        .forEach((elem) => {
          elem.addEventListener("click", () => {
            change2gift();
          });
        });

      //상품정보 탭 온클릭
      document
        .querySelectorAll(".tab-category button:nth-child(2)")
        .forEach((elem) => {
          elem.addEventListener("click", () => {
            change2product();
          });
        });

      //연장하기 버튼 온클릭
      document.querySelector(".btn-xsmall").addEventListener("click", () => {
        popupView("extension");
      });

      //복사하기 버튼 온클릭
      document
        .querySelectorAll(".btn-txt-underline")[0]
        .addEventListener("click", () => {
          resetAlert();
        });

      // 선물 거절하기 버튼 온클릭
      document
        .querySelectorAll(".btn-txt-underline")[1]
        .addEventListener("click", () => {
          popupView("refuse");
        });

      //상품정보 더보기 버튼 온클릭
      document.querySelector(".btn-more").addEventListener("click", () => {
        expanded();
      });

      //팝업 닫기버튼
      document.querySelectorAll(".bg-gray").forEach((elem) => {
        elem.addEventListener("click", () => {
          popupDelete();
        });
      });

      //팝업 확인버튼
      document
        .querySelectorAll(".popup-center-02 .bg-black")[2]
        .addEventListener("click", () => {
          popupDelete();
        });

      //선물 사용하기 버튼 온클릭
      document
        .querySelector(".btn-main-task.bg-black")
        .addEventListener("click", () => {
          popupView("login");
        });

      break;

    default:
      console.log("Appending Listener Error");
      break;
  }
}

window.onload = function () {
  appendListener();
};
