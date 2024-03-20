const dropdown = document.querySelector(
  ".preset-pay-mo-10-bs-003-1 .popup-dropdown"
);

const handleClose = () => {
  dropdown?.classList.remove("show");
};

const handleIconClose = () => {
  const iconClose = document.querySelector(
    ".preset-pay-mo-10-bs-003-1 .popup-dropdown-body .btn-header-close"
  );
  iconClose?.addEventListener("click", () => handleClose());
};
const handleBackgroundClose = () => {
  const background = document.querySelector(
    ".preset-pay-mo-10-bs-003-1 .background"
  );
  background?.addEventListener("click", () => handleClose());
};

const handleChecked = () => {
  const listItem = document.querySelectorAll(
    ".preset-pay-mo-10-bs-003-1 .popup-dropdown-body .list-options li"
  );

  listItem?.forEach((item) => {
    item.addEventListener("click", () => {
      listItem?.forEach((item) => {
        item.classList.remove("active");
      });

      item.classList.toggle("active");
    });
  });
};

function appendListener() {
  try {
    handleChecked();
    handleIconClose();
    handleBackgroundClose();
  } catch (error) {
    console.log(error);
  }
}

window.onload = function () {
  appendListener();
};
