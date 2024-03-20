const inputElements = document.querySelectorAll("input");
const parentDiv = document.getElementsByClassName("input-register")[0];
const bgoverlay = document.getElementsByClassName("background-overlay")[0];
const popup = document.getElementsByClassName("popup-center-01")[0];

const sendmain = document.getElementsByClassName("sub-mo-8-tb-002")[0];
const receivemain = document.getElementsByClassName("sub-mo-8-tb-001")[0];
function closePopup() {

  var bg = document.querySelector(".background-overlay");
  bg.style.cssText = "display : block; opacity : 0";
  setTimeout(()=>{
    bg.style.cssText = "display : none;";
  },500)
  popup.style.display = "none";
  document.body.style.overflow = "auto";
}

function change2send() {
  sendmain.style.display = "block";
  receivemain.style.display = "none";
}

function change2receive() {
  sendmain.style.display = "none";
  receivemain.style.display = "block";
}

function change2sendEmpty() {
  document.getElementsByClassName("sub-mo-8-tb-002")[0].style.display = "block";
  document.getElementsByClassName("sub-mo-8-tb-001-1")[0].style.display = "none";
  document.querySelector(".tab-category button:nth-child(1)").classList.remove("active");
  document.querySelector(".tab-category button:nth-child(2)").classList.add("active");
}

function change2recieveEmpty() {
  document.getElementsByClassName("sub-mo-8-tb-002")[0].style.display = "none";
  document.getElementsByClassName("sub-mo-8-tb-001-1")[0].style.display = "block";
  document.querySelector(".tab-category button:nth-child(1)").classList.add("active");
  document.querySelector(".tab-category button:nth-child(2)").classList.remove("active");
}

function codeFieldInputListener() {
  inputElements.forEach(function (inputElement) {
    // inputElement.addEventListener("focusin", function (event) {
    //   const newButton = document.createElement("button");
    //   newButton.textContent = "등록";

    //   newButton.addEventListener("click", function () {
    //     if (inputElements[0].value.length < 8) {
    //       bgoverlay.style.display = "block";
    //       popup.style.display = "block";
    //       document.body.style.overflow = "hidden";
    //       console.log("Input field has less than 8 characters!");
    //     }
    //   });

    //   parentDiv.appendChild(newButton);
    //   // parentDiv.classList.add("disable");
    // });

    inputElement.addEventListener("focusout", function () {
      // const legacyButton = parentDiv.querySelectorAll('button')[0];
      // parentDiv.removeChild(legacyButton);

      const inputValue = event.target.value;
      if (inputValue.length < 8 && inputValue != "") {
        var bg = document.querySelector(".background-overlay");
        bg.style.cssText = "display : block;";
        setTimeout(()=>{
          bg.style.cssText = "display : block; opacity : 0.5";
        },50)
        popup.style.display = "block";
        document.body.style.overflow = "hidden";
      }
    });

    inputElement.addEventListener("input", function (event) {
      const inputValue = event.target.value;
      if (inputValue === "") {
        parentDiv.classList.remove("btn-able");
      } else {
        parentDiv.classList.add("btn-able");
      }
    });
  });
}

