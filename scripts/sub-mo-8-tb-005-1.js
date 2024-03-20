var inputElements = document.querySelectorAll("input");
let isScrolling = false;

appendListener();
appendScrollOnInput();

function inputFocusInOutEvent(){
  const inputall = document.querySelectorAll(".input-label input");

  inputall.forEach(function (inputElement) {
    inputElement.addEventListener("focusin", function (event) {
      console.log("focusin!!!!!!!!!!");
      document.querySelector(".btn-main-task-floating").style.display = "none";
      document.querySelector(".content .section").classList.remove("pb-88");
    });

    inputElement.addEventListener("focusout", function () {
      document.querySelector(".btn-main-task-floating").style.display = "block";
      document.querySelector(".content .section").classList.add("pb-88");
      
    });
    inputElement.addEventListener("blur", function () {
      document.querySelector(".btn-main-task-floating").style.display = "block";
      document.querySelector(".content .section").classList.add("pb-88");
    });

    inputElement.addEventListener("keyup", function() {
      inputElement.parentElement.classList.remove("error");
      inputElement.parentElement.parentElement.classList.remove("error");
    })

    let isTouchMoving = false;
    let touchMoveTimer;
  
    inputElement.addEventListener("touchstart", function () {
      isTouchMoving = true;
    });
  
    inputElement.addEventListener("touchend", function () {
      if (isTouchMoving) {
        clearTimeout(touchMoveTimer);
        touchMoveTimer = setTimeout(function () {
          if (document.activeElement === inputElement) {
            inputElement.dispatchEvent(new Event("focusin"));
          }
        }, 100); // 터치 이벤트 멈춤을 판단하는 기준 시간 (밀리초 단위)
      }
      isTouchMoving = false;
    });
  });  
}

function formatPhoneNum(e, field) {
  var val = e.target.value.replace(/\D/g, "");
  var x = val.match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  console.log(val.length);
  if (val.length >= 11) {
    var x = val.match(/(\d{0,3})(\d{0,4})(\d{0,4})/);
  }
  const pattern = /^(010|080|011|016|017|019)/; // 010, 080, 011, 016, 017, 019 중 하나로 시작하는 패턴
  if (!pattern.test(val) || val.length < 11) {
    field.parentNode.classList.add("error");
  } else {
    field.parentNode.classList.remove("error");
  }
  if (val.length === 0) {
    field.parentNode.classList.remove("error");
  }
  if (!x[2]) {
    e.target.value = x[1];
    field.classList.add("has-error");
  } else {
    field.classList.remove("has-error");
    e.target.value = "" + x[1] + " - " + x[2] + (x[3] ? " - " + x[3] : "");
  }
}

function detectMultipleLines() {
  var textElem = document.querySelector(".txt-context");
  var text = document.querySelector(".txt-context").value;
  var lines = text.split(/\r|\r\n|\n/);
  var count = lines.length;
  console.log(count);
  if (count > 3) {
    console.log("padding removed");
    textElem.style.overflowY = "auto";
    textElem.style.paddingTop = "0px";
  } else {
    console.log("padding added");
    textElem.style.overflowY = "hidden";
    textElem.style.paddingTop = "30px";
  }
}

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

let target = document.querySelector("textarea");
target.addEventListener("keyup", (e) => handleEvent(e));
target.addEventListener("keydown", (e) => handleEvent(e));
target.addEventListener("focusout", (e) => handleEvent2(e));
target.addEventListener("focusout", (e) => handleEvent(e));
target.addEventListener("focus", (e) => handleEvent(e));

var textareaMaxLength = 70;
function handleEvent(e) {

  var textLength = Math.min(
    textareaMaxLength,
    document.querySelector(".txt-context").value.length
  );

  let input = document.querySelector(".txt-context");
  document.querySelector("#textLength").innerHTML = textLength + " ";

  if (textLength == 0) {
    document.querySelector(".btn-input-x").style.display = "none";
  } else {
    document.querySelector(".btn-input-x").style.display = "block";
  }
  console.log(isMobile());
  if (isMobile()) {
  }

  if (input.value.length > textareaMaxLength) {
    input.value = input.value.slice(0, textareaMaxLength);
  }

  var lineCount = 1 + (input.value.match(/\n/g) || []).length;
  //input.style.height=Math.min(lineCount*20) + "px";
}

function handleEvent2(e) {
  setTimeout(function () {
    document.querySelector(".btn-input-x").style.display = "none";
  }, 100);
}

