
function changeRegisteredProductsEmpty() {
  document.getElementsByClassName("sub-mo-11-tb-002-1")[0].style.display =
    "none";
  document.getElementsByClassName("sub-mo-11-tb-002")[0].style.display = "block";
  document
    .querySelector(".tab-category button:nth-child(1)")
    .classList.remove("active");
  document
    .querySelector(".tab-category button:nth-child(2)")
    .classList.add("active");
}

function changeTabRegisterEmpty() {
  document.getElementsByClassName("sub-mo-11-tb-002-1")[0].style.display =
    "block";
  document.getElementsByClassName("sub-mo-11-tb-002")[0].style.display = "none";
  document
    .querySelector(".tab-category button:nth-child(1)")
    .classList.add("active");
  document
    .querySelector(".tab-category button:nth-child(2)")
    .classList.remove("active");
}

const inputElements = document.querySelectorAll("input");
const parentDiv = document.getElementsByClassName("input-register")[0];
const bgoverlay = document.getElementsByClassName("background-overlay")[0];
const popup = document.getElementsByClassName("popup-center-01")[0];

const sendmain = document.getElementsByClassName("sub-mo-11-tb-002")[0];
const receivemain = document.getElementsByClassName("sub-mo-11-tb-001")[0];
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
  sendmain.style.display = "none";
  receivemain.style.display = "block";
}

function change2receive() {
  sendmain.style.display = "block";
  receivemain.style.display = "none";
}

function change2sendEmpty() {
  document.getElementsByClassName("sub-mo-11-tb-002")[0].style.display = "block";
  document.getElementsByClassName("sub-mo-11-tb-002-1")[0].style.display = "none";
  document.querySelector(".tab-category button:nth-child(1)").classList.remove("active");
  document.querySelector(".tab-category button:nth-child(2)").classList.add("active");
}

function change2recieveEmpty() {
  document.getElementsByClassName("sub-mo-11-tb-002")[0].style.display = "none";
  document.getElementsByClassName("sub-mo-11-tb-002-1")[0].style.display = "block";
  document.querySelector(".tab-category button:nth-child(1)").classList.add("active");
  document.querySelector(".tab-category button:nth-child(2)").classList.remove("active");
}

function appendListener() {
  switch (document.title) {   
    case "SUB-MO-11-TB-002":
        //이용권 번호 팝업 닫기 이벤트
        document
          .querySelectorAll(".popup-center-01 .bg-black")
          .forEach((elem) => {
            elem.addEventListener("click", () => {
              closePopup();
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
        break;
    
    default:
      break;
  }
}
window.onload = function () {
  appendListener();
   document
    .querySelectorAll(".tab-category button:nth-child(1)")
    .forEach((elem) => {
      elem.addEventListener("click", () => {
        changeTabRegisterEmpty();
      });
    });
  document
    .querySelectorAll(".tab-category button:nth-child(2)")
    .forEach((elem) => {
      elem.addEventListener("click", (elem) => {
        changeRegisteredProductsEmpty();
      });
    });
};

