





//사용 안함 //scrollAnim 로 사용
//사용 안함 



// HTML 버튼 요소를 가져옵니다.
const button = document.querySelector('.btn-dd-floating');

// 버튼 클릭 시 최상단으로 스크롤되는 함수를 정의합니다.
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// 버튼에 클릭 이벤트 리스너를 추가합니다.
button.addEventListener('click', scrollToTop);