function tab_gift_card(el, color) {
  document.querySelectorAll(".tab_gift_card").forEach(function (el) {
    el.classList.remove("selected");
  });
  el.className += " selected";

  let textArea = document.querySelector(".txt-context");
  console.log(textArea.value == "언제나 응원해요!");

  // console.log(el);

  if (color == "crimson") {
    document.querySelector(
      "body > div > div.content > div > div:nth-child(1) > div.content"
    ).style.backgroundColor = "#DF2E2E";
    document.querySelector(".content .tmp-img img").src =
      "../../image/icon/img-gift-00.svg";
    if (
      textArea.value == "우리가족 사랑해" ||
      textArea.value == "언제나 고맙습니다." ||
      textArea.value == "제 마음을 받아주세요!" ||
      textArea.value == "언제나 응원해요!" ||
      textArea.value == "축하해요!" ||
      textArea.value == ""
    ) {
      textArea.value = "언제나 응원해요!";
      revealToolTip();
    }
  } else if (color == "green") {
    document.querySelector(
      "body > div > div.content > div > div:nth-child(1) > div.content"
    ).style.backgroundColor = "#A7DF2E";
    document.querySelector(".content .tmp-img img").src =
      "../../image/icon/img-gift-00.svg";
    if (
      textArea.value == "우리가족 사랑해" ||
      textArea.value == "언제나 고맙습니다." ||
      textArea.value == "제 마음을 받아주세요!" ||
      textArea.value == "언제나 응원해요!" ||
      textArea.value == "축하해요!" ||
      textArea.value == ""
    ) {
      textArea.value = "언제나 고맙습니다.";
      revealToolTip();
    }
  } else if (color == "red") {
    document.querySelector(
      "body > div > div.content > div > div:nth-child(1) > div.content"
    ).style.backgroundColor = "#FF4572";
    document.querySelector(".content .tmp-img img").src =
      "../../image/icon/img-gift-01.svg";
    if (
      textArea.value == "우리가족 사랑해" ||
      textArea.value == "언제나 고맙습니다." ||
      textArea.value == "제 마음을 받아주세요!" ||
      textArea.value == "언제나 응원해요!" ||
      textArea.value == "축하해요!" ||
      textArea.value == ""
    ) {
      textArea.value = "제 마음을 받아주세요!";
      revealToolTip();
    }
  } else if (color == "yellow") {
    document.querySelector(
      "body > div > div.content > div > div:nth-child(1) > div.content"
    ).style.backgroundColor = "#FFB800";
    document.querySelector(".content .tmp-img img").src =
      "../../image/icon/img-gift-02.svg";
    if (
      textArea.value == "우리가족 사랑해" ||
      textArea.value == "언제나 고맙습니다." ||
      textArea.value == "제 마음을 받아주세요!" ||
      textArea.value == "언제나 응원해요!" ||
      textArea.value == "축하해요!" ||
      textArea.value == ""
    ) {
      textArea.value = "언제나 응원해요!";
      revealToolTip();
    }
  } else if (color == "blue") {
    document.querySelector(
      "body > div > div.content > div > div:nth-child(1) > div.content"
    ).style.backgroundColor = "#0052FF";
    document.querySelector(".content .tmp-img img").src =
      "../../image/icon/img-gift-03.svg";
    if (
      textArea.value == "우리가족 사랑해" ||
      textArea.value == "언제나 고맙습니다." ||
      textArea.value == "제 마음을 받아주세요!" ||
      textArea.value == "언제나 응원해요!" ||
      textArea.value == "축하해요!" ||
      textArea.value == ""
    ) {
      textArea.value = "축하해요!";
      revealToolTip();
    }
  }

  // var textLength = Math.min(
  //   document.querySelector(".txt-context").getAttribute("maxlength"),
  //   document.querySelector(".txt-context").value.length
  // );

  let input = document.querySelector(".txt-context");
  console.log(input);
  document.querySelector("#textLength").innerHTML = input.value.length + " ";
}

