let rangeMin = 1;
const range = document.querySelector(".range-selected");
const rangeInput = document.querySelectorAll(".range-input input");
const rangePrice = document.querySelectorAll(".range-price input");
rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minRange = parseInt(rangeInput[0].value);
    let maxRange = parseInt(rangeInput[1].value);
    if (maxRange - minRange < rangeMin) {
      if (e.target.className === "min") {
        rangeInput[0].value = maxRange - rangeMin;
      } else {
        rangeInput[1].value = minRange + rangeMin;
      }
    } else {
      // rangePrice[0].value = minRange;
      // rangePrice[1].value = maxRange;
      let txt = document.querySelector(".txt-result-default");
      txt.innerHTML = `<p>${minRange}${
        minRange > 0 ? "만 원" : "원 "
      } ~ ${maxRange}만 원</p>`;
      range.style.left = (minRange / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxRange / rangeInput[1].max) * 100 + "%";

      document.querySelectorAll(".priceItem").forEach(function (el) {
        el.remove();
      });

      document.querySelector(".btn-filter-options").innerHTML +=
        "<button class='btn-filter-option priceItem' ><span>" +
        minRange +
        "만원 ~ " +
        maxRange +
        "만원</span><i onclick='priceReset(this)'></i></button>";

      try {
        document.querySelector(".bottomsheet .filter-option").style.display =
          "flex";
        document.querySelector("#price_tab").classList.remove("bg-black");
        document.querySelector("#price_tab").className += " checked";
        document.querySelector(".btn-main-task").classList.remove("disabled");
        document.querySelector(".btn-main-task").className += " bg-black";
        document.querySelector(".bottomsheet.filter .body").style.height =
          "calc(100% - 193px)";
      } catch (e) {}
    }
  });
});

function priceReset(el) {
  let minRange = 0;
  let maxRange = 10;
  if (maxRange - minRange < rangeMin) {
    if (e.target.className === "min") {
      rangeInput[0].value = maxRange - rangeMin;
    } else {
      rangeInput[1].value = minRange + rangeMin;
    }
  } else {
    // rangePrice[0].value = minRange;
    // rangePrice[1].value = maxRange;
    let txt = document.querySelector(".txt-result-default");
    txt.innerHTML = `<p>${minRange}${
      minRange > 0 ? "만 원" : "원 "
    } ~ ${maxRange}만 원</p>`;
    range.style.left = (minRange / rangeInput[0].max) * 100 + "%";
    range.style.right = 100 - (maxRange / rangeInput[1].max) * 100 + "%";
  }

  rangeInput[0].value = 0;

  rangeInput[1].value = 10;

  var itemLength = document.querySelectorAll(
    ".btn-filter-options button"
  ).length;
  if (itemLength == 1) {
    document.querySelector(".btn-main-task").classList.remove("bg-black");
    document.querySelector(".btn-main-task").className += " disabled";
  }

  var itemLength = document.querySelectorAll(
    ".bottomsheet .btn-filter-options button"
  ).length;
  if (itemLength == 1) {
    document
      .querySelector(".bottomsheet .btn-main-task")
      .classList.remove("bg-black");
    document.querySelector(".bottomsheet .btn-main-task").className +=
      " disabled";
    document.querySelector(".bottomsheet .filter-option").style.display =
      "none";
    document.querySelector(".bottomsheet.filter .body").style.height = "";
  }

  document.querySelector("#price_tab").classList.remove("checked");
  document.querySelector(".priceItem").remove();
}
