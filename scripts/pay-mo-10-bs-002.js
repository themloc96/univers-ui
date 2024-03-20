function checked(item) {
  var checkIcon = item.querySelector("i");
  var listItems = document.querySelectorAll("ul.listOptions li");

  for (var i = 0; i < listItems.length; i++) {
    var listItem = listItems[i];
    var icon = listItem.querySelector("i");

    if (icon !== checkIcon) {
      icon.classList.remove("icon-check-active");
      icon.classList.add("icon-check-not-active");
    }
  }

  checkIcon.classList.add("icon-check-active");
  checkIcon.classList.remove("icon-check-not-active");
}

window.onload = function () {
  const liElements = document.querySelectorAll("ul.listOptions li");
  liElements.forEach(function (el) {
    el.addEventListener("click", () => checked(el));
  });
};
