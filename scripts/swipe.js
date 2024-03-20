const slider = document.querySelector(".package"),
  slides = Array.from(document.querySelectorAll(".swiper-wrapper"));
const wrapper = document.querySelector(".package-list");
const pageIndicator = document.querySelector(".pageindicator");
  

let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID = 0,
  currentIndex = 0


for (let i = 0; i < slides.length; i++) {
  const indicator = document.createElement("div");
  indicator.classList.add("indicator");
  if (i === currentIndex) {
    indicator.classList.add("selected");
  } else {
    indicator.classList.add("unselected");
  }
  pageIndicator.appendChild(indicator);
}

const indicators = pageIndicator.querySelectorAll(".indicator");

slides.forEach((slide, index) => {
  const slideImage = slide.querySelector('img')
  slideImage.addEventListener('dragstart', (e) => e.preventDefault())

  // Touch events
  slide.addEventListener('touchstart', touchStart(index))
  slide.addEventListener('touchend', touchEnd)
  slide.addEventListener('touchmove', touchMove)

  // Mouse events
  slide.addEventListener('mousedown', touchStart(index))
  slide.addEventListener('mouseup', touchEnd)
  slide.addEventListener('mouseleave', touchEnd)
  slide.addEventListener('mousemove', touchMove)
})


// Disable context menu
wrapper.oncontextmenu = function (event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
};

function touchStart(index) {
  return function (event) {
	currentIndex = index
	startPos = getPositionX(event)
	isDragging = true

	animationID = requestAnimationFrame(animation)
	slider.classList.add('grabbing')
  }
}

function touchEnd() {
  isDragging = false
  cancelAnimationFrame(animationID)

	const movedBy = currentTranslate - prevTranslate
  if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1

  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1

  setPositionByIndex()

  slider.classList.remove('grabbing')
}

function touchMove(event) {
  if (isDragging) {
		const currentPosition = getPositionX(event)
		currentTranslate = prevTranslate + currentPosition - startPos
  }
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

function animation() {
  setSliderPosition()
  if (isDragging) requestAnimationFrame(animation)
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`
}

function setPositionByIndex() {
	setActiveIndicator();
    currentTranslate = currentIndex * -wrapper.offsetWidth;
    prevTranslate = currentTranslate;
}

function setActiveIndicator() {
  indicators.forEach((indicator, index) => {
    if (index === currentIndex) {
      indicator.classList.remove("unselected");
      indicator.classList.add("selected");
    } else {
      indicator.classList.remove("selected");
      indicator.classList.add("unselected");
    }
  });
}
