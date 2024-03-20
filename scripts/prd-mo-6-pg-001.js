function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  //   console.log(rect.top);
  //   console.log(window.innerHeight);
  return rect.top < 150;
  //   return (
  //     rect.top >= 0 &&
  //     rect.left >= 0 &&
  //     rect.bottom <=
  //       (window.innerHeight || document.documentElement.clientHeight) &&
  //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //   );
}
// *

let isTabAutoActiveAble = true;
let timeOutIsTabAutoActiveAble = undefined;

//*
window.addEventListener("scroll", function () {
  if (document.querySelector(".tab-category").childElementCount == 3) {
    if (isTabAutoActiveAble == true) {
      // tab 개수 3개
      var productInfo = isInViewport(document.querySelector(".btn-more"));
      var useGuide = isInViewport(document.querySelector("#target_3"));
      var firstTab = document.querySelector(
        ".tab-fixed .tab-category button:nth-child(1)"
      );
      var secondTab = document.querySelector(
        ".tab-fixed .tab-category button:nth-child(2)"
      );
      var thirdTab = document.querySelector(
        ".tab-fixed .tab-category button:nth-child(3)"
      );
      if (productInfo && !useGuide) {
        // console.log(2);
        firstTab.className = "";
        secondTab.className = "active";
        thirdTab.className = "";
      } else if (productInfo && useGuide) {
        // console.log(3);
        firstTab.className = "";
        secondTab.className = "";
        thirdTab.className = "active";
      } else {
        // console.log(1);
        firstTab.className = "active";
        secondTab.className = "";
        thirdTab.className = "";
      }
    }
  } else {
    // tab 개수 2개
    if (isTabAutoActiveAble == true) {
      var useGuide = isInViewport(document.querySelector("#target_3"));
      var firstTab = document.querySelector(
        ".tab-fixed .tab-category button:nth-child(1)"
      );
      var secondTab = document.querySelector(
        ".tab-fixed .tab-category button:nth-child(2)"
      );
      if (useGuide) {
        console.log(2);
        firstTab.className = "";
        secondTab.className = "active";
      } else {
        console.log(1);
        firstTab.className = "active";
        secondTab.className = "";
      }
    }
  }
});
// *

// function listDropdown() {
//   console.log('dropdown 1')
//   let list_dropdown = document.querySelector(".list-dropdown");
//   let items = list_dropdown.querySelectorAll(".btn-dropdown");
//   items.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       let info = btn.parentElement;
//       if (info.classList.contains("show")) {
//         info.classList.remove("show");
//       } else {
//         info.classList.add("show");
//       }
//     });
//   });
// }

// function listDropdown() {
//   console.log('dropdown 2')
//   let list_dropdown = document.querySelector(".list-dropdown");
//   let items = list_dropdown.querySelectorAll(".btn-dropdown");
//   items.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       let info = btn.parentElement;
//       if (info.classList.contains("show")) {
//         info.classList.remove("show");
//       } else {
//         info.classList.add("show");
//       }
//     });
//   });
// }

