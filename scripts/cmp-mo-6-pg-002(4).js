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

  document.querySelector(".dropdown-filter").innerHTML =
    "<label>" + item.innerText + "<i></i></label>";
  document.querySelector(".dropdown-filter label").style.color = "#000";
  document.querySelector(".dropdown-filter label").style.fontWeight = "700";

  dropdownDelete();
}

function dropdownDelete() {
  document.querySelector(".popup-dropdown").classList.remove("show");
}

document
  .querySelector(".btn-txt-underline input")
  .addEventListener("change", function (el) {
    var fileLength = document.querySelectorAll(
      ".list-attached-file button"
    ).length;

    console.log(fileLength);

    if (fileLength < 9) {
      document.querySelector(".txt-count").innerHTML = fileLength + 1 + "개";
      const attachedButton = document.createElement('div');
      attachedButton.classList.add('attached-file')

       attachedButton.innerHTML = '<p class="txt"><span class="txt-attached-file-name">tuniverse</span><span class="txt-filename-extension">.jpg</span></p><button class="txt-btn">삭제<i></i></button>';
       const txtBtn = attachedButton.querySelector('.txt-btn')
       console.log(txtBtn)
       txtBtn.addEventListener('click', () => fileDelete(txtBtn))
       document.querySelector(".list-attached-file").appendChild(attachedButton)
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

try {
  document
    .querySelector(".dropdown-filter")
    .addEventListener("click", function (el) {
      if (
        document.querySelector(".popup-dropdown").classList.contains("show")
      ) {
        document.querySelector(".popup-dropdown").classList.remove("show");
      } else {
        document.querySelector(".popup-dropdown").classList.add("show");
      }
    });
} catch (e) {}

function fnChkByte(obj, maxByte) {
  console.log('begin fnChkByte');
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

  if (smallCount <= 5) {
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

    scrollY = document.querySelector(".input-text input").offsetTop - 100 - 64;

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

    scrollY = document.querySelector("textarea").offsetTop + 114;

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
    console.log(el.offsetTop);
    var scrollY = el.offsetTop - 100 - 64;
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
    console.log(el.offsetTop);

    var scrollY = el.offsetTop + 114;
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

window.onload = function () {
  console.log("begin onload");
  document.querySelectorAll('.btn-attached-file .txt-btn').forEach(function (el) {
    el.addEventListener('click', () => fileDelete(el))
  })
};
