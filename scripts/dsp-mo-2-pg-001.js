
var maxPage = 10;       // 페이지 수 
var nextPageTime = 50;    // 페이지 넘어가는 시간( * 10ms)

var isSwiper = true;      // 스와이퍼 타이머 동작 여부 
var activeIndex = 0;     // 스와이퍼 페이지





var playSwiper;      // interval 
var present = 0;     // 현재 시간 계산   (* 10 ms   )



var swiper = new Swiper(".swiper-content", {

    autoHeight: true,
    threshold : 60,
    loop:true,

	navigation : { 
		nextEl : '.touchRight', 
        prevEl : '.touchLeft', 
	},
    on: {
        slideChange: function (sw) {
            try{

                present = 0;
                document.querySelector('.bar .active span').style.cssText = "transform : translateX("+( - 100 + (present * 2))+"%)";
                isSwiper = false;
                setTimeout(()=>{
                    isSwiper = true;
                },200)

                activeIndex = sw.realIndex;



                document.querySelector('.top .txt-num').innerText = (activeIndex+1) + " / "+maxPage;
                document.querySelectorAll(".bar div").forEach(function(el){
                    el.classList.remove("active");
                })
                var index = 0;
                document.querySelectorAll(".bar div").forEach(function(el){

                    if(activeIndex == index){
                        el.classList.add("active");
                    }
                    index++;
                })
    
            }catch(e){
                
            }
        }
    }
});




window.onload = function(){

    playSwiper = setInterval(function() {

        if(isSwiper){


            if(activeIndex >= 0){


                if(activeIndex < maxPage){
    
    
    
    
                    if(activeIndex < maxPage - 1){
                        if(present > nextPageTime){        //여기 수정
                            present = 0;
                
                            
                            swiper.slideTo(++activeIndex);
                            swiper.update();
                
                            document.querySelector('.top .txt-num').innerText = (activeIndex+1) + " / 10";
    
                            document.querySelectorAll(".bar div").forEach(function(el){
                                el.classList.remove("active");
                            })
    
                            var index = 0;
                            document.querySelectorAll(".bar div").forEach(function(el){
    
                                if(activeIndex == index){
                                    el.classList.add("active");
                                }
                                index++;
                            })
    
                        }
                    }
                    if(present <= nextPageTime){
                        document.querySelector('.bar .active span').style.cssText = "transform : translateX("+( - 100 + (present * 2))+"%)";
                    }else if(present >= nextPageTime + 2){
                        present = 0;
                        activeIndex = 0;
                        document.querySelector('.touchRight').click();
                        swiper.update();
                    }
                }
    
    
            }
            present++;
        }


    }, 100);











    //클릭하는 동안 타이머 멈춤

    try{
        document.querySelectorAll(".list-product").forEach(function(el){
            el.addEventListener("mousedown", mouseStart); 
            el.addEventListener("mouseup", mouseEnd); 
            el.addEventListener("touchstart", touchStart); 
            el.addEventListener("touchend", touchEnd); 
        })

        function mouseStart() {
            isSwiper = false;
        };
        function mouseEnd() {
            isSwiper = true;		
        };
    
        function touchStart() {
            isSwiper = false;
        };
        function touchEnd() {
            isSwiper = true;     			
        };
    }catch(e){
    }
 

    document.querySelector(".btn-main-task").addEventListener("click",()=>{
        resetAlert();
    })
}







var isFirstBtn = true;

function resetAlert() {

    if(isFirstBtn){
        isFirstBtn = false;
        document.querySelector(".btn-main-task div").innerText = "리워드 보러 가기"
    
        // deActiveResend();
        gsap.delayedCall(0.5, () => {
          toast();
        });
    }

};