function clickEvent() {
  const __arrayStruct = [
    // {
    //   parent: ".list-dropdown",
    //   classClick: ".btn-dropdown",
    //   classTarget: ".dropdown",
    //   classAdd: "show",
    //   classDelete: "",
    //   isRadio: false,
    //   isClickOtherRemoveClass: false,
    //   onClick: (index) => {
    //     let __array = document.querySelectorAll(
    //       ".list-dropdown .dropdown .list-info"
    //     );

    //     let __element = document.querySelector(
    //       ".list-dropdown .show .list-info"
    //     );

    //     __array.forEach((element, __index) => {
    //       if (__index != index) {
    //         document
    //           .querySelectorAll(".list-dropdown .dropdown")
    //           [__index].classList.remove("show");
    //         toggleHeight(element, false);
    //         document
    //           .querySelectorAll(".list-dropdown .dropdown")
    //           [__index].querySelector(".list-info").style.overflow = "hidden";
    //       } else {
    //         document
    //           .querySelectorAll(".list-dropdown .dropdown")
    //           [__index].querySelector(".list-info").style.overflow = "hidden";
    //         if (
    //           document
    //             .querySelectorAll(".list-dropdown .dropdown")
    //             [index].classList.contains("show")
    //         )
    //           setTimeout(() => {
    //             document
    //               .querySelectorAll(".list-dropdown .dropdown")
    //               [__index].querySelector(".list-info").style.overflow =
    //               "visible";
    //           }, 500);
    //       }
    //     });

    //     console.log(index);
    //     toggleHeight(
    //       document.querySelectorAll(".list-dropdown .dropdown .list-info")[
    //         index
    //       ],
    //       document
    //         .querySelectorAll(".list-dropdown .dropdown")
    //         [index].classList.contains("show")
    //     );
    //   },
    // },
    {
      parent: ".tab-category",
      classClick: "button",
      classTarget: "button",
      classAdd: "active",
      classDelete: "",
      isRadio: true,
      isClickOtherRemoveClass: false,

      onClick: () => {
        isTabAutoActiveAble = false;
        console.log({ isTabAutoActiveAble: isTabAutoActiveAble });
        if (timeOutIsTabAutoActiveAble != undefined) {
          clearTimeout(timeOutIsTabAutoActiveAble);
        }
        timeOutIsTabAutoActiveAble = setTimeout(() => {
          isTabAutoActiveAble = true;
          console.log({ isTabAutoActiveAble: isTabAutoActiveAble });
        }, 1000);
      },
    },
    // {
    //   parent: ".howtouse",
    //   classClick: ".dropdown-howtouse",
    //   classTarget: ".howtouse >.list",
    //   classAdd: "show",
    //   classDelete: "",
    //   isRadio: false,
    //   isClickOtherRemoveClass: false,
    //   onClick: (index) => {
    //     if (
    //       document.querySelectorAll(".howtouse >.list >.list-wrap")[index].style
    //         .height != ""
    //     ) {
    //       console.log("test");
    //       toggleHeight(
    //         document.querySelectorAll(".howtouse >.list >.list-wrap")[index],
    //         document
    //           .querySelectorAll(".howtouse >.list")
    //           [index].classList.contains("show")
    //       );
    //     }
    //   },
    // },
    // {
    //   parent: ".inquiry-list-wrap ",
    //   classClick: ".inquiry .txt-02",
    //   classTarget: ".inquiry",
    //   classAdd: "show",
    //   classDelete: "",
    //   isRadio: false,
    //   isClickOtherRemoveClass: false,
    // },
    // {
    //   parent: ".section",
    //   classClick: ".btn-more",
    //   classTarget: ".detail-info-img",
    //   classAdd: "expanded",
    //   classDelete: "",
    //   isRadio: false,
    //   isClickOtherRemoveClass: false,
    //   onClick: (index) => {
    //     if (
    //       document.querySelectorAll(".detail-info-img .area-img")[index].style
    //         .height != ""
    //     ) {
    //       console.log("toggle");
    //       toggleHeight(
    //         document.querySelectorAll(".detail-info-img .area-img")[index],
    //         document
    //           .querySelector(".detail-info-img")
    //           .classList.contains("expanded"),
    //         590
    //       );
    //     }

    //     if (
    //       document
    //         .querySelector(".detail-info-img")
    //         .classList.contains("expanded")
    //     ) {
    //       document.querySelector(".btn-more").innerHTML =
    //         "<span>상품정보 접기</span><i></i>";

    //       document.querySelectorAll(".bg-gradient-more")[0].style.position =
    //         "relative";
    //     } else {
    //       document.querySelector(".btn-more").innerHTML =
    //         "<span>상품정보 더보기</span><i></i>";
    //       document.querySelectorAll(".bg-gradient-more")[0].style.position =
    //         "absolute";
    //       document.querySelectorAll(".bg-gradient-more")[0].style.bottom = 0;
    //     }
    //   },
    // },
    // {
    //   parent: ".section",
    //   classClick: ".btn-more",
    //   classTarget: ".detail-info-list",
    //   classAdd: "expanded",
    //   classDelete: "",
    //   isRadio: false,
    //   isClickOtherRemoveClass: false,
    //   onClick: (index) => {
    //     const areaList = document.querySelectorAll(
    //       ".detail-info-list .area-list"
    //     );
    //     console.log(areaList)
    //     // areaList[index].style.height = getComputedStyle(areaList[index]).height
    //     // 상품상세 더보기 내부 드롭다운 닫기
    //     let array = document.querySelectorAll(".btn-txt-check");
    //     array.forEach((item) => {
    //       console.log(item)
    //       item.classList.remove("show");
    //       item.parentNode.querySelector('.txt-check-wrap').style.height = 0
    //     });

    //     console.log("toggle");
    //     toggleHeight(
    //       document.querySelectorAll(".detail-info-list .area-list")[index],
    //       document
    //         .querySelector(".detail-info-list")
    //         .classList.contains("expanded"),
    //       700
    //     );

    //     if (
    //       document
    //         .querySelector(".detail-info-list")
    //         .classList.contains("expanded")
    //     ) {
    //       document.querySelector(".btn-more").innerHTML =
    //         "<span>상품정보 접기</span><i></i>";

    //       document.querySelectorAll(".bg-gradient-more")[0].style.position =
    //         "absolute";
    //     } else {
    //       document.querySelector(".btn-more").innerHTML =
    //         "<span>상품정보 더보기</span><i></i>";
    //       document.querySelectorAll(".bg-gradient-more")[0].style.position =
    //         "relative";
    //     }

    //   },
    // },
    {
      parent: ".area-list",
      classClick: ".btn-txt-check",
      classTarget: ".btn-txt-check",
      classAdd: "show",
      classDelete: "",
      isRadio: false,
      isClickOtherRemoveClass: false,
      onClick: (index) => {
        if (
          document.querySelectorAll(".area-list .txt-check-wrap")[index].style
            .height != ""
        ) {
          console.log(index);
          console.log(document.querySelector(".txt-check-wrap"));
          console.log(
            document
              .querySelectorAll(".area-list .txt-check")
              [index].classList.contains("show")
          );
          toggleHeight(
            document.querySelectorAll(".area-list .txt-check-wrap")[index],
            document
              .querySelectorAll(".area-list .btn-txt-check")
              [index].classList.contains("show")
          );
        }
      },
    },
    // {
    //   parent: ".group-btn",
    //   classClick: ".btn-gift",
    //   classTarget: ".tooltip",
    //   classAdd: "show",
    //   classDelete: "",
    //   isRadio: false,
    //   isClickOtherRemoveClass: true,
    //   onClick: () => {
    //     //document.querySelector(".tooltip").style.top="-18px"
    //   },
    //   onChange: () => {
    //     if (document.querySelector(".tooltip").classList.contains("show")) {
    //       document.querySelector(".tooltip").style.transitionProperty =
    //         "opacity";
    //     } else {
    //       document.querySelector(".tooltip").style.transitionProperty = "none";
    //     }
    //   },
    // },
    {
      parent: ".group-btn",
      classClick: ".btn-like",
      classTarget: ".btn-like",
      classAdd: "selected",
      classDelete: "",
      isRadio: false,
      isClickOtherRemoveClass: false,
    },
    {
      parent: ".list-info",
      classClick: ".btn-txt-more-underline",
      classTarget: ".tooltip-info",
      classAdd: "show",
      classDelete: "",
      isRadio: false,
      isClickOtherRemoveClass: true,
      isNotMe: true,
    },
    {
      parent: ".PRD-MO-6-PG-002-1",
      classClick: ".coupon-download .btn-download ",
      classTarget: ".popup-wrap",
      classAdd: "show",
      classDelete: "",
      isRadio: false,
      isClickOtherRemoveClass: true,
    },
    {
      parent: ".PRD-MO-6-PG-002-1",
      classClick: "button",
      classTarget: ".popup-wrap",
      classAdd: "",
      classDelete: "show",
      isRadio: false,
      isClickOtherRemoveClass: true,
    },
    {
      parent: ".tab-swipe-01",
      classClick: ".btn-med",
      classTarget: ".btn-med",
      classAdd: "active",
      classDelete: "",
      isRadio: true,
      isClickOtherRemoveClass: false,
    },
    {
      parent: ".main-detail .list-dropdown ",
      classClick: ".btn-dropdown .txt-title i",
      classTarget: ".tooltip-info",
      classAdd: "show",
      classDelete: "",
      isRadio: false,
      isClickOtherRemoveClass: true,
    },
    {
      parent: "main",
      classClick: ".inquiry-list-wrap .btn-txt-icon",
      classTarget: ".popup-wrap.type-1",
      classAdd: "show",
      classDelete: "",
      isRadio: false,
      isClickOtherRemoveClass: false,
      onClick: () => {
        document.body.style.overflow = "hidden";
        console.log('test : ', document.body.style.overflow);
      }
    },
    {
      parent: "main",
      classClick: ".btn .btn-txt-delete",
      classTarget: ".popup-wrap.type-2",
      classAdd: "show",
      classDelete: "",
      isRadio: false,
      isClickOtherRemoveClass: false,
    },
    {
      parent: "main",
      classClick: ".popup-wrap.type-1 .btn-sub-task-48px.bg-black",
      classTarget: ".popup-wrap",
      classAdd: "",
      classDelete: "show",
      isRadio: false,
      isClickOtherRemoveClass: false,
      onClick: () => {
        document.body.style.overflow = "auto";
      }
    },
    {
      parent: "main",
      classClick: ".popup-wrap .btn-sub-task-48px.bg-gray",
      classTarget: ".popup-wrap",
      classAdd: "",
      classDelete: "show",
      isRadio: false,
      isClickOtherRemoveClass: false,
      onClick: () => {
        document.body.style.overflow = "auto";
      }
    },
    // {
    //   parent: "main",
    //   classClick: ".popup-wrap.type-2 .btn-sub-task-48px.bg-black",
    //   classTarget: ".popup-wrap.type-2",
    //   classAdd: "",
    //   classDelete: "show",
    //   isRadio: false,
    //   isClickOtherRemoveClass: false,
    //   onClick(index) {
    //     const inquiries = document.querySelectorAll(".list .inquiry");

    //     const firstInquiry = inquiries[0];
    //     const lastInquiry = inquiries[inquiries.length - 1];
    //     const cloneInquiry = lastInquiry.cloneNode(true);
    //     inquiries[0].parentNode.removeChild(firstInquiry);
    //     inquiries[inquiries.length - 1].parentNode.appendChild(cloneInquiry);
    //   },
    // },
  ];

  let __iMax = __arrayStruct.length;
  for (let __i = 0; __i < __iMax; __i++) {
    var __struct = __arrayStruct[__i];

    const __parent = __struct.parent;
    const __classClick = __struct.classClick;
    const __classTarget = __struct.classTarget;
    const __classAdd = __struct.classAdd;
    const __classDelete = __struct.classDelete;
    const __isRadio = __struct.isRadio;
    const __isClickOtherRemoveClass = __struct.isClickOtherRemoveClass;
    const __onClick = __struct.onClick;
    const __onChange = __struct.onChange;

    const parent = document.querySelector(__parent);

    // console.log(__parent);
    if (parent == null) {
      continue;
    }

    let click = parent.querySelectorAll(__classClick);
    let target = parent.querySelectorAll(__classTarget);

    setInterval(() => {
      click = parent.querySelectorAll(__classClick);
      target = parent.querySelectorAll(__classTarget);
    }, 1000);

    if (__isRadio == true) {
      click.forEach((btn) => {
        btn.addEventListener("click", () => {
          target.forEach((btn) => {
            const info = btn;
            if (info == null) {
              return;
            }
            info.classList.remove(__classAdd);
          });
        });
      });
    }

    click.forEach((btn, index) => {
      const __target = target[index];
      // console.log([index,__target]);

      if (__target == null) {
        return;
      }

      // 피드백 반영 중 이벤트 꼬이는 부분 여기서 제외
      if (
        __classClick === ".btn-dropdown" &&
        document.title === "PRD-MO-6-PG-001"
      ) {
        return;
      }
      if (
        __classClick === ".btn-dropdown" &&
        document.title === "PRD-MO-6-PG-002"
      ) {
        return;
      }
      if (
        __classClick === ".btn-dropdown" &&
        document.title === "PRD-MO-6-PG-007"
      ) {
        return;
      }

      let isClick = true;
      if (__isClickOtherRemoveClass == true) {
        document.addEventListener("click", function (event) {
          if (isClick == true) {
            if (btn.contains(event.target) == false) {
              if (__target.contains(event.target) == false) {
                if (__target.classList.contains(__classAdd) == true) {
                  //if(event.target==__target)
                  if (
                    event.target.classList.toString() ==
                    document.querySelector(".btn-checkbox").classList.toString()
                  ) {
                    __target.classList.add(__classAdd);
                  } else {
                    // {
                    __target.classList.remove(__classAdd);
                    // }
                  }
                  try {
                    __onChange();
                  } catch (e) {
                    console.log(e);
                  }
                  console.log("notme");
                  console.log([
                    event.target.classList.toString(),
                    document
                      .querySelector(".btn-checkbox")
                      .classList.toString(),
                  ]);
                }
              }
            }
          }
        });
      }

      btn.addEventListener("click", () => {
        if (__classDelete != "") {
          if (__target.classList.contains(__classDelete) == true) {
            __target.classList.remove(__classDelete);
          }
        }
        if (__classAdd != "") {
          if (__target.classList.contains(__classAdd) == true) {
            __target.classList.remove(__classAdd);
          } else {
            __target.classList.add(__classAdd);
          }
        }
        console.log('target : ',__classTarget);
        console.log('click : ',__classClick);
        console.log('click event',__onClick);
        if (__onClick != undefined) {
          __onClick(index);
        }
        if (__onChange != undefined) {
          __onChange();
        }
      });

      // console.log(__classClick);
    });
  }
}

