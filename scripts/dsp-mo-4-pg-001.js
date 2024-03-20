function checkValue() {
  let searchInput = document.querySelector(
    ".input-search-gray-1 > input[type=search]"
  );
  let iconElement = document.querySelector(".btn-input-x");
  if (searchInput.value !== "") {
    iconElement.classList.add("show-x");
  } else {
    iconElement.classList.remove("show-x");
  }
}

function removeContent() {
  var inputForm = document.querySelector(
    ".input-search-gray-1 > input[type=search]"
  );
  inputForm.value = "";
  checkValue();
}

const removeText = document.querySelector(".btn-input-x");
removeText.addEventListener("click", removeContent);

const isMobile = () => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return "mobile";
  }
  return "pc";
};

window.addEventListener("load", function () {
  let originalSize = window.innerHeight;
  const tabbar = document.querySelector(".tabbar-bottom");
  const inputForm = document.querySelector(
    ".input-search-gray-1 > input[type=search]"
  );

  let isInputActive = false;

  inputForm.addEventListener("focus", function () {
    isInputActive = true;
    console.log("Input field activated");
  });

  inputForm.addEventListener("blur", function () {
    isInputActive = false;
    console.log("Input field deactivated");
  });

  window.addEventListener("resize", function () {
    var currentSize = window.innerHeight;
    console.log(isMobile());
    if (
      currentSize !== originalSize &&
      isInputActive &&
      isMobile() === "mobile"
    ) {
      tabbar.style.display = "none";
    } else {
      // alert("가상 키보드의 사용이 종료되었습니다.");
      tabbar.style.display = "flex";
    }
  });
});
