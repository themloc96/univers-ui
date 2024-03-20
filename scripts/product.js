let slideIndex = 0;

function loadMore() {
  const detailListInfo = document.querySelector(
    ".unfold.detail-info-list-fold"
  );
  const iconDropUp = document.querySelector(".unfold.btn-more");
  const lastElement =
    document.querySelectorAll(".list")[
      document.querySelectorAll(".list").length - 1
    ];

  if (detailListInfo.offsetHeight <= 700) {
    gsap.set(iconDropUp, {
      "--after-transform": "scaleY(1)",
      delay: 0.1,
      duration: 0.35,
    });
    gsap.to(iconDropUp, {
      "--after-transform": "scaleY(-1)",
      delay: 0.1,
      duration: 0.35,
    });
    gsap.set(detailListInfo, {
      height: "100%",
      delay: 0.1,
      duration: 0.35,
    });
    lastElement.style.marginBottom = "130px";
  } else {
    gsap.set(detailListInfo, {
      height: "700px",
      delay: 0.1,
      duration: 0.35,
    });
    gsap.to(iconDropUp, {
      "--after-transform": "scaleY(1)",
      delay: 0.1,
      duration: 0.35,
    });
    lastElement.style.marginBottom = 0;
  }
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("product-slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000);
}

function showNotification(className) {
  const elements = document.getElementsByClassName(className);

  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display =
      elements[i].style.display === "none" ? "flex" : "none";
  }
}

function showTxtCheck(className) {
  const elements = document.getElementsByClassName(className);
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display =
      elements[i].style.display === "none" ? "block" : "none";
  }
}

function init() {
  // const btnMore = document.querySelector(".unfold.btn-more");
  // btnMore.addEventListener("click", () => {
  //   loadMore();
  // });
  showSlides();
}

init();
