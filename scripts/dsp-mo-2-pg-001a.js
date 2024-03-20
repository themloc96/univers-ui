




window.onload = function(){



    const swiper = new Swiper('.package .package', {
        navigation : { // 네비게이션 설정
          nextEl : '.touchRight', // 다음 버튼 클래스명
        },
        pagination: {
          el: ".pageindicator",
          clickable: true,
          bulletActiveClass:'selected',
          renderBullet: function (index, className) {
            return '<div class="unselected ' + className + '"></div>';
          },
        }
      });



    document.querySelector(".type-1 .btn-main-task").addEventListener("click", ()=>{
        resetAlert(0);
        popupHide(".background-dim.type-1", ".type-1 .popup-bottom-noti");

    })
    document.querySelector(".type-1 .btn-name").addEventListener("click", ()=>{
        resetAlert(1);
        popupHide(".background-dim.type-1", ".type-1 .popup-bottom-noti");
    })

    document.querySelector(".type-2 .btn-main-task").addEventListener("click", ()=>{
        resetAlert(2);
        popupHide(".background-dim.type-2", ".type-2 .popup-bottom-info-agreement");

        setTimeout(()=>{
            var subscribe= document.querySelector('.subscribe');
            subscribe.style.cssText = "";
        },500)
    })

    document.querySelector(".type-2 .header-bottomsheet img").addEventListener("click", ()=>{
        //resetAlert(2);
        popupHide(".background-dim.type-2", ".type-2 .popup-bottom-info-agreement");

        setTimeout(()=>{
            var subscribe= document.querySelector('.subscribe');
            subscribe.style.cssText = "";
        },500)
    })


    document.querySelector(".survey .btn-survey-option").addEventListener("click", ()=>{
        document.querySelector(".survey .survey-case-1").classList.remove("show");
        document.querySelector(".surverNoGood .progess-bar").remove();
        document.querySelector(".survey .survey-case-2").classList.add("show");
        setTimeout(() => {
          document.querySelector(".survey .survey-case-2").classList.remove("show");
          document.querySelector(".survey .survey-case-3").classList.add("show");
        }, 1*1000);
    })

    document.querySelector(".survey .btn-survey-option2").addEventListener("click", ()=>{

        document.querySelector(".survey .survey-case-1").classList.remove("show");
        document.querySelector(".surverGood .progess-bar").remove();



        document.querySelectorAll(".surverGood").forEach(function(el){
          el.classList.remove("disable-stroke")
          el.classList.remove("selected")
        })

        document.querySelectorAll(".surverNoGood").forEach(function(el){
          el.classList.remove("disable-gray")
          el.classList.add("selected")
          el.classList.add("disable-stroke")
        })
        
        document.querySelector(".survey .survey-case-2").classList.add("show");
        

        setTimeout(() => {

          document.querySelectorAll(".surverGood").forEach(function(el){
            el.classList.add("disable-gray")
          })

          document.querySelector(".survey .survey-case-2").classList.remove("show");
          document.querySelector(".survey .survey-case-3").classList.add("show");
        }, 1*1000);
    })


    





    var parent= document.querySelector('.subscribe');
    parent.style.overflow = 'hidden';
    parent.style.height = '100%';
    parent.style.position = "fixed"
    parent.style.maxWidth = "520px"
    parent.style.left = "50%"
    parent.style.width = "100%"
    parent.style.transform = "translateX(-50%)"


    setTimeout(()=>{
        document.querySelector('.popup-bottom-noti').style.cssText="top : "+(window.innerHeight - 333 )+"px;";
        document.querySelector('.popup-bottom-info-agreement').style.cssText="top : "+(window.innerHeight - 296 )+"px;";
    }, 100);

}




window.addEventListener(`resize`, function() {
    document.querySelector('.popup-bottom-noti').style.cssText="top : "+(window.innerHeight - 333 )+"px;";
    document.querySelector('.popup-bottom-info-agreement').style.cssText="top : "+(window.innerHeight - 296 )+"px;";
});





function resetAlert(n){

    const toast = document.querySelectorAll(".popup-toast")[n];
    let myDate=new Date();

    if(n<2)
    {
        toast.innerHTML+="<br>"+myDate.getFullYear()+". "+(1+myDate.getMonth()<10?"":"")+(1+myDate.getMonth()).toString()+". "+(myDate.getDate()<10?" ":" ")+myDate.getDate().toString()+".";
    }
    popupToast(n);

}


function popupToast(n){
    toast(2, n);
}




function popupHide(backgroundEl, popupEl){


    const background = document.querySelector(backgroundEl);
    const body = document.querySelector(popupEl);

    background.style.cssText = "opacity: 0; transition-duration : 0.5s"
    body.style.cssText = "transform : translateY(100%); transition-duration : 0.2s"

    setTimeout(()=>{
        background.classList.remove("show");
    },500)
}