// 모든 버튼을 선택합니다.
const buttons = document.querySelectorAll(".tab-category >button");

// 각 버튼에 대해 반복하여 이벤트 리스너를 추가합니다.
buttons.forEach(function (button) {
  button.addEventListener("click", () => {
    scrollToTarget(event, button);
  });
});

//*
function scrollToTarget(event, button) {
  event.preventDefault();

  const header = document.querySelector(".header");
  const anchor = button.querySelector(".anchor-link");
  const target = document.querySelector(anchor.getAttribute("href"));

  let marginTop = parseInt(window.getComputedStyle(target).marginTop, 10);
  marginTop = Math.min(marginTop, 24);

  const position =
    target.offsetTop - button.offsetHeight - header.offsetHeight - marginTop;

  console.log([
    target.offsetTop,
    button.offsetTop,
    button.offsetHeight,
    header.offsetHeight - marginTop,
    position,
  ]);

  window.scrollTo({
    top: position,
    behavior: "smooth",
  });
}
//*

(function () {
  //listDropdown()
  clickEvent();
})();

let n = 0;
function toast(dur) {
  const toast = document.querySelectorAll(".popup-toast")[n];
  const toastContent = toast.querySelector("p");

  gsap.killTweensOf([toast, toastContent], "all");

  gsap.set(toast, { opacity: 0 });
  gsap.set(toastContent, { opacity: 0 });

  let myDate = new Date();

  let text = "";

  if (n < 2) {
    //toast.innerHTML=text+"<br>"+myDate.getFullYear()+"."+(1+myDate.getMonth()<10?"0":"")+(1+myDate.getMonth()).toString()+"."+(myDate.getDate()<10?"0":"")+myDate.getDate().toString()+".";
  }

  const sv = 0.95;

  gsap.set(toast, { display: "flex" });
  gsap.from(toast, { scale: sv, duration: 0.35, ease: "power1.out" });
  gsap.to(toast, {
    opacity: 1,
    duration: 0.3,
    ease: "power1.out",
    onComplete: () => {
      gsap.delayedCall(dur ?? 2, () => {
        gsap.to(toast, {
          opacity: 0,
          duration: 0.2,
          ease: "power1.out",
          onComplete: () => {
            gsap.set(toast, { display: "none" });
          },
        });
      });
    },
  });

  gsap.set(toastContent, { display: "block" });
  gsap.from(toastContent, { scale: sv, duration: 0.35, ease: "power1.out" });
  gsap.to(toastContent, {
    opacity: 1,
    duration: 0.3,
    ease: "power1.out",
    onComplete: () => {
      gsap.delayedCall(dur ?? 2, () => {
        gsap.to(toastContent, {
          opacity: 0,
          duration: 0.2,
          ease: "power1.out",
          onComplete: () => {
            gsap.set(toastContent, { display: "none" });
          },
        });
      });
    },
  });
}
function resetAlert(__n) {
  n = __n;
  // deActiveResend();
  gsap.delayedCall(0.5, (n) => {
    toast(n);
  });
}

