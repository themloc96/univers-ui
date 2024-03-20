const login = document.querySelector(".login");
const input = login.querySelectorAll("input");
const div_select = login.querySelector(".input-default.select");
var value_parent;
let el_ui_mem_mo_bs_002 = document.querySelector(".MEM-MO-BS-002");

class PopupDropdown {
  constructor(element, onSelect, onLoad, onHide) {
    this.element = element;
    let self = this;
    element
      .querySelector(".btn-header-close")
      ?.addEventListener("click", function (event) {
        self.hide();
      });
    element
      .querySelector(".background")
      .addEventListener("click", function (event) {
        self.hide();
      });
    this.onSelect = onSelect;
    this.onLoad = onLoad;
    this.onHide = onHide;
  }

  show(render = false) {
    if (render) {
      this.load();
    }
    this.element.classList.add("show");
    const yv = 60;
    const body = this.element.querySelector(".bottomsheet");
    const background = this.element.querySelector(".background");
    const iconDropUp = document.querySelector(".input-default.select");
    gsap.set(body, { y: yv, opacity: 0 });
    gsap.set(background, { display: "flex", opacity: 0 });
    gsap.set(iconDropUp, {
      "--after-transform": "scaleY(1)",
      delay: 0.1,
      duration: 0.35,
    });
    gsap.to(iconDropUp, {
      "--after-transform": "scaleY(-1)",
      delay: 0.1,
      duration: 0.35,
    });
    gsap.to(background, {
      opacity: 0.5,
      duration: 0.3,
      ease: "power1.inOut",
    });
    gsap.to(body, {
      opacity: 1,
      duration: 0.35,
      ease: "power2.out",
      delay: 0.1,
    });
    gsap.to(body, { y: 0, duration: 0.35, ease: "power2.out", delay: 0.1 });
  }

  hide() {
    const background = document.querySelector(".background");
    const body = this.element.querySelector(".bottomsheet");
    const iconDropUp = document.querySelector(".input-default.select");
    gsap.set(background, { display: "flex", opacity: 0.5 });
    gsap.to(iconDropUp, {
      "--after-transform": "scaleY(1)",
      delay: 0.1,
      duration: 0.35,
    });
    gsap.to(background, { opacity: 0, duration: 0.2, ease: "power2.out" });
    gsap.to(body, {
      y: 60,
      duration: 0.2,
      opacity:0,
      ease: "power2.out",
      onComplete: () => {
        gsap.set(background, { display: "none" });
        gsap.set(body, { opacity: 0 });
        this.element.classList.remove("show");
      },
    });

    // timeline.fromTo(body, { opacity: 1 }, { opacity: 0, y: 0, duration: 0.35 });
    // timeline.fromTo(
    //   iconDropUp,
    //   { "--after-transform": "scaleY(-1)" },
    //   { "--after-transform": "scaleY(1)" }
    // );
    // timeline.fromTo(
    //   background,
    //   { opacity: 0 },
    //   {
    //     opacity: 0,
    //     duration: 0.35,
    //     // display: "none",
    //     onComplete: () => {
    //       this.element.classList.remove("show");
    //     },
    //   }
    // );

    this.onHide();
  }

  load() {
    let self = this;
    let items = this.onLoad();
    let ul = this.element.querySelector("ul");
    ul.innerHTML = "";
    items.forEach((item) => {
      let li = document.createElement("li");
      if (item.active) {
        li.classList.add("active");
      }
      const setLineHeight =
        item.title === "KT 알뜰폰" ? `style="line-height:17px;"` : "";
      li.innerHTML = `<span ${setLineHeight}>${item.title}</span> <i class="checked icon icon-check-active"></i>`;
      li.classList.add("btn-bottomsheet");
      li.addEventListener("click", function (event) {
        self.onSelect(item.title);
        self.hide();
      });
      ul.appendChild(li);
    });
  }
}

function onLoadPopup() {
  let select = div_select.querySelector("select");
  let options = div_select.querySelectorAll("select option");
  let dataOptions = [];
  div_select.classList.add("active");

  options.forEach((item) => {
    let option = {
      title: item.text,
      active: false,
    };

    if (select.value == item.text) {
      option.active = true;
    }

    dataOptions.push(option);
  });

  return dataOptions;
}

function onSelectPopup(text) {
  let select = div_select.querySelector("select");
  let label = div_select.querySelector("span");
  select.value = text;
  label.innerHTML = text;
  div_select.classList.add("has_value");
}

function onHidePopup() {
  div_select.classList.remove("active");
  let phoneNumber = login.querySelector("input.phonenumber");
  phoneNumber.focus();
}

