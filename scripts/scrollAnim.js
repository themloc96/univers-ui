












const $topBtn = document.querySelectorAll(".btn-dd-floating");

// 버튼 클릭 시 맨 위로 이동
$topBtn.forEach((e) => {
    e.onclick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });  
    }
});

window.addEventListener('scroll', scrollCheck);

let __scrollYPrevious=0;


function scrollCheck(){

    // console.log("DDddd")

    if(window.scrollY < 10){
        console.log("changed x");
        document.querySelectorAll(".btn-dd-floating").forEach((elem) => {
            
            elem.style.opacity = "0";
            elem.style.cursor = "unset";

        });
    }else{

        document.querySelectorAll(".btn-dd-floating").forEach((elem) => {
            
            elem.style.opacity = "1";
            elem.style.cursor = "pointer";
        });
    }
    /**/

/*

    const arrayElementChild=elementParent.children;


    const __fps=60;
    let __animDistance=32;

    let __sign=1;
    let __amount=0;

    let __arrayParam=[];

    let __iMax=arrayElementChild.length;

    if(__scrollYPrevious!=window.scrollY)
    {
        if(__scrollYPrevious==0)
        {
            console.log("맨위에서 스크롤 움직이는 순간");

            elementParent.style.display="block";
            __sign=-1;
            let __amount=0;
        }
        if(window.scrollY<=0)
        {
            console.log("맨위에 닿는 순간");

            __sign=1;
            let __amount=0;

        }
    }

  
        __idIntervalIn = setInterval(()=>{





            for(let __i=0;__i<__iMax;__i++)
            {

                const __element=arrayElementChild[__i];


                __element.style.transform = "translateY(" + (__animDistance*(1-__amount)) + "px)";
                __element.style.opacity=1;
                __amount=__sign*(1-Math.max(0,Math.min(1,1/__fps)));
            }

        }, 1000);

    

    __scrollYPrevious=window.scrollY;
        /**/
    /*
    let __element=document.querySelector(".btn-dd-floating");
    if(window.scrollY == 0){
        __element.style.display = "none";
    }
    else{
        __element.style.display = "flex";
    }
    let __animDistance=32;
    let __scrollDistance=64;
    __element.style.opacity = window.scrollY/__scrollDistance;
    __element.style.transform = "translateY(" + (__animDistance*(1-Math.max(0,Math.min(1,window.scrollY/__scrollDistance)))) + "px)";
    /**/


}

scrollCheck();