function toggleHeight(element, _bool, initheight = 0) {
  //arrayElement.forEach(element => {

  let height = 0;
  let heightPrevious = height;

  setInterval(() => {
    heightPrevious = height;
    height = 0;

    const styles1 = window.getComputedStyle(element);
    const gap = parseFloat(styles1.gap);
    element.childNodes.forEach((child) => {
      if (child.offsetHeight != undefined) {
        const styles = window.getComputedStyle(child);

        const marginTop = parseFloat(styles.marginTop);
        const _height = parseFloat(styles.height);
        const marginBottom = parseFloat(styles.marginBottom);

        let totalHeight = _height;

        if (!isNaN(marginTop)) {
          totalHeight += marginTop;
        }
        if (!isNaN(marginBottom)) {
          totalHeight += marginBottom;
        }
        if (!isNaN(gap)) {
          totalHeight += gap;
        }

        height += totalHeight;
      }
    });
    // if (Math.round(height) != 0)
    if (Math.round(heightPrevious) != Math.round(height)) {
      console.log([_bool, "ddddddd", heightPrevious, height]);
      if (_bool == true) {
        element.style.height = height + "px";
        return;
      }
      console.log("min height = ", initheight);
      element.style.height = initheight + "px";
      return;
    }
  }, 125);
  // if (_bool == false) {
  //   element.style.height = initheight + "px";
  // }

  //});
}

