function getMobileViewportHeight() {
    var windowHeight = window.innerHeight; // 브라우저의 높이
    var documentHeight = document.documentElement.clientHeight; // 문서 높이
    var bodyHeight = document.body.clientHeight; // 본문 높이
    var height = Math.max(windowHeight, documentHeight, bodyHeight); // 가장 큰 값 선택
  
    var addressBarHeight = windowHeight - height; // 주소창 높이 계산
    var mobileViewportHeight = height + addressBarHeight; // 주소창 높이를 더해 모바일 뷰포트 높이 계산
  
    return mobileViewportHeight; // 모바일 뷰포트 높이 반환
  }

window.addEventListener('load', function() {
    var actualHeight = getMobileViewportHeight();
    let main = this.document.querySelector('main');
    // this.alert(actualHeight);
    console.log('Actual height: ' + actualHeight + 'px');
    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
      // iOS 사파리 브라우저에서만 적용
      main.style.paddingBottom = '134px';
    }else{
      main.style.paddingBottom = 70 / actualHeight * 100 + "vh";
    }
});