const popup = new PopupDropdown(
  document.querySelector(".popup-dropdown"),
  onSelectPopup,
  onLoadPopup,
  onHidePopup
);

// 주민등록 번호 핸들러인듯함.
function handlerInput(status) {
  let input_1 = login.querySelector("input.input-1"); // 주민등록번호 처음 input
  let input_2 = login.querySelector("input.input-2"); // 주민등록번호 나중 input
  let cross = login.querySelector(".cross"); // 주민등록번호 사이의 '-'
  let dot = login.querySelector(".dot"); // 주민등록번호 뒷자리 '**********'

  if (status) {
    input_1.style.width = "55px";
    input_2.style.display = "initial";
    cross.style.display = "initial";
    dot.style.display = "initial";
  } else {
    input_1.style.width = "";
    input_2.style.display = "none";
    cross.style.display = "none";
    dot.style.display = "none";
  }
}

function validatePhone(e) {
  const parentNode = this.parentNode;
  var val = e.target.value.replace(/\D/g, "");
  var x = val.match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  if (val.length >= 11) {
    var x = val.match(/(\d{0,3})(\d{0,4})(\d{0,4})/);
  }
  if (!x[2]) {
    e.target.value = x[1];
    parentNode.classList.add("has-error");
  } else {
    e.target.value = "" + x[1] + " - " + x[2] + (x[3] ? " - " + x[3] : "");
    // parentNode.classList.remove("has-error");
  }
}

function isEmpty(value){
    if( value == "" || value == null || value == undefined || ( value != null && typeof value == "object" && !Object.keys(value).length ) ){
      return true
    }else{
      return false
    }
};

// 다음 버튼 클릭시 input field 확인
function checkSubmitAlert() {
  const inputItems = document.querySelectorAll(".input-default input");
  const selectItem = document.querySelector(".input-default select");
  console.log(inputItems[0].value);
  console.log(inputItems[1].value);
  console.log(inputItems[2].value);
  console.log(selectItem.value);
  console.log(inputItems[4].value);
 if(!isEmpty(inputItems[0].value) && !isEmpty(inputItems[1].value) && !isEmpty(inputItems[2].value) && !isEmpty(selectItem.value) && !isEmpty(inputItems[4].value)){
    el_ui_mem_mo_bs_002.classList.add("show");
 }
}

function hidePopup() {
  el_ui_mem_mo_bs_002.classList.remove("show");
}

function openPopupDropdown(){
    let popup = document.querySelector(".popup-dropdown-body");
    let iconDrop = document.querySelector("span.btn-icon > i");
    if(popup.classList.contains("open")){
        popup.classList.remove("open");
        iconDrop.classList.remove("icon-top");
        iconDrop.classList.add("icon-bottom");
    }else{
        popup.classList.add("open");
        iconDrop.classList.remove("icon-bottom");
        iconDrop.classList.add("icon-top");
    } 
}



// 이름 확인
function validateName(name, inputItem) {
  const regexName = /^([a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]{2,20})$/u;
  if (!regexName.test(name)) {
    inputItem.parentNode.classList.add("has-error");
    inputItem.parentNode.classList.remove("required");
    return false;
  } else {
    inputItem.parentNode.classList.remove("has-error", "required");
  }
  return true;
}

// 주민등록 번호 확인
function validateResident(century, inputItem) {
  let resident = login.querySelector(".resident");
  if (century <= 4) {
    resident.classList.remove("has-error", "required");
  } else {
    resident.classList.add("has-error");
    resident.classList.remove("required");
  }
}

// 핸드폰번호 확인
function validatePhoneNumber(valuePhone, inputItem) {
  const regexPhone = /^(010|011|016|017|019|080) - \d{4} - \d{4}$/;
  if (!regexPhone.test(valuePhone)) {
    inputItem.parentNode.classList.add("has-error");
    inputItem.parentNode.classList.remove("required");
    return false;
  } else {
    inputItem.parentNode.classList.remove("has-error", "required");
  }
}

// 이름 포커스
function AutoFocus() {
  document.getElementsByClassName("name").focus();
}