function scrollTabbar(element) {
  var tab = document.querySelector(".tab-swipe-01");
  var rect = element.getBoundingClientRect();
  var center = rect.left + rect.width / 2;
  var half = window.innerWidth / 2;
  if (center <= half) {
    // tab.scrollTo(half - center);
    window.scrollTo({
      left: half - center,
      behavior: "smooth",
    });
  } else {
  }
}

const tabs = gsap.utils.toArray(".btn-med");

function transitionScroll(index, init) {
  const tab = tabs[index];
  const { width, x } = tab.getBoundingClientRect();
  let spd = 0.35;

  if (init) {
    spd = 0;
  } else {
    gsap.to(".tab-swipe-01", {
      scrollTo: { x: tab, offsetX: window.innerWidth / 2 - width / 2 },
      duration: spd,
      ease: "power2.out",
    });
  }
}

tabs.forEach(function (tab, index) {
  tab.addEventListener("click", (e) => {
    transitionScroll(index);
    // if (center <= half) {
    //   console.log(half - center);
    //   // tab.scrollTo(half - center);
    //   tab.scrollTo({
    //     left: half - center,
    //     behavior: "smooth",
    //   });
    // } else {
    // }
  });
});

function convertFitContentToPixels(element) {
  // 임시 요소 생성
  var tempElement = element.cloneNode(true);
  tempElement.style.position = "absolute";
  tempElement.style.visibility = "hidden";
  tempElement.style.width = "fit-content";

  // 임시 요소를 body에 추가하여 크기 측정
  document.body.appendChild(tempElement);
  var widthInPixels = tempElement.offsetWidth;

  // 임시 요소 제거
  document.body.removeChild(tempElement);

  return widthInPixels;
}