function radioTxt(method) {
  console.log(method);
  // if(method == 'sms'){
  //     location.href = './SUB-MO-8-TB-005-1.html'
  // }else{
  //     location.href = './SUB-MO-8-TB-005-2.html'
  // }
  document.querySelectorAll(".input-text").forEach((field) => {
    field.classList.remove("error");
  });

  var bg = document.querySelector(".background-overlay");
  bg.style.cssText = "display : block; opacity : 0";
  setTimeout(()=>{
    bg.style.cssText = "display : none;";
  },500)


  document.querySelector(".change-input-method").style.display = "none";
  var receiveElements = document.querySelectorAll(".receive");
  if (receiveElements.length > 2) {
    for (var i = receiveElements.length - 1; i > 1; i--) {
      console.log(i);
      receiveElements[i].remove();
    }
  }
  var lastReceiveElement = receiveElements[receiveElements.length - 1];
  lastReceiveElement.querySelectorAll("#smsFirstName")[0].value = "";
  lastReceiveElement.querySelectorAll("#smsFirstNumber")[0].value = "";
  document.querySelector(".btn-main-task").classList.remove("bg-black");
  console.log(method == "sms");
  if (method == "sms") {
    document.querySelector(".info_sms").innerText =
      "※ 최대 10명까지 추가할 수 있어요.";
    document.querySelector(".input_area .txt_main").style.display = "block";
    document.querySelector(".input_area .input_mms").style.marginTop = "30px";
    // document.querySelector(".input_area .input_mms .contour ").style.display =
    //   "inline-block";

    // document.querySelector(".input_area .btn_area").style.display = "block";
    //document.querySelector(
    //  "body > div > div > div.content > div > div.section.pt-143 > div:nth-child(1) > div.input1.receive > p.info_sms"
    //).style.display = "block";
  } else {
    document.querySelector(".info_sms").innerText =
      "※ 결제 완료 후 카카오톡이 열리면 받을 분을 선택해 주세요.";
    document.querySelector(".input_area .input_mms").style.marginTop = "30px";
    document.querySelector(".input_area .txt_main").style.display = "none";
    // document.querySelector(".input_area .input_mms .contour ").style.display =
    //   "none";
    //document.querySelector(
    //  "body > div > div > div.content > div > div.section.pt-143 > div:nth-child(1) > div.input1.receive > p.info_sms"
    //).style.display = "none";

    // document.querySelector(".input_area .btn_area").style.display = "none";
  }
}

function viewContactPopup() {
  var bg = document.querySelector(".background-overlay");
  bg.style.cssText = "display : block;";
  setTimeout(()=>{
    bg.style.cssText = "display : block; opacity : 0.5";
  },50)
  document.querySelector(".contact-permission").style.display = "block";
  document.body.style.overflow = "hidden";
}

function viewChangePopup(method, e) {
  if (localStorage.getItem("selected") == method) {
    return;
  }
  if (document.querySelector(".txt-context").value == "") {
    return;
  }
  var inputNullCheck = true;
  document.querySelectorAll("#smsFirstName").forEach((elem) => {
    if (elem.value != "") {
      console.log(elem.value);
      inputNullCheck = false;
    }
  });
  document.querySelectorAll("#smsFirstNumber").forEach((elem) => {
    if (elem.value != "") {
      console.log(elem.value);
      inputNullCheck = false;
    }
  });
  console.log("Null : " + inputNullCheck);
  if (!inputNullCheck) {
    var bg = document.querySelector(".background-overlay");
    bg.style.cssText = "display : block;";
    setTimeout(()=>{
      bg.style.cssText = "display : block; opacity : 0.5";
    },50)
    document.querySelector(".change-input-method").style.display = "block";
    document.body.style.overflow = "auto";
    document
      .querySelector(".change-input-method .bg-black")
      .addEventListener("click", function () {
        radioTxt(method);
        localStorage.setItem("selected", method);
      });
  } else {
    radioTxt(method);
    localStorage.setItem("selected", method);
  }

  // if (this.querySelector("input").value)
}

function addNumber() {
  var template = document.importNode(
    document.querySelector("#input_mms").content,
    true
  );
  var templateInputs = template.querySelectorAll(
    ".input-contact label > input"
  );
  templateInputs[0].setAttribute("id", "smsFirstName");
  templateInputs[1].setAttribute("id", "smsFirstNumber");
  templateInputs[1].addEventListener("keyup", (e) => {
    formatPhoneNum(e, e.target);
  });
  template
    .querySelector(".btn-delete")
    .setAttribute("onclick", "deleteNumber(this)");
  var receiveElements = document.querySelectorAll(".receive");
  var lastReceiveElement = receiveElements[receiveElements.length - 1];
  if (receiveElements.length < 11) {
    lastReceiveElement.after(template);
    document.querySelector(".btn-main-task").classList.remove("bg-black");
  } else if (receiveElements.length == 11) {
    document.querySelector(".popup-toast p").innerText =
      "최대 구매 가능한 수량을 초과했어요.";
    gsap.delayedCall(0.5, () => {
      toast();
    });
  }
}