// Input field 입력이벤트
function init() {
  // // 버튼
  let button = login.querySelector("button");

  // 이름
  let name = document.querySelector(".name");
  let nameInput = document.querySelector(".nameInput");

  // 전화번호
  let phoneNumber = login.querySelector("input.phonenumber");

  // 주민등록번호
  let input_1 = login.querySelector("input.input-1");
  let input_2 = login.querySelector("input.input-2");
  let resident = login.querySelector(".resident");

  // 핸드폰 번호
  let phone = document.querySelector(".phone");

  // 통신사
  select = div_select.querySelector("select");

  // 핸드폰 번호 체크
  phoneNumber.addEventListener("keyup", (e) => {
    var val = e.target.value.replace(/\D/g, "");
    var x = val.match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    if (val.length >= 11) {
      var x = val.match(/(\d{0,3})(\d{0,4})(\d{0,4})/);
    }
    const pattern = /^(010|080|011|016|017|019)/; // 010, 080, 011, 016, 017, 019 중 하나로 시작하는 패턴
    if (!pattern.test(val) || val.length < 11) {
      phoneNumber.parentNode.classList.add("error");
    } else {
      phoneNumber.parentNode.classList.remove("error");
    }
    if (val.length === 0) {
      phoneNumber.parentNode.classList.remove("error");
    }
    if (!x[2]) {
      e.target.value = x[1];
      phoneNumber.classList.add("has-error");
    } else {
      phoneNumber.classList.remove("has-error");
      e.target.value = "" + x[1] + " - " + x[2] + (x[3] ? " - " + x[3] : "");
    }
  });

  // 주민등록번호 앞자리 입력 시 이벤트
  input_1.addEventListener("keyup", (e) => {
    let value = e.target.value || String();
    let value2 = input_2.value || String();
    const pattern1 = /\d{2}([0]\d|[1][0-2])([0][1-9]|[1-2]\d|[3][0-1])/;
    const pattern2 = /[1-4]/;
    if (!pattern1.test(value) || !pattern2.test(value2)) {
      input_1.parentNode.classList.add("error");
    } else {
      input_1.parentNode.classList.remove("error");
    }
    if (value.length === 0 && value2.length === 0) {
      input_1.parentNode.classList.remove("error");
    }
    if (value.length > 0) {
      handlerInput(true);
    } else if (value.length <= 0 && value2.length <= 0) {
      handlerInput(false);
    }
    if (value.length >= 6) {
      input_2.focus();
    }
  });

  // 주민등록번호 둘째자리 입력 시 이벤트
  input_2.addEventListener("keyup", (e) => {
    let value = input_1.value || String();
    let value2 = e.target.value || String();
    const pattern1 = /\d{2}([0]\d|[1][0-2])([0][1-9]|[1-2]\d|[3][0-1])/;
    const pattern2 = /[1-4]/;
    if (!pattern1.test(value) || !pattern2.test(value2)) {
      input_1.parentNode.classList.add("error");
      console.log("없는 번호");
    } else {
      input_2.parentNode.classList.remove("error");
    }

    if (value.length === 0 && value2.length === 0) {
      input_1.parentNode.classList.remove("error");
    }

    if (value.length <= 0 && value2.length <= 0) {
      handlerInput(false);
      input_1.focus();
    }
  });

  input_2.addEventListener("keydown", (e) => {
    let value2 = e.target.value || String();
    if (e.key == "Backspace" && value2.length <= 0) {
      input_1.focus();
    }
  });

  /************** 통신사 선택 부분 ***************/
  if (select.value) {
    let label = div_select.querySelector("span");
    label.innerHTML = select.value;
  }
  div_select.addEventListener("click", function (event) {
    popup.show(true);
  });
  div_select.querySelector("input").addEventListener("focus", (event) => {
    popup.show(true);
    document.activeElement.blur();
  });

  /************************************************************************ */

  input.forEach((item, index) => {
    item.addEventListener("keyup", (event) => {
      if (event.key == "Enter") {
        if (index == 2) {
          popup.show(true);
        } else {
          input[index + 1]?.focus();
        }
      }

      if (item.type == "tel") {
        item.value = item.value?.replace(/[^\d.-]+/g, "");
      }
    //   checkSubmit();
    });

    item.addEventListener("focus", (event) => {
      let focusCount = item.getAttribute("data-focusin");
      console.log(focusCount);

      if (focusCount !== "0") {
        // console.log(event.target.parentNode.classList);
        if (event.target.parentNode.classList.contains("required")) {
          if (!event.target.parentNode.classList.contains("select")) {
            event.target.parentNode.classList.add("error");
          }
        }
      }
      event.target.parentNode.classList.add("active");
      event.target.parentNode.classList.remove("required");
    });

    item.addEventListener("focusout", (event) => {
      let focusCount = item.getAttribute("data-focusin");

      if (focusCount !== "0") {
        if (event.target.parentNode.classList.contains("error")) {
          event.target.parentNode.classList.add("required");
        }
        console.log(event.target.parentNode.classList);

        if (event.target.value.length === 0) {
          event.target.parentNode.classList.add("required");
        }
      }
      event.target.parentNode.classList.remove("active");
      event.target.parentNode.classList.remove("error");
      item.setAttribute("data-focusin", parseInt(focusCount) + 1);
    });
  });
}
init();