// Event handler callbacks

// 최대 할인가, 배송정보 드롭다운
function onClickDropdown(e, index) {
  console.log("begin onClickDropdown", e.target);
  const dropdown = document.querySelectorAll(".dropdown")[index];
  dropdown.classList.toggle("show");

  toggleHeight(
    document.querySelectorAll(".list-dropdown .dropdown .list-info")[index],
    document
      .querySelectorAll(".list-dropdown .dropdown")
      [index].classList.contains("show")
  );
}

// 상품고시 드롭다운
function onClickNotiDropdown(el, index) {
  console.log("begin onClickNotiDropdown");
  // 기존 드롭다운 접기
  const prevDropdown = document.querySelector(
    ".btn-dropdown-notification.show"
  );
  console.log(prevDropdown);
  if (
    prevDropdown !== null &&
    Array.from(prevDropdown?.childNodes).includes(el) === false
  ) {
    console.log(prevDropdown.childNodes);
    toggleHeight(document.querySelector(".show .list-info"), false);
    prevDropdown.classList.remove("show");
  }
  const dropdown = document.querySelectorAll(".btn-dropdown-notification")[
    index
  ];
  dropdown.classList.toggle("show");

  toggleHeight(
    document.querySelectorAll(".btn-dropdown-notification .list-info")[index],
    document
      .querySelectorAll(".btn-dropdown-notification")
      [index].classList.contains("show")
  );
}

// 상품문의 드롭다운
function onClickInquiryDropdown(el, index) {
  console.log("begin onClickInquiryDropdown");
  const clickedElements = document.querySelectorAll(
    ".inquiry-list-wrap .inquiry"
  );
  clickedElements.forEach((element) => {
    if (element.querySelector(".txt-02") === el) {
      element.classList.toggle("show");
      // toggleHeight(
      //   el.parentNode.querySelector('.txt-info'),
      //   el.classList.contains("show")
      // );
    } else {
      element.classList.remove("show");
    }
  });
}

// 내 상품문의 삭제
function onClickDeleteInquiry(el) {
  console.log("begin onClickDeleteInquiry ", el);
  const popup = document.querySelector(".popup-wrap.type-2");
  popup.classList.remove("show");

  const inquiries = document.querySelectorAll(".list .inquiry");

  const firstInquiry = inquiries[0];
  const lastInquiry = inquiries[inquiries.length - 1];
  const cloneInquiry = lastInquiry.cloneNode(true);
  inquiries[0].parentNode.removeChild(firstInquiry);
  inquiries[inquiries.length - 1].parentNode.appendChild(cloneInquiry);
  document.body.style.overflow = "auto";
}

// 사용방법 드롭다운
function onClickHowtouseDropdown(index) {
  console.log("begin onClickHowtouseDropdown ", index);
  const dropdown = document.querySelectorAll(".howtouse >.list");
  dropdown[index].classList.toggle("show");
  if (
    document.querySelectorAll(".howtouse >.list >.list-wrap")[index].style
      .height !== ""
  ) {
    toggleHeight(
      document.querySelectorAll(".howtouse >.list >.list-wrap")[index],
      document
        .querySelectorAll(".howtouse >.list")
        [index].classList.contains("show")
    );
  }
}

// 최대할인가 - 쿠폰받기
function onClickGetCoupon(e, el) {
  e.stopPropagation();
  console.log("begin onClickGetCoupon");
  resetAlert(0);
  el.classList.toggle("active");
  el.innerHTML = "보유중";
}

// 선물하기 버튼
function onClickGiftButton() {
  const tooltip = document.querySelector(".group-btn .btn-gift .tooltip");
  tooltip.classList.toggle("show");
  if (tooltip.classList.contains("show")) {
    tooltip.style.transitionProperty = "opacity";
  } else {
    tooltip.style.transitionProperty = "none";
  }
}

// 상품상세 더보기
function onClickDetailInfo(areaImgHeight) {
  console.log("begin onClickDetailInfo");
  const detailInfo = document.querySelector(".detail-info-img");
  const areaImg = detailInfo.querySelector(".area-img");

  detailInfo.classList.toggle("expanded");
  const isExpanded = detailInfo.classList.contains("expanded");
  areaImg.style.height = getComputedStyle(areaImg).height;
  toggleHeight(
    areaImg,
    isExpanded,
    areaImgHeight
  );

  const btxText = isExpanded ? "접기" : "더보기";
  document.querySelector(
    ".btn-more"
  ).innerHTML = `<span>상품정보 ${btxText}</span><i></i>`;
}

