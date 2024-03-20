var titlePositionX = 0;
var textAreaPositionX = 0;
var timerScrill;

function checked(item) {
  var listItems = document
    .querySelector("ul.listOptions")
    .getElementsByTagName("li");
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].innerHTML = listItems[i].textContent;
    listItems[i].classList.remove("active");
  }
  var checkIcon = document.createElement("i");
  checkIcon.classList.add("checked", "icon", "icon-check-active");
  item.classList.add("active");
  item.appendChild(checkIcon);

  document.querySelectorAll(".dropdown-filter label").forEach(function (el) {
    el.innerHTML = `${item.innerText}<i></i>`;
  });

  handleHidePopup();
  //enableScroll();
  document.body.style.overflow = "";
}
function dropdownDelete() {
  document.querySelector(".popup-dropdown").classList.remove("show");
}
function handleShowPopup() {
  let popup = document.querySelectorAll(".popup-dropdown.cmp-mo-6-bs-001")[0];
  const background = document.querySelectorAll(
    ".popup-dropdown .background"
  )[0];
  const body = document.querySelectorAll(".popup-dropdown-body")[0];
  const tab_categoty = document.querySelectorAll(".tab-category")[0];
  const iconDropUp = document.querySelectorAll(".btn-listorder i")[0];
  const fliter = document.querySelectorAll(".fliter")[0];

  popup.classList.add("show");
  document.body.style.overflow = "hidden";

  gsap.set(body, {
    y: 60,
    opacity: 0,
  });
  gsap.set(tab_categoty, {
    opacity: 1,
  });
  gsap.set(background, {
    display: "flex",
    opacity: 0,
  });
  gsap.set(iconDropUp, {
    transform: "scaleY(1)",
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
  gsap.to(body, {
    y: 0,
    duration: 0.35,
    ease: "power2.out",
    delay: 0.1,
  });
}
function handleHidePopup() {
  document.body.style.overflow = "";

  let popup = document.querySelectorAll(".popup-dropdown");
  const background = document.querySelectorAll(".background");
  const body = document.querySelectorAll(".popup-dropdown-body");
  //const tab_categoty = document.querySelector(".tab-category");
  //const fliter = document.querySelector(".fliter");
  const iconDropUp = document.querySelectorAll(".btn-listorder i");

  background.forEach(function (el) {
    gsap.set(el, { display: "flex", opacity: 0.5 });
    gsap.to(el, { opacity: 0, duration: 0.2, ease: "power2.out" });
    //gsap.to(tab_categoty, { opacity: 1, duration: 0.2, ease: "power2.out" });
    //gsap.to(fliter, { opacity: 1, duration: 0.2, ease: "power2.out" });
  });

  body.forEach(function (el) {
    gsap.to(el, {
      y: 60,
      duration: 0.2,
      opacity: 0,
      ease: "power2.out",
      onComplete: () => {
        background.forEach(function (el) {
          gsap.set(el, { opacity: 0 });
          gsap.set(el, { display: "none" });
        });

        popup.forEach(function (el) {
          el.classList.remove("show");
        });
      },
    });
  });

  iconDropUp.forEach(function (el) {
    gsap.to(el, {
      transform: "scaleY(1)",
      delay: 0.1,
      duration: 0.35,
    });
  });

  gsap.utils.toArray(".bottomsheet .btn-filter-options").forEach((option) => {
    if (document.querySelector(".swiper-slide.first .btn-filter-options")) {
      option.innerHTML = document.querySelector(
        ".swiper-slide.first .btn-filter-options"
      ).innerHTML;
    }
  });
}
document
  .querySelector(".btn-txt-underline input")
  .addEventListener("change", function (e) {
    const maxSize = 30 * 1024 * 1024;
    const selectedFile = e.target.files[0];

    const allowedExtensions = ["JPG", "PNG", "PDF", "DOC", "XLSX", "PPT"];
    const fileExtension = selectedFile.name.split(".").pop().toLowerCase();

    // case 2-1 첨부파일 형식 불일치 시 팝업
    // if (!allowedExtensions.includes(fileExtension)) {
    //   popupViewLib("popup1");
    //   return;
    // }

    // case 2-2 첨부파일 용량 30MB 초과 시 팝업
    // if (selectedFile.size > maxSize) {
    //   popupViewLib("popup2");
    //   return;
    // }

    var fileLength = document.querySelectorAll(
      ".list-attached-file button"
    ).length;

    if (fileLength < 9) {
      document.querySelector(".txt-count").innerHTML = fileLength + 1 + "개";
      const attachedButton = document.createElement("div");
      attachedButton.classList.add("attached-file");

      attachedButton.innerHTML =
        '<p class="txt"><span class="txt-attached-file-name">tuniverse</span><span class="txt-filename-extension">.jpg</span></p><button class="txt-btn">삭제<i></i></button>';
      const txtBtn = attachedButton.querySelector(".txt-btn");
      console.log(txtBtn);
      txtBtn.addEventListener("click", () => fileDelete(txtBtn));
      document.querySelector(".list-attached-file").appendChild(attachedButton);
    } else {
      console.log("10개");
      document.querySelector(".txt-count").innerHTML = "+9개";
    }
  });

function fileDelete(el) {
  el.parentNode.remove();
  var fileLength = document.querySelectorAll(
    ".list-attached-file button"
  ).length;
  document.querySelector(".txt-count").innerHTML = fileLength + "개";
}

function fnChkByte(obj, maxByte) {
  var str = obj.value;
  var str_len = str.length;
  var rbyte = 0;
  var rlen = 0;
  var one_char = "";
  var str2 = "";

  for (var i = 0; i < str_len; i++) {
    one_char = str.charAt(i);
    if (escape(one_char).length > 4) {
      rbyte += 1;
    } else {
      rbyte++;
    }
    if (rbyte <= maxByte) {
      rlen = i + 1;
    }
  }
  if (rbyte > maxByte) {
    str2 = str.substr(0, rlen);
    obj.value = str2;
    fnChkByte(obj, maxByte);
  } else {
    document.querySelector("textarea").innerText = rbyte;
    document.querySelector(".txt-character-counter").firstChild.innerText =
      str_len;
  }
}

document.querySelector("#title").addEventListener("blur", function () {
  document.querySelector(".btn-main-task").style.display = "flex";

  var bigCount = document.querySelector("textarea").value.length;
  var smallCount = document.querySelector("#title").value.length;

  if (smallCount < 5) {
    document.querySelector(".input-text").classList.add("error");

    document.querySelector(".input-text .txt-guide-error").innerText =
      "최소 5자 이상 작성해 주세요.";
  }

  if (smallCount == 0) {
    document.querySelector(".input-text").classList.add("error");

    document.querySelector(".input-text .txt-guide-error").innerText =
      "문의 제목을 작성해주세요.";
  }
  if (smallCount > 4) {
    document.querySelector(".input-text").classList.remove("error");

    document.querySelector(".input-text .txt-guide-error").innerText =
      "최소 5자 이상 작성해 주세요.";
  }

  if (smallCount > 5 && bigCount > 9) {
    document.querySelector(".btn-main-task").classList.add("bg-black");
  } else {
    document.querySelector(".btn-main-task").classList.remove("bg-black");
  }

  timerScrill = setTimeout(() => {
    window.scrollTo({ left: 0, top: titlePositionX, behavior: "smooth" });
  }, 150);
});

document.querySelector("textarea").addEventListener("blur", function () {
  document.querySelector(".btn-main-task").style.display = "flex";

  var bigCount = document.querySelector("textarea").value.length;
  var smallCount = document.querySelector("#title").value.length;

  if (bigCount <= 9) {
    document.querySelector(".input-text-large").classList.add("error");
    document.querySelector(".input-text-large .txt-guide-error").innerText =
      "최소 10자 이상 작성해 주세요.";
  }

  if (bigCount == 0) {
    document.querySelector(".input-text-large").classList.add("error");
    document.querySelector(".input-text-large .txt-guide-error").innerText =
      "상품 문의를 작성해 주세요.";
  }

  if (bigCount > 9) {
    document.querySelector(".input-text-large").classList.remove("error");
  }

  if (smallCount > 5 && bigCount > 9) {
    document.querySelector(".btn-main-task").classList.add("bg-black");
  } else {
    document.querySelector(".btn-main-task").classList.remove("bg-black");
  }

  timerScrill = setTimeout(() => {
    window.scrollTo({ left: 0, top: textAreaPositionX, behavior: "smooth" });
  }, 150);
});

function send() {
  var bigCount = document.querySelector("textarea").value.length;
  var smallCount = document.querySelector("#title").value.length;

  var scrollY;
  if (
    document.querySelector(".dropdown-filter").innerText.includes("문의하실")
  ) {
    console.log(document.querySelector(".dropdown-filter").innerText);

    popupViewLib("popup1");
  } else if (smallCount <= 5) {
    if (smallCount <= 5) {
      document.querySelector(".input-text").classList.add("error");

      document.querySelector(".input-text .txt-guide-error").innerText =
        "최소 5자 이상 작성해 주세요.";
    }

    if (smallCount == 0) {
      document.querySelector(".input-text").classList.add("error");

      document.querySelector(".input-text .txt-guide-error").innerText =
        "문의 제목을 작성해주세요.";
    }

    scrollY = document.querySelector(".input-text input").offsetTop - 130 - 64;

    setTimeout(() => {
      window.scrollTo({ left: 0, top: scrollY, behavior: "smooth" });
    }, 200);
  } else if (bigCount <= 9) {
    if (bigCount <= 9) {
      document.querySelector(".input-text-large").classList.add("error");
      document.querySelector(".input-text-large .txt-guide-error").innerText =
        "최소 10자 이상 작성해 주세요.";
    }

    if (bigCount == 0) {
      document.querySelector(".input-text-large").classList.add("error");
      document.querySelector(".input-text-large .txt-guide-error").innerText =
        "상품 문의를 작성해 주세요.";
    }

    scrollY = document.querySelector("textarea").offsetTop + 144;

    setTimeout(() => {
      window.scrollTo({ left: 0, top: scrollY, behavior: "smooth" });
    }, 200);
  } else {
    resetAlert();
  }
}

function resetAlert() {
  // deActiveResend();
  gsap.delayedCall(0.5, () => {
    toast();
  });
}

var timerFocus;

function inputFocus(el) {
  clearTimeout(timerScrill);

  let scrollLocation = document.documentElement.scrollTop; // 현재
  titlePositionX = scrollLocation;

  timerFocus = setTimeout(() => {
    var scrollY = el.offsetTop - 130 - 64;
    window.scrollTo({ left: 0, top: scrollY, behavior: "smooth" });
  }, 200);

  var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기
  if (
    varUA.indexOf("iphone") > -1 ||
    varUA.indexOf("ipad") > -1 ||
    varUA.indexOf("ipod") > -1
  ) {
    clearTimeout(timerFocus);
  }

  var mobile = /iphone|ipad|ipod|android/i.test(
    navigator.userAgent.toLowerCase()
  );

  if (mobile) {
    //모바일 처리
    document.querySelector(".btn-main-task").style.display = "none";
  }
}

function textAreaFocus(el) {
  clearTimeout(timerScrill);

  let scrollLocation = document.documentElement.scrollTop; // 현재
  textAreaPositionX = scrollLocation;

  timerFocus = setTimeout(() => {
    var scrollY = el.offsetTop + 144;
    window.scrollTo({ left: 0, top: scrollY, behavior: "smooth" });
  }, 200);

  var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기
  if (
    varUA.indexOf("iphone") > -1 ||
    varUA.indexOf("ipad") > -1 ||
    varUA.indexOf("ipod") > -1
  ) {
    clearTimeout(timerFocus);
  }

  var mobile = /iphone|ipad|ipod|android/i.test(
    navigator.userAgent.toLowerCase()
  );

  if (mobile) {
    //모바일 처리
    document.querySelector(".btn-main-task").style.display = "none";
  }
}

function popupViewLib(id) {
  document.querySelector("#" + id).style.display = "block";
}

function popupCloseLib(id) {
  document.querySelector("#" + id).style.display = "none";

  var scrollY = document.querySelector(".dropdown-filter").offsetTop - 210;

  setTimeout(() => {
    window.scrollTo({ left: 0, top: scrollY, behavior: "smooth" });
  }, 200);
  setTimeout(() => {
    document.querySelector(".popup-dropdown").classList.add("show");
  }, 700);
}
function popupClose(id) {
  document.querySelector("#" + id).style.display = "none";
}

function onClickDropdownFilter() {
  document.querySelector(".popup-dropdown").classList.toggle("show");
}
function addOnClickDropdownFilter() {
  document
    .querySelector(".dropdown-filter")
    .addEventListener("click", () => handleShowPopup());
}
// Event Listeners
function appendListener() {
  console.log("begin appendListener ", document.title);
  switch (document.title) {
    case "CMP-MO-6-PG-002":
      addOnClickDropdownFilter();
      break;
    case "CMP-MO-6-PG-003":
      addOnClickDropdownFilter();
      const backgroundFilter = document.querySelectorAll(".background");
      backgroundFilter.forEach((el) => {
        el.addEventListener("click", () => handleHidePopup());
      });

      const btnHeaderClose = document.querySelectorAll(
        "button.btn-header-close"
      );
      btnHeaderClose.forEach((el) => {
        el.addEventListener("click", () => handleHidePopup());
      });
      const seLecTerDropdown = document.querySelector(".popup-dropdown ul");
      const liElements = seLecTerDropdown.querySelectorAll("li");
      liElements.forEach((li) => {
        li.addEventListener("click", function () {
          checked(this);
        });
      });
      // 파일 삭제 버튼
      document
        .querySelectorAll(".attached-file .txt-btn")
        .forEach(function (el) {
          el.addEventListener("click", () => fileDelete(el));
        });
      document
        .querySelector(".btn-header-home")
        .addEventListener("click", () => {
          location.href = "PRD-MO-6-PG-001.html";
        });
      break;
    default:
      break;
  }
}
window.onload = function () {
  console.log("begin onload");
  appendListener();
};
