window.onload = function () {
  console.log("onload 001(1)");

  document.querySelectorAll(".tooltip-info").forEach(function (el) {
    el.addEventListener("click", (e) => {
      // console.log("ddd");

      e.stopPropagation();
    });
  });
};

function accordionManual(e) {}

function accordionManual2(e) {
  //아코디언 상태
  var elel = e.parentNode
    .querySelector(".list-info")
    .style.marginTop.replace(/[^0-9]/g, "");
  //console.log(elHeight)
  //console.log(elel)
  document
    .querySelectorAll(".btn-dropdown-notification .list-info")
    .forEach(function (innerEl, index) {
      //console.log("idx : " + index)
      if (innerEl.style.marginTop == "0px") {
        var dummy = innerEl.clientHeight;
        //console.log("margin-top : " + (-1 * dummy) + "px")
        innerEl.style.cssText = "transition : none";
        //innerEl.style.cssText = "margin-top : " + (-1 * dummy) + "px"
        //console.log(innerEl);
        gsap.to(innerEl, { marginTop: -1 * dummy, duration: 1 }, 0);
      }
    });
  // console.log(e.target.parentNode.querySelector(".list-info"))
  // console.log(elel)
  if (elel > 0) {
    e.parentNode.querySelector(".list-info").style.cssText = "margin-top : 0";
    gsap.to(e.target, { marginTop: 0, duration: 1 }, 0);
  }
}
