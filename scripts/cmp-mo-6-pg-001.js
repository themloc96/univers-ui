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

  document.querySelectorAll(".txt-product").forEach(function (el) {
    el.innerHTML = "<span>" + item.innerText + "</span><i></i>";
  });

  handleHidePopup();
  //enableScroll();
  document.body.style.overflow = "";
}
var isScroll = true;

function inquiryView(el) {
  if (el.classList.contains("active")) {
    document.querySelectorAll(".inquiry-locked").forEach(function (el) {
      el.classList.remove("active");
    });
    document.querySelectorAll(".inquiry-my-locked").forEach(function (el) {
      el.classList.remove("active");
    });
    el.classList.remove("active");
  } else {
    document.querySelectorAll(".inquiry-locked").forEach(function (el) {
      el.classList.remove("active");
    });
    document.querySelectorAll(".inquiry-my-locked").forEach(function (el) {
      el.classList.remove("active");
    });
    el.classList.add("active");

    isScroll = false;

    setTimeout(() => {
      isScroll = true;
    }, 600);

    gsap.to(".header", { y: -64, duration: 1, ease: "power2.easeIn" }, 0);
    gsap.to(".tab-fixed", { y: -64, duration: 1, ease: "power2.easeIn" }, 0);

    setTimeout(() => {
      var scrollY = document.querySelector(".inquiry-my-locked").offsetTop - 47;
      window.scrollTo({ left: 0, top: scrollY, behavior: "smooth" });
    }, 150);

    setTimeout(() => {
      var scrollY = el.offsetTop - 64 - 47;
      window.scrollTo({ left: 0, top: scrollY, behavior: "smooth" });
    }, 150);
  }
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
// Event handler callbacks

function onClickTab(element) {
  const tabs = document.querySelectorAll(".tab-fixed .tab-category button");
  tabs.forEach(function (tab) {
    tab.classList.remove("active");
    if (tab === element) {
      tab.classList.add("active");
    }
  });
}

function onClickBtnDropdown() {
  console.log("begin onClickBtnDropdown");
  if (document.querySelector(".popup-dropdown").classList.contains("show")) {
    document.querySelector(".popup-dropdown").classList.remove("show");
  } else {
    document.querySelector(".popup-dropdown").classList.add("show");
  }
}

function onScrollTabFixed() {
  console.log("begin onScrollTabFixed");
  if (document.querySelector(".tab-fixed").getBoundingClientRect().y <= 0) {
    if (isScroll) {
      isScroll = false;

      gsap.to(".header", { y: 0, duration: 1, ease: "power2.easeIn" }, 0);
      gsap.to(".tab-fixed", { y: 0, duration: 1, ease: "power2.easeIn" }, 0);
      setTimeout(() => {
        isScroll = true;
      }, 600);
    }
  }
}
function onClickInquiryList() {
  console.log("clicked");
  const myInquiry = document.querySelector(".inquiry-my-locked");
  const myInquiries = document.querySelectorAll(".inquiry-my-locked");
  const inquiries = document.querySelectorAll(".inquiry-locked");

  if (myInquiry.classList.contains("active")) {
    inquiries.forEach(function (el) {
      el.classList.remove("active");
    });
    myInquiries.forEach(function (el) {
      el.classList.remove("active");
    });
    myInquiry.classList.remove("active");
  } else {
    inquiries.forEach(function (el) {
      el.classList.remove("active");
    });
    myInquiries.forEach(function (el) {
      el.classList.remove("active");
    });
    myInquiry.classList.add("active");

    gsap.to(".header", { y: -64, duration: 1, ease: "power2.easeIn" }, 0);
    gsap.to(".tab-fixed", { y: -64, duration: 1, ease: "power2.easeIn" }, 0);

    isScroll = false;

    setTimeout(() => {
      isScroll = true;
    }, 600);

    setTimeout(() => {
      var scrollY = myInquiry.offsetTop - 47;
      window.scrollTo({ left: 0, top: scrollY, behavior: "smooth" });
    }, 150);
  }
}

function openDeletePopup(e) {
  e.stopPropagation();
  console.log("clicked ", e.target);
  const popup = document.querySelector(".popup-wrap.type-2");
  console.log(popup);
  popup.classList.add("show");
  document.body.style.overflow = "hidden";
}
function closeDeletePopup() {
  const popup = document.querySelector(".popup-wrap.type-2");
  // const btn = document.querySelector('.popup-wrap.type-2 .btn-sub-task-48px.bg-black')
  popup.classList.remove("show");
  document.body.style.overflow = "auto";
}
function addOnClickCloseBottomSheet() {
  const btnHeaderClose = document.querySelectorAll("button.btn-header-close");
  btnHeaderClose.forEach((el) => {
    el.addEventListener("click", () => handleHidePopup());
  });
  const backgroundFilter = document.querySelectorAll(".background");
  backgroundFilter.forEach((el) => {
    el.addEventListener("click", () => handleHidePopup());
  });
}
function appendListener() {
  console.log("begin appendListener");
  switch (document.title) {
    case "CMP-MO-6-PG-001":
      document
        .querySelectorAll(".tab-fixed .tab-category button")
        .forEach(function (el) {
          el.addEventListener("click", () => onClickTab(el));
        });

      addOnClickCloseBottomSheet();
      const seLecTerDropdown = document.querySelector(".popup-dropdown ul");
      const liElements = seLecTerDropdown.querySelectorAll("li");
      liElements.forEach((li) => {
        li.addEventListener("click", function () {
          checked(this);
        });
      });
      document
        .querySelector(".btn-dropdown")
        .addEventListener("click", () => handleShowPopup());
      window.addEventListener("scroll", () => onScrollTabFixed());
      document
        .querySelector(".inquiry-my-locked")
        .addEventListener("click", () => onClickInquiryList());

      document
        .querySelector(".btn .btn-txt-delete")
        .addEventListener("click", (e) => openDeletePopup(e));
      document
        .querySelector(".background-overlay")
        .addEventListener("click", () => closeDeletePopup());
      document
        .querySelector(".popup-wrap.type-2 .btn-sub-task-48px.bg-gray")
        .addEventListener("click", () => closeDeletePopup());
      document
        .querySelector(".popup-wrap.type-2 .btn-sub-task-48px.bg-black")
        .addEventListener("click", () => closeDeletePopup());
      document
        .querySelector(".btn .btn-txt-modify")
        .addEventListener("click", () => {
          location.href = "CMP-MO-6-PG-003.html";
        });
      document
        .querySelector(".btn-header-back")
        .addEventListener("click", () => {
          location.href = "PRD-MO-6-PG-001.html";
        });
      break;
    case "CMP-MO-6-PG-001(1)":

      document
        .querySelectorAll(".tab-fixed .tab-category button")
        .forEach(function (el) {
          el.addEventListener("click", () => onClickTab(el));
        });
      document
        .querySelector(".btn-dropdown")
        .addEventListener("click", () => onClickBtnDropdown());
      window.addEventListener("scroll", () => onScrollTabFixed());
      document
        .querySelector(".inquiry-my-locked")
        .addEventListener("click", () => onClickInquiryList());
      break;
      case "CMP-MO-6-PG-001(2)":
        document
          .querySelectorAll(".tab-fixed .tab-category button")
          .forEach(function (el) {
            el.addEventListener("click", () => onClickTab(el));
          });
        window.addEventListener("scroll", () => onScrollTabFixed());
        document
          .querySelector(".inquiry-my-locked")
          .addEventListener("click", () => onClickInquiryList());
        break;
    case "cmp-mo-6-bs-001":
      addOnClickCloseBottomSheet();
      break;
    case "cmp-mo-6-bs-001(1)":
      addOnClickCloseBottomSheet();
      break;
    case "cmp-mo-6-bs-002":
      addOnClickCloseBottomSheet();
      break;
    case "cmp-mo-6-bs-002(3)":
      addOnClickCloseBottomSheet();
      break;
    default:
      break;
  }
}

window.onload = function () {
  console.log("begin onload");
  appendListener();
};
