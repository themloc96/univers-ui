
      // 탭 버튼 클릭 이벤트 핸들러
      function handleTabButtonClick(event) {
        const tabButton = event.currentTarget;
        const containerWidth = document.querySelector(".tabs").offsetWidth;
        const tabButtonWidth = tabButton.offsetWidth;
        const tabButtonLeft = tabButton.getBoundingClientRect().left;


        let centerOffset = 0;
        if(window.innerWidth <= 520){
            centerOffset = containerWidth / 2 - tabButtonWidth / 2 - tabButtonLeft;
        }else{
            console.log("durl")
            centerOffset = containerWidth / 2 - tabButtonWidth / 2 - tabButtonLeft + ((window.innerWidth - 520) / 2);
        }


        gsap.to(".tabs", {
          scrollLeft: "-=" + centerOffset,
          duration: 0.5,
        });

        // 활성 탭 스타일 변경
        const activeButton = tabButton.parentNode.querySelector(".btn-med.active");
        activeButton.classList.remove("active");
        tabButton.classList.add("active");
      }

      // 각 탭 버튼에 클릭 이벤트 리스너 추가
      const tabButtons = document.querySelectorAll(".btn-med");
      tabButtons.forEach((tabButton) => {
        tabButton.addEventListener("click", handleTabButtonClick);
});