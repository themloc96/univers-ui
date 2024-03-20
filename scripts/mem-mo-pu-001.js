function init() {
  const items = document.querySelectorAll(".btn-link");
  items.forEach((item) => {
    item.addEventListener("click", () => {
      items.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });
      item.classList.add("active");
    });
  });
}

init();