function deleteNumber(el) {
  var receiveElements = document.querySelectorAll(".receive");
  console.log(el);
  console.log(receiveElements.length);
  if (receiveElements.length != 2) {
    el.parentNode.parentNode.remove();
  } else {
    document.querySelector(".btn-main-task").classList.remove("bg-black");
    document.querySelector(".popup-toast p").innerText =
      "받는 사람의 정보를 입력해주세요.";
    gsap.delayedCall(0.5, () => {
      toast();
    });
  }
}

function contactPopupDelete() {
  var bg = document.querySelector(".background-overlay");
  bg.style.cssText = "display : block; opacity : 0";
  setTimeout(()=>{
    bg.style.cssText = "display : none;";
  },500)
  document.querySelector(".contact-permission").style.display = "none";
  document.body.style.overflow = "auto";
}

function changePopupDelete() {
  if (
    document.querySelector("input[type='radio'][name=name3]:checked").value ==
    "sms"
  ) {
    document.querySelectorAll(
      "input[type='radio'][name=name3]"
    )[1].checked = true;
    // document.querySelector(
    //   "body > main > div.section.mt-64.pb-88 > div.section.pt-143 > div:nth-child(1) > div.input1.receive > div > label:nth-child(2) > input"
    // ).checked = true;
  } else {
    document.querySelectorAll(
      "input[type='radio'][name=name3]"
    )[0].checked = true;
  }
  var bg = document.querySelector(".background-overlay");
  bg.style.cssText = "display : block; opacity : 0";
  setTimeout(()=>{
    bg.style.cssText = "display : none;";
  },500)
  document.querySelector(".change-input-method").style.display = "none";
  document.body.style.overflow = "auto";
}

function handleRadioClick(radio) {
  var selectedValue = radio.value;
  console.log("Selected value:", selectedValue);
  // 선택된 값에 따라 원하는 작업을 수행할 수 있습니다.
}

//제거
function tooltip() {
  document.querySelector(".tooltip").style.opacity = 0;
}

function revealToolTip() {
  document.querySelector(".tooltip").style.opacity = 1;
}

function textClean() {
  document.querySelector("#textLength").innerHTML = "0 ";
  document.querySelector(".txt-context").value = "";
  document.querySelector(".btn-input-x").style.display = "none";

  document.querySelector(".txt-context").style.overflowY = "hidden";
  document.querySelector(".txt-context").style.paddingTop = "30px";
}

function resetAlert() {
  setToastMessage();
  // deActiveResend();
  if (document.querySelector(".popup-toast p").innerText != "") {
    gsap.delayedCall(0.5, () => {
      toast();
    });
  }
}


