const btnInfoSmall = document.querySelectorAll(".btn-info-small");

function showTooltip() {
  btnInfoSmall.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopPropagation();
      const parentElement = button.parentElement.parentNode;
      const tooltip = parentElement.querySelector(".tooltip");
      if (tooltip) {
        tooltip.classList.toggle("show");
      }
    });
  });
  window.addEventListener("click", function (event) {
    btnInfoSmall.forEach((button) => {
      const parentElement = button.parentElement.parentNode;
      const tooltip = parentElement.querySelector(".tooltip");
      if (tooltip && !parentElement.contains(event.target)) {
        tooltip.classList.remove("show");
      }
    });
  });
}

function shipPingDropdown() {
  const infoPriceSummary = document.querySelectorAll(".info-price-summary");
  infoPriceSummary.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("open");
      const infoPriceFull =
        button.parentElement.querySelector(".info-price-full");
      if (infoPriceFull) {
        infoPriceFull.classList.toggle("show");
      }
    });
  });
}

window.onload = function () {
  showTooltip();
  shipPingDropdown();
};
