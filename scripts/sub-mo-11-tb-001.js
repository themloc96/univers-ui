function changeRegisteredProductsEmpty() {
  document.getElementsByClassName("sub-mo-11-tb-001-1")[0].style.display =
    "none";
  document.getElementsByClassName("sub-mo-11-tb-002")[0].style.display =
    "block";
  document
    .querySelector(".tab-category button:nth-child(1)")
    .classList.remove("active");
  document
    .querySelector(".tab-category button:nth-child(2)")
    .classList.add("active");
}

function changeTabRegisterEmpty() {
  document.getElementsByClassName("sub-mo-11-tb-001-1")[0].style.display =
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
  setTimeout(() => {
    bg.style.cssText = "display : none;";
  }, 500);
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
  document.getElementsByClassName("sub-mo-11-tb-002")[0].style.display =
    "block";
  document.getElementsByClassName("sub-mo-11-tb-001-1")[0].style.display =
    "none";
  document
    .querySelector(".tab-category button:nth-child(1)")
    .classList.remove("active");
  document
    .querySelector(".tab-category button:nth-child(2)")
    .classList.add("active");
}

function change2recieveEmpty() {
  document.getElementsByClassName("sub-mo-11-tb-002")[0].style.display = "none";
  document.getElementsByClassName("sub-mo-11-tb-001-1")[0].style.display =
    "block";
  document
    .querySelector(".tab-category button:nth-child(1)")
    .classList.add("active");
  document
    .querySelector(".tab-category button:nth-child(2)")
    .classList.remove("active");
}

function handlePopupOption() {
  const btnOption = document.querySelectorAll(
    ".sub-management-sub-mo-11-tb-001 .list-card .card-management .btn-more"
  );
  const listOption = document.querySelectorAll(
    ".sub-management-sub-mo-11-tb-001 .list-card .card-management .box-option"
  );

  const itemOption = document.querySelectorAll(
    ".sub-management-sub-mo-11-tb-001 .list-card .card-management .box-option .option-item"
  );

  itemOption?.forEach((item) => {
    item?.addEventListener("click", () => handleClosePopup());
  });

  btnOption?.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      if (listOption[idx]?.className.includes("open")) {
        handleClosePopup();
      } else {
        handleClosePopup();
        listOption[idx]?.classList.add("open");
      }
    });
  });
}
function handleClosePopup() {
  const listOption = document.querySelectorAll(
    ".sub-management-sub-mo-11-tb-001 .list-card .card-management .box-option"
  );
  listOption?.forEach((item) => {
    item.classList.remove("open");
  });
}

function appendListener() {
  switch (document.title) {
    case "SUB-MO-11-TB-001":
      // 받은 선물 탭 클릭 이벤트
      document
        .querySelectorAll(".tab-category button:nth-child(1)")
        .forEach((elem) => {
          elem.addEventListener("click", () => {
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
      handlePopupOption();
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
