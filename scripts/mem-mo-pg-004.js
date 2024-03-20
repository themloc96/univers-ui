var checkboxes = document.querySelectorAll(
  "input[type=checkbox]:not(.selectAll)"
);

function handleCheck() {
  if (
    Array.from(checkboxes).every(function (option) {
      return option.checked;
    })
  ) {
    document.querySelector(".selectAll").checked = true;
  } else {
    document.querySelector(".selectAll").checked = false;
  }
  if (
    Array.from(checkboxes).every(function (option) {
      if (option.classList.contains("required")) {
        return option.checked;
      }
      return true;
    })
  ) {
    document.querySelector(".btn-submit").classList.add("btn_active");
  } else {
    document.querySelector(".btn-submit").classList.remove("btn_active");
  }
}

function init() {
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("click", handleCheck);
  });
  let checkboxall = document.querySelector("input[type=checkbox].selectAll");
  let eventcheckboxall = document.querySelector(".title-option");
  eventcheckboxall.addEventListener("click", (e) => {
    let status = e.target.checked;
    if (e.target.checked == undefined) {
      status = !checkboxall.checked;
    }
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = status;
    });
    handleCheck();
    checkboxall.checked = status;
  });
}
init();
const ConfirmAlert = (messageConfirm = "") => {
  confirm(messageConfirm);
};