// 내부에 드롭다운이 있는 상품상세 더보기
function onClickDetailInfoList(areaListHeight) {
  console.log("begin onClickDetailInfoList");
  const detailInfoList = document.querySelector(".detail-info-list");
  const areaList = detailInfoList.querySelector(".area-list");
  detailInfoList.classList.toggle("expanded");
  const isExpanded = detailInfoList.classList.contains("expanded");
  areaList.style.height = getComputedStyle(areaList).height;
  // 상품상세 더보기 내부 드롭다운 닫기
  document.querySelectorAll(".btn-txt-check").forEach((item) => {
    item.classList.remove("show");
    item.parentNode.querySelector(".txt-check-wrap").style.height = 0;
  });

  toggleHeight(areaList, isExpanded, areaListHeight+110);

  const btxText = isExpanded ? "접기" : "더보기";
  document.querySelector(
    ".btn-more"
  ).innerHTML = `<span>상품정보 ${btxText}</span><i></i>`;
}

// Event Listeners

// 최대 할인가, 배송정보 드롭다운
function addOnClickDropdown() {
  document
    .querySelectorAll(".list-dropdown .btn-dropdown")
    .forEach(function (el, index) {
      el.addEventListener("click", (e) => onClickDropdown(e, index));
    });
}

// 상품고시 드롭다운
function addOnClickNotiDropdown() {
  document
    .querySelectorAll(".list-info .btn-dropdown-notification .btn-dropdown")
    .forEach(function (el, index) {
      if (!el.classList.contains("it-ban")) {
        el.addEventListener("click", () => onClickNotiDropdown(el, index));
      }
    });
}

// 상품문의 드롭다운
function addOnClickInquiryDropdown() {
  document.querySelectorAll(".inquiry .txt-02").forEach(function (el, index) {
    el.addEventListener("click", () => onClickInquiryDropdown(el, index));
  });
}

// 내 상품문의 삭제
function addOnClickDeleteInquiry() {
  document
    .querySelectorAll(".popup-wrap.type-2 .btn-sub-task-48px.bg-black")
    .forEach(function (el) {
      el.addEventListener("click", () => onClickDeleteInquiry(el));
    });
}

// 사용방법 드롭다운
function addOnClickHowtouseDropdown() {
  const dropdowns = document.querySelectorAll(".howtouse .dropdown-howtouse");
  dropdowns.forEach(function (el, index) {
    el.addEventListener("click", () => onClickHowtouseDropdown(index));
  });

  // 페이지 진입 시 사용방법이 한개일 때 드롭다운 열려있는 상태
  if (dropdowns.length === 1) {
    onClickHowtouseDropdown(0);
  }
}
// 최대할인가 - 쿠폰받기
function addOnClickGetCoupon() {
  document.querySelectorAll(".btn-check-medium .active").forEach(function (el) {
    el.addEventListener("click", (e) => onClickGetCoupon(e, el));
  });
}

// 선물하기 버튼
function addOnClickGiftButton() {
  document
    .querySelector(".group-btn .btn-gift")
    .addEventListener("click", (e) => onClickGiftButton());
}

// 상품상세 더보기
function addOnClickDetailInfo() {
  const areaImg = document.querySelector(".detail-info-img .area-img");
  // const areaImgHeight = getComputedStyle(areaImg).height;
  const areaImgHeight = '700px'
  areaImg.style.height = areaImgHeight;
  document
    .querySelector(".section .btn-more")
    .addEventListener("click", () => onClickDetailInfo(parseInt(areaImgHeight, 10)));
}

// 내부에 드롭다운이 있는 상품상세 더보기
function addOnClickDetailInfoList() {
  console.log('begin addOnClickDetailInfoList')
  const areaList = document.querySelector(".detail-info-list .area-list");
  // const areaListHeight = getComputedStyle(areaList).height;
  const areaListHeight = '700px'
  areaList.style.height = areaListHeight;
  console.log(areaList);
  document
    .querySelector(".section .btn-more")
    .addEventListener("click", () =>
      onClickDetailInfoList(parseInt(areaListHeight, 10))
    );
}

