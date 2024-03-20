window.onload = function () {
  var bottomSheet = document.querySelectorAll(".bottomsheet");
  bottomSheet[0].setAttribute("style", "height: 334px!important");

  var txtBrand = document.querySelector(".txt-title .txt-brand");
  txtBrand.addEventListener("click", (e) => {
    console.log("asdf");
    document
      .querySelector("body > div.popup-dropdown.popup-bottomsheet")
      .classList.add("show");
  });

  var closeBtn = document.querySelector(".popup-dropdown .btn-header-close");
  closeBtn.addEventListener("click", (e) => {
    document
      .querySelector("body > div.popup-dropdown.popup-bottomsheet")
      .classList.remove("show");
  });

  var bottomSheetOverlay = document.querySelector(
    ".popup-bottomsheet > div.background"
  );
  bottomSheetOverlay.addEventListener("click", (e) => {
    document
      .querySelector("body > div.popup-dropdown.popup-bottomsheet")
      .classList.remove("show");
  });

  var numCopyBtn = document.querySelector(
    "div.card-barcode.top > div.barcode > div.txt > button"
  );
  numCopyBtn.addEventListener("click", (e) => {
    gsap.delayedCall(0.5, () => {
      toast();
    });
  });

  //   var listHeaderBtn = document.querySelector(
  //     "body > div.popup-barcode.popup-dropdown.show > div.background > div > div > div"
  //   );
  //   listHeaderBtn.addEventListener("click", (e) => {
  //     e.preventDefault();
  //   });
};
// 테스트용 딜레이
// gsap.delayedCall(0.5, () => {
//   toast();
// });

class PopupBarcode {
  constructor(element) {
    this._ele_popup = document.querySelector(element);
    this.timeout = null;
  }
  show() {
    this._ele_popup.classList.add("show");
  }
  hide() {
    //   this._ele_popup.classList.remove("show");
  }
  init() {
    let element_reload = this._ele_popup.querySelector(".expired .btn-refresh");
    let _load = this.load.bind(this);
    element_reload?.addEventListener("click", _load);

    let element_close = this._ele_popup.querySelector(".btn-header-home");
    let _close = this.hide.bind(this);
    element_close?.addEventListener("click", _close);
  }
  stop() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.setExpired(true);
  }
  setExpired(show) {
    let element_time = this._ele_popup.querySelector(".txt-time");
    let element_expired = this._ele_popup.querySelector(".barcode .expired");
    if (show) {
      element_time.classList.remove("active");
      element_expired.classList.add("show");
    } else {
      element_time.classList.add("active");
      element_expired.classList.remove("show");
    }
  }
  load() {
    this.setExpired(false);
    let min = this._ele_popup.getAttribute("data-time-min");
    let second = this._ele_popup.getAttribute("data-time-second");
    this.countDowns(parseInt(min), parseInt(second));
  }
  countDowns(min, second) {
    if (second === -1) {
      min -= 1;
      second = 59;
    }

    if ((second == 0 && min == 0) || min == -1) {
      this.stop();
      return false;
    }

    let txtM = min < 10 ? `0${min.toString()}` : `${min.toString()}`;
    let txtS = second < 10 ? `0${second.toString()}` : `${second.toString()}`;

    let element_time = this._ele_popup.querySelector(".txt-time");
    element_time.innerHTML = `<p><span>남은 시간</span><span>${txtM} : ${txtS}</span></p>`;
    let self = this;
    this.timeout = setTimeout(function () {
      second--;
      self.countDowns(min, second);
    }, 1000);
  }
}