var isContext = false;
function setToastMessage() {
  const contextValue = document.querySelector(".txt-context").value;
  const nameFieldValueArr = document.querySelectorAll("#smsFirstName");
  const numberFieldValueArr = document.querySelectorAll("#smsFirstNumber");
  const senderNameValue = document.querySelector("#smsFirstNameSend").value;
  const senderNumberValue = document.querySelector("#smsFirstNumberSend").value;

  const toastElem = document.querySelector(".popup-toast p");

  const inputFieldArr = document.querySelectorAll(".input-text");

  inputFieldArr.forEach((field) => {
    field.classList.remove("error");
  });


  isContext = false;
  if (contextValue.length == 0) {
    toastElem.innerText = "1글자 이상 입력해 주세요.";
    //document.querySelector(".txt-context").focus();
    document.querySelector(".txt-context").scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
     document.querySelector(".txt-context").classList.add("error");
     isContext = true;

  }

  for (var i = 0; i < nameFieldValueArr.length; i++) {
    if (nameFieldValueArr[i].value.length == 0) {
      //console.log(nameFieldValueArr[i]);
      nameFieldValueArr[i].parentElement.parentElement.classList.add("error");
      //toastElem.innerText = "받는 사람 이름을 입력해 주세요.";
      //nameFieldValueArr[i].focus();
      // nameFieldValueArr[i].parentElement.parentElement.scrollIntoView({
      //   behavior: "smooth",
      //   block: "center",
      //   inline: "nearest",
      // });

    }
    if (numberFieldValueArr[i].value.length < 13) {
      //console.log(numberFieldValueArr[i]);
      numberFieldValueArr[i].parentElement.parentElement.classList.add("error");
      //toastElem.innerText = "받는 사람의 휴대폰 번호를 입력해 주세요.";
      //numberFieldValueArr[i].focus();

      // numberFieldValueArr[i].parentElement.parentElement.scrollIntoView({
      //   behavior: "smooth",
      //   block: "center",
      //   inline: "nearest",
      // });

    }
    var phoneNumValueArr = numberFieldValueArr[i].value.split("-");
    if (phoneNumValueArr.length == 3) {
      if (
        !(
          phoneNumValueArr[0].replaceAll(" ", "").length == 3 &&
          phoneNumValueArr[1].replaceAll(" ", "").length == 4 &&
          phoneNumValueArr[2].replaceAll(" ", "").length == 4
        )
      ) {
        //console.log("format error");
        //console.log(phoneNumValueArr);
        numberFieldValueArr[i].parentElement.parentElement.classList.add(
          "error"
        );
        //toastElem.innerText = "받는 사람의 휴대폰 번호를 입력해 주세요.";
        //numberFieldValueArr[i].focus();

      }
    } else {
      console.log(numberFieldValueArr[i]);
      numberFieldValueArr[i].parentElement.parentElement.classList.add("error");
      //toastElem.innerText = "받는 사람의 휴대폰 번호를 입력해 주세요.";
      //numberFieldValueArr[i].focus();

    }
  }

  if (senderNameValue.length == 0) {
    //toastElem.innerText = "수신인이 알 수 있는 이름을 입력해 주세요.";
    document
      .querySelector("#smsFirstNameSend")
      .parentElement.parentElement.classList.add("error");
    //document
    //  .querySelector("#smsFirstNameSend").focus();

  }

  if (senderNumberValue.length < 13) {
    //toastElem.innerText = "휴대폰 번호를 입력해 주세요.";
    document
      .querySelector("#smsFirstNumberSend")
      .parentElement.parentElement.classList.add("error");
    //document
    //  .querySelector("#smsFirstNumberSend").focus();

  }

  var phoneNumValueArr = document
  .querySelector("#smsFirstNumberSend").value.split("-");
    if (phoneNumValueArr.length == 3) {
      if (
        !(
          phoneNumValueArr[0].replaceAll(" ", "").length == 3 &&
          phoneNumValueArr[1].replaceAll(" ", "").length == 4 &&
          phoneNumValueArr[2].replaceAll(" ", "").length == 4
        )
      ) {
        //console.log("format error");
        //console.log(phoneNumValueArr);
        document.querySelector("#smsFirstNumberSend").parentElement.parentElement.classList.add(
          "error"
        );
        //toastElem.innerText = "보내는 사람의 휴대폰 번호를 입력해 주세요.";
        //document.querySelector("#smsFirstNumberSend").focus();

      }
    }
    if(isContext){
      toastElem.innerText = "1글자 이상 입력해 주세요.";
      document.querySelector(".txt-context").focus();
      return ;
    }else{
      document.querySelector(".input-text.error input").focus();
    }
   


  toastElem.innerText = "";
  return;
}

// function scrollTo(elem) {
//   var offset = elem.offsetTop - 300;
//   window.scrollTo({ top: offset, behavior: "smooth" });
// }

// function appendScrollOnInput() {
//   document.querySelectorAll("input").forEach((elem) => {
//     elem.addEventListener("focusin", () => {
//       // scrollTo(elem);
//       console.log("인풋에 포커스인");
//       window.scrollTo({ top: elem.offsetTop - 300, behavior: "smooth" });
//     });
//   });
// }

function appendScrollOnInput() {
  const handleInputFocus = (elem) => {
    if (!isScrolling) {
      isScrolling = true;
      // console.log("인풋에 포커스인");
      const scrollY = elem.getBoundingClientRect().top + window.scrollY - 180;

      console.log(elem.getBoundingClientRect().top);
      console.log(scrollY);

      window.scrollTo({ top: 0});
      window.scrollTo({ top: scrollY});
      setTimeout(() => {
        isScrolling = false;
      }, 500); // 스크롤 애니메이션의 지속 시간에 맞춰 시간을 설정해주세요 (밀리초 단위)
    }
  };

  document.querySelectorAll("input").forEach((elem) => {
    elem.addEventListener("focus", () => {
      handleInputFocus(elem);
    });
  });

  document.querySelectorAll("textarea").forEach((elem) => {
    elem.addEventListener("focus", () => {
      handleInputFocus(elem);
    });
  });
}