// 수정하기 페이지로 이동
function addOnClickBtnTxtModify() {
  document
    .querySelector(".btn .btn-txt-modify")
    .addEventListener("click", () => {
      location.href = "CMP-MO-6-PG-003.html";
    });
}
function appendListener() {
  console.log("begin appendListener ", document.title);
  switch (document.title) {
    case "PRD-MO-6-PG-001":
      addOnClickDropdown();
      addOnClickNotiDropdown();
      addOnClickInquiryDropdown();
      addOnClickDeleteInquiry();
      addOnClickHowtouseDropdown();
      addOnClickGetCoupon();
      addOnClickGiftButton();
      addOnClickDetailInfo();
      addOnClickBtnTxtModify();

      onClickGiftButton(); // 로드 시 이벤트 작동 필요
      break;

    case "PRD-MO-6-PG-002":
      addOnClickDropdown();
      addOnClickNotiDropdown();
      addOnClickInquiryDropdown();
      addOnClickDeleteInquiry();
      addOnClickHowtouseDropdown();
      addOnClickGetCoupon();
      addOnClickGiftButton();
      addOnClickDetailInfo();
      addOnClickBtnTxtModify();

      onClickGiftButton(); // 로드 시 이벤트 작동 필요
      break;
    case "PRD-MO-6-PG-002-1":
      break;

    case "PRD-MO-6-PG-003":
      addOnClickDropdown();
      addOnClickNotiDropdown();
      addOnClickInquiryDropdown();
      addOnClickDeleteInquiry();
      addOnClickHowtouseDropdown();
      addOnClickGetCoupon();
      addOnClickGiftButton();
      addOnClickDetailInfo();
      addOnClickBtnTxtModify();

      onClickGiftButton(); // 로드 시 이벤트 작동 필요
      break;

    case "PRD-MO-6-PG-004":
      addOnClickDropdown();
      addOnClickNotiDropdown();
      addOnClickInquiryDropdown();
      addOnClickDeleteInquiry();
      addOnClickHowtouseDropdown();
      addOnClickGetCoupon();
      addOnClickGiftButton();
      addOnClickDetailInfo();
      addOnClickBtnTxtModify();

      onClickGiftButton(); // 로드 시 이벤트 작동 필요
      break;

    case "PRD-MO-6-PG-005":
      addOnClickDropdown();
      addOnClickNotiDropdown();
      addOnClickInquiryDropdown();
      addOnClickDeleteInquiry();
      addOnClickHowtouseDropdown();
      addOnClickGetCoupon();
      addOnClickGiftButton();
      addOnClickDetailInfo();
      addOnClickBtnTxtModify();

      onClickGiftButton(); // 로드 시 이벤트 작동 필요
      break;

    case "PRD-MO-6-PG-006":
      addOnClickDropdown();
      addOnClickNotiDropdown();
      addOnClickInquiryDropdown();
      addOnClickDeleteInquiry();
      addOnClickHowtouseDropdown();
      addOnClickGetCoupon();
      addOnClickGiftButton();
      addOnClickDetailInfo();
      addOnClickBtnTxtModify();

      onClickGiftButton(); // 로드 시 이벤트 작동 필요
      break;

    case "PRD-MO-6-PG-007":
      addOnClickDropdown();
      addOnClickNotiDropdown();
      addOnClickInquiryDropdown();
      addOnClickDeleteInquiry();
      addOnClickHowtouseDropdown();
      addOnClickGetCoupon();
      addOnClickGiftButton();
      addOnClickBtnTxtModify();

      onClickGiftButton(); // 로드 시 이벤트 작동 필요
      break;

    case "PRD-MO-6-PG-007-1":
      addOnClickNotiDropdown();
      addOnClickHowtouseDropdown();
      break;

    case "PRD-MO-6-PG-008":
      addOnClickDropdown();
      addOnClickNotiDropdown();
      addOnClickInquiryDropdown();
      addOnClickDeleteInquiry();
      addOnClickHowtouseDropdown();
      addOnClickGetCoupon();
      addOnClickGiftButton();
      addOnClickDetailInfoList();
      addOnClickBtnTxtModify();

      onClickGiftButton(); // 로드 시 이벤트 작동 필요
      break;

    case "PRD-MO-6-PG-009":
      addOnClickDropdown();
      addOnClickNotiDropdown();
      addOnClickInquiryDropdown();
      addOnClickDeleteInquiry();
      addOnClickHowtouseDropdown();
      addOnClickGetCoupon();
      addOnClickGiftButton();
      addOnClickDetailInfoList();
      addOnClickBtnTxtModify();

      onClickGiftButton(); // 로드 시 이벤트 작동 필요
      break;

    case "PRD-MO-6-PG-010":
      addOnClickDropdown();
      addOnClickNotiDropdown();
      addOnClickInquiryDropdown();
      addOnClickDeleteInquiry();
      addOnClickHowtouseDropdown();
      addOnClickGetCoupon();
      addOnClickGiftButton();
      addOnClickDetailInfoList();
      addOnClickBtnTxtModify();

      onClickGiftButton(); // 로드 시 이벤트 작동 필요
      break;

    default:
      break;
  }
}

window.addEventListener("load", () => {
  console.log("begin onload");
  appendListener();
});