function appendListener() {
  switch (document.title) {
    case "SUB-MO-8-TB-001":
      //이용권 번호 팝업 닫기 이벤트
      document
        .querySelectorAll(".popup-center-01 .bg-black")
        .forEach((elem) => {
          elem.addEventListener("click", () => {
            closePopup();
            // document.querySelector(".input-register > label > input").value="";
          });
        });

      // 받은 선물 탭 클릭 이벤트
      document
        .querySelectorAll(".tab-category button:nth-child(1)")
        .forEach((elem) => {
          elem.addEventListener("click", () => {
            change2receive();
          });
        });

      // 보낸 선물 탭 클릭 이벤트
      document
        .querySelectorAll(".tab-category button:nth-child(2)")
        .forEach((elem) => {
          elem.addEventListener("click", (elem) => {
            change2send();
          });
        });

      // 이용권 번호 입력란 내에서 엔터 입력 시
      var inputField = document.querySelector("input[type=url]");
      inputField.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          const inputValue = event.target.value;
          if (inputValue.length < 8 && inputValue != "") {
            var bg = document.querySelector(".background-overlay");
            bg.style.cssText = "display : block;";
            setTimeout(()=>{
              bg.style.cssText = "display : block; opacity : 0.5";
            },50)
            popup.style.display = "block";
            document.body.style.overflow = "hidden";
          }
          inputField.blur();
        }
      });

      // 코드 입력 란 input 리스너 관련 내용
      codeFieldInputListener();
      break;

    case "SUB-MO-8-TB-001(1)":
      //이용권 번호 팝업 닫기 이벤트
      document
        .querySelectorAll(".popup-center-01 .bg-black")
        .forEach((elem) => {
          elem.addEventListener("click", () => {
            closePopup();
            // document.querySelector(".input-register > label > input").value="";
          });
        });
      // 받은 선물 탭 클릭 이벤트
      document
        .querySelectorAll(".tab-category button:nth-child(1)")
        .forEach((elem) => {
          elem.addEventListener("click", () => {
            console.log("1111")
            change2recieveEmpty();
          });
        });

      // 보낸 선물 탭 클릭 이벤트
      document
        .querySelectorAll(".tab-category button:nth-child(2)")
        .forEach((elem) => {
          elem.addEventListener("click", (elem) => {
            change2sendEmpty();
          });
        });

      // 이용권 번호 입력란 내에서 엔터 입력 시
      inputField = document.querySelector("input[type=url]");
      inputField.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          const inputValue = event.target.value;
          if (inputValue.length < 8 && inputValue != "") {
            var bg = document.querySelector(".background-overlay");
            bg.style.cssText = "display : block;";
            setTimeout(()=>{
              bg.style.cssText = "display : block; opacity : 0.5";
            },50)
            popup.style.display = "block";
            document.body.style.overflow = "hidden";
          }
          inputField.blur();
        }
      });

      // 코드 입력 란 input 리스너 관련 내용
      codeFieldInputListener();
      break;

    case "SUB-MO-8-TB-002(1)":
      //이용권 번호 팝업 닫기 이벤트
      document
        .querySelectorAll(".popup-center-01 .bg-black")
        .forEach((elem) => {
          elem.addEventListener("click", () => {
            closePopup();
            // document.querySelector(".input-register > label > input").value="";
          });
        });
      // 받은 선물 탭 클릭 이벤트
      document
        .querySelectorAll(".tab-category button:nth-child(1)")
        .forEach((elem) => {
          elem.addEventListener("click", () => {
            console.log("1111")
            change2recieveEmpty();
          });
        });

      // 보낸 선물 탭 클릭 이벤트
      document
        .querySelectorAll(".tab-category button:nth-child(2)")
        .forEach((elem) => {
          elem.addEventListener("click", (elem) => {
            change2sendEmpty();
          });
        });

      // 이용권 번호 입력란 내에서 엔터 입력 시
      inputField = document.querySelector("input[type=url]");
      inputField.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          const inputValue = event.target.value;
          if (inputValue.length < 8 && inputValue != "") {
            var bg = document.querySelector(".background-overlay");
            bg.style.cssText = "display : block;";
            setTimeout(()=>{
              bg.style.cssText = "display : block; opacity : 0.5";
            },50)
            popup.style.display = "block";
            document.body.style.overflow = "hidden";
          }
          inputField.blur();
        }
      });

      // 코드 입력 란 input 리스너 관련 내용
      codeFieldInputListener();
      break;
  


    case "SUB-MO-8-TB-002":
      //이용권 번호 팝업 닫기 이벤트
      document
        .querySelectorAll(".popup-center-01 .bg-black")
        .forEach((elem) => {
          elem.addEventListener("click", () => {
            closePopup();
            // document.querySelector(".input-register > label > input").value="";
          });
        });

      // 받은 선물 탭 클릭 이벤트
      document
        .querySelectorAll(".tab-category button:nth-child(1)")
        .forEach((elem) => {
          elem.addEventListener("click", () => {
            change2receive();
          });
        });

      // 보낸 선물 탭 클릭 이벤트
      document
        .querySelectorAll(".tab-category button:nth-child(2)")
        .forEach((elem) => {
          elem.addEventListener("click", (elem) => {
            change2send();
          });
        });

      // 이용권 번호 입력란 내에서 엔터 입력 시
      var inputField = document.querySelector("input[type=url]");
      inputField.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          const inputValue = event.target.value;
          if (inputValue.length < 8 && inputValue != "") {
            var bg = document.querySelector(".background-overlay");
            bg.style.cssText = "display : block;";
            setTimeout(()=>{
              bg.style.cssText = "display : block; opacity : 0.5";
            },50)
            popup.style.display = "block";
            document.body.style.overflow = "hidden";
          }
          inputField.blur();
        }
      });

      // 코드 입력 란 input 리스너 관련 내용
      codeFieldInputListener();
      break;

    default:
      break;
  }
}

window.onload = function () {
  appendListener();
};