function appendListener() {
  switch (document.title) {
    case "SUB-MO-8-TB-005-1":
    case "SUB-MO-8-TB-005-2":
      inputFocusInOutEvent();
      // 감사 버튼 클릭 이벤트
      document
        .querySelector(".tab_gift_card.green")
        .addEventListener("click", (elem) => {
          tab_gift_card(
            document.querySelector(".tab_gift_card.green"),
            "green"
          );
        });

      // 사랑 버튼 클릭 이벤트
      document
        .querySelector(".tab_gift_card.red")
        .addEventListener("click", (elem) => {
          tab_gift_card(document.querySelector(".tab_gift_card.red"), "red");
        });

      // 응원 버튼 클릭 이벤트
      document
        .querySelector(".tab_gift_card.yellow")
        .addEventListener("click", (elem) => {
          tab_gift_card(
            document.querySelector(".tab_gift_card.yellow"),
            "yellow"
          );
        });

      // 축하 버튼 클릭 이벤트
      document
        .querySelector(".tab_gift_card.blue")
        .addEventListener("click", (elem) => {
          tab_gift_card(document.querySelector(".tab_gift_card.blue"), "blue");
        });

      //텍스트 입력란 x 버튼 입력 이벤트
      document.querySelector(".btn-input-x").addEventListener("click", () => {
        console.log("Clicked");
        textClean();
      });

      //툴팁 클릭 이벤트
      document.querySelector(".tooltip").addEventListener("touchstart", () => {
        tooltip();
      });
      //툴팁 클릭 이벤트
      document.querySelector(".tooltip").addEventListener("click", () => {
        tooltip();
      });

      //텍스트박스 클릭 이벤트
      document.querySelector(".txt-context").addEventListener("touchstart", () => {
        tooltip();
      });

      //텍스트박스 클릭 이벤트
      document.querySelector(".txt-context").addEventListener("click", () => {
        tooltip();
      });

      //텍스트박스 입력 이벤트
      document.querySelector(".txt-context").addEventListener("input", () => {
        detectMultipleLines();
      });

      //sms 라디오 버튼 입력 이벤트
      document
        .querySelector(".btn-radio-txt:nth-child(1)")
        .addEventListener("click", () => {
          viewChangePopup(
            "sms",
            document.querySelector(".btn-radio-txt:nth-child(1)")
          );
        });

      //카카오 라디오 버튼 클릭 이벤트
      document
        .querySelector(".btn-radio-txt:nth-child(2)")
        .addEventListener("click", () => {
          viewChangePopup(
            "kakao",
            document.querySelector(".btn-radio-txt:nth-child(2)")
          );
        });

      //연락처 등록 삭제 버튼 이벤트
      document.querySelectorAll(".btn-delete").forEach((elem) => {
        elem.addEventListener("click", () => {
          deleteNumber(elem);
        });
      });

      // 연락처 불러오기 버튼 클릭 이벤트
      document
        .querySelector(".btn-all-stroke")
        .addEventListener("click", () => {
          viewContactPopup();
        });

      //직접 입력하기 버튼 이벤트
      document.querySelector(".txt_main > a").addEventListener("click", () => {
        console.log("click!");
        addNumber();
        appendScrollOnInput();
        inputFocusInOutEvent();

        document.querySelectorAll(".input-text input").forEach((elem, i) => {
          elem.addEventListener("keydown", (e) => {
            console.log(i);
            if (e.key === "Enter") {
              if (i + 1 == document.querySelectorAll(".input-text input").length) {
                document.querySelector(".btn-main-task").click();
              } else {
                console.log(document.querySelectorAll(".input-text input")[i + 1]);
                document.querySelectorAll(".input-text input")[i + 1].focus();
              }
            }
          });
        });
      });

      //연락처 팝업 닫기 이벤트
      document
        .querySelector(".contact-permission .bg-gray")
        .addEventListener("click", () => {
          contactPopupDelete();
        });

      //발송 방법 변경 팝업 닫기 이벤트
      document
        .querySelector(".change-input-method .bg-gray")
        .addEventListener("click", () => {
          changePopupDelete();
        });

      //선물 결제하기 버튼 클릭 이벤트
      document.querySelector(".btn-main-task").addEventListener("click", () => {
        resetAlert();
      });

      break;

    case "SUB-MO-8-TB-005-1(1)":
    case "SUB-MO-8-TB-005-1(2)":
      inputFocusInOutEvent();

      // 어버이날
      document.querySelector(".tab_gift_card.crimson")
        .addEventListener("click", (elem) => {
          tab_gift_card(
            document.querySelector(".tab_gift_card.crimson"),
            "crimson"
          );
        });


      // 감사 버튼 클릭 이벤트
      document
        .querySelector(".tab_gift_card.green")
        .addEventListener("click", (elem) => {
          tab_gift_card(
            document.querySelector(".tab_gift_card.green"),
            "green"
          );
        });

      // 사랑 버튼 클릭 이벤트
      document
        .querySelector(".tab_gift_card.red")
        .addEventListener("click", (elem) => {
          tab_gift_card(document.querySelector(".tab_gift_card.red"), "red");
        });

      // 응원 버튼 클릭 이벤트
      document
        .querySelector(".tab_gift_card.yellow")
        .addEventListener("click", (elem) => {
          tab_gift_card(
            document.querySelector(".tab_gift_card.yellow"),
            "yellow"
          );
        });

      // 축하 버튼 클릭 이벤트
      document
        .querySelector(".tab_gift_card.blue")
        .addEventListener("click", (elem) => {
          tab_gift_card(document.querySelector(".tab_gift_card.blue"), "blue");
        });

      //텍스트 입력란 x 버튼 입력 이벤트
      document.querySelector(".btn-input-x").addEventListener("click", () => {
        console.log("Clicked");
        textClean();
      });

      //툴팁 클릭 이벤트
      document.querySelector(".tooltip").addEventListener("touchstart", () => {
        tooltip();
      });
      //툴팁 클릭 이벤트
      document.querySelector(".tooltip").addEventListener("click", () => {
        tooltip();
      });

      //텍스트박스 클릭 이벤트
      document.querySelector(".txt-context").addEventListener("touchstart", () => {
        tooltip();
      });

      //텍스트박스 클릭 이벤트
      document.querySelector(".txt-context").addEventListener("click", () => {
        tooltip();
      });

      //텍스트박스 입력 이벤트
      document.querySelector(".txt-context").addEventListener("input", () => {
        detectMultipleLines();
      });

      //sms 라디오 버튼 입력 이벤트
      document
        .querySelector(".btn-radio-txt:nth-child(1)")
        .addEventListener("click", () => {
          viewChangePopup(
            "sms",
            document.querySelector(".btn-radio-txt:nth-child(1)")
          );
        });

      //카카오 라디오 버튼 클릭 이벤트
      document
        .querySelector(".btn-radio-txt:nth-child(2)")
        .addEventListener("click", () => {
          viewChangePopup(
            "kakao",
            document.querySelector(".btn-radio-txt:nth-child(2)")
          );
        });

      //연락처 등록 삭제 버튼 이벤트
      document.querySelectorAll(".btn-delete").forEach((elem) => {
        elem.addEventListener("click", () => {
          deleteNumber(elem);
        });
      });

      // 연락처 불러오기 버튼 클릭 이벤트
      document
        .querySelector(".btn-all-stroke")
        .addEventListener("click", () => {
          viewContactPopup();
        });

      //직접 입력하기 버튼 이벤트
      document.querySelector(".txt_main > a").addEventListener("click", () => {
        console.log("click!");
        addNumber();
        appendScrollOnInput();
        inputFocusInOutEvent();

        document.querySelectorAll(".input-text input").forEach((elem, i) => {
          elem.addEventListener("keydown", (e) => {
            console.log(i);
            if (e.key === "Enter") {
              if (i + 1 == document.querySelectorAll(".input-text input").length) {
                document.querySelector(".btn-main-task").click();
              } else {
                console.log(document.querySelectorAll(".input-text input")[i + 1]);
                document.querySelectorAll(".input-text input")[i + 1].focus();
              }
            }
          });
        });
      });

      //연락처 팝업 닫기 이벤트
      document
        .querySelector(".contact-permission .bg-gray")
        .addEventListener("click", () => {
          contactPopupDelete();
        });

      //발송 방법 변경 팝업 닫기 이벤트
      document
        .querySelector(".change-input-method .bg-gray")
        .addEventListener("click", () => {
          changePopupDelete();
        });

      //선물 결제하기 버튼 클릭 이벤트
      document.querySelector(".btn-main-task").addEventListener("click", () => {
        resetAlert();
      });

      break;
  }
}

window.onload = function () {
  
  inputFocusInOutEvent();
  
  // 전화 입력 필드 내 e 입력 방지
  var tooltip = document.querySelector(".tooltip");
  var selected = document.querySelector("input[type=radio]:checked").value;
  localStorage.setItem("selected", selected);
  tooltip.style.opacity = 1;
  tooltip.style.top = "-20px";
  var numberInputArr = document.querySelectorAll("#smsFirstNumber");
  document
    .querySelector("#smsFirstNumberSend")
    .addEventListener("keyup", (e) => {
      formatPhoneNum(e, e.target);
    });

  numberInputArr.forEach((field) => {
    console.log(field);
    field.addEventListener("keyup", (e) => {
      formatPhoneNum(e, e.target);
    });
  });
  // document.querySelector(".txt-context").addEventListener("keydown", (e) => {
  //   if (e.key === "Enter") {
  //     document.querySelectorAll(".input-text input")[0].focus();
  //   }
  // })
  document.querySelectorAll(".input-text input").forEach((elem, i) => {
    elem.addEventListener("keydown", (e) => {
      console.log(i);
      if (e.key === "Enter") {
        if (i + 1 == document.querySelectorAll(".input-text input").length) {
          document.querySelector(".btn-main-task").click();
        } else {
          console.log(document.querySelectorAll(".input-text input")[i + 1]);
          document.querySelectorAll(".input-text input")[i + 1].focus();
        }
      }
    });
  });

  

  document.querySelectorAll("input").forEach((elem) => {
    elem.addEventListener("input", function (event) {
      elem.parentElement.parentElement.classList.remove("error");
    });
  });

  // const Buttonnone = document.querySelectorAll("input");
  // Buttonnone.forEach(function (inputElement) {
  //   inputElement.addEventListener("focusin", function (event) {
  //     // if (isMobile()) {
  //     document.querySelector(".btn-main-task-floating").style.display = "none";
      
  //     // }
  //   });

  //   inputElement.addEventListener("focusout", function () {
  //     // if (isMobile()) {
  //     document.querySelector(".btn-main-task-floating").style.display = "block";
  //     // alert('aaaaaaaa');
  //     // }
  //   });
  // });

  const txtAreaone = document.querySelectorAll("textarea");

  txtAreaone.forEach(function (inputElement) {
    inputElement.addEventListener("focusin", function (event) {
      // if (isMobile()) {
      document.querySelector(".btn-main-task-floating").style.display = "none";
      document.querySelector(".content .section").classList.remove("pb-88");
      // }
    });

    inputElement.addEventListener("focusout", function () {
      // if (isMobile()) {
        // alert('aaaaaaaa');
      document.querySelector(".btn-main-task-floating").style.display = "block";
      document.querySelector(".content .section").classList.add("pb-88");
      // }
    });
  });


  
  

  setInterval(() => {
    // console.log("ON");

    inputElements = document.querySelectorAll("input");
    var activeChk = true;
    inputElements.forEach(function (inputElement) {
      const inputValue = inputElement.value;
      if (inputValue.length != 0) {

        //휴대폰 번호 11자리 이하 disableS
        if(inputElement.getAttribute('type') == "tel"){
          //console.log(inputValue)
          var regex = /[^0-9]/g;				
          var result = inputValue.replace(regex, "");	
          if (result.length < 11) {
            activeChk = false;
          }

        }
        



      } else {
        // console.log("빈 필드있음");
        // document.querySelector(".btn-main-task").classList.remove("bg-black");
        activeChk = false;
      }
      // });
    });

    if (activeChk) {
      document.querySelector(".btn-main-task").classList.add("bg-black");
    } else {
      document.querySelector(".btn-main-task").classList.remove("bg-black");
    }


  }, 100);
};



//ios 시스템 키보드 내려갈때 
let prevVisualViewport = 0
function handleVisualViewportResize() {  
  const currentVisualViewport = window.visualViewport.height

  if (
    prevVisualViewport - 30 > currentVisualViewport &&
    prevVisualViewport - 100 < currentVisualViewport
  ) {
    console.log("ios키보드")
    document.querySelector(".btn-main-task-floating").style.display = "block";
    document.querySelector(".content .section").classList.add("pb-88");
  }

  prevVisualViewport = window.visualViewport.height
}
window.visualViewport.onresize = handleVisualViewportResize;





//안드로이드 시스템 키보드 내려갈떄 
const initialClientHeight = window.innerHeight
function handleResize() {  
  if (window.visualViewport.height < initialClientHeight) {
  } else {
    console.log("android키보드")
    document.querySelector(".btn-main-task-floating").style.display = "block";
    document.querySelector(".content .section").classList.add("pb-88");
    document.querySelector(".txt-context").blur();
    document.querySelectorAll("input").forEach((elem) => {
      elem.blur();
    });
  }
}

window.addEventListener('resize', handleResize)
