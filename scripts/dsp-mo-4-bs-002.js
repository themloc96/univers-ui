





function componentChange(type, el) {
    document.querySelectorAll('.bottomsheet .tab-category button').forEach(function(el){
        el.classList.remove("active")
    })
    setTimeout(function(){

        document.querySelector('#'+type+'_tab').classList.add("active");
    },10)


    document.querySelectorAll('.bottomsheet .contentArea').forEach(function(el){
        el.style.display = 'none' 
    })
    document.querySelectorAll('#'+type).forEach(function(el){
        el.style.display = 'grid';
    })



}




function sortChange(el) {
    document.querySelectorAll('.bottomsheet .tabs button').forEach(function(el){
        el.classList.remove("active")
    })
    el.className += " active";
}



function itemDelete(el){
    if(el.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains("swiper-slide")){
        console.log("외부")

        var itemLength = document.querySelectorAll('.bottomsheet .btn-filter-options button').length;
        if(itemLength == 1){
            // document.querySelector('.bottomsheet .btn-main-task').classList.remove("bg-black")
            //document.querySelector('.bottomsheet .btn-main-task').className += " disabled";
            document.querySelector('.bottomsheet .filter-option').style.display="none";
            document.querySelector('.bottomsheet.filter .body').style.height="";
        }

        var selectText = el.parentNode.firstChild.innerText;
        var selectType = '';
        document.querySelectorAll(".bottomsheet input[type='checkbox']").forEach(function(el){
            if(el.parentNode.lastChild.innerText == selectText){
                el.checked = false;
                selectType = el.parentNode.parentNode.id;
            }
        });
        document.querySelectorAll('#filterItem').forEach(function(inner){
    
            if(inner.firstChild.innerText == selectText){
                inner.remove();
            }
        })
    
    
        console.log(document.querySelectorAll('.swiper-content .first .btn-filter-options button').length)
        if (document.querySelectorAll('.swiper-content .first .btn-filter-options button').length == 0) {
            gsap.set('.btn-fliter i', { display: 'block'})
            gsap.set('.btn-fliter .count', { display: 'none'})
            gsap.utils.toArray('.btn-fliter').forEach(button => {
                button.classList.remove('active')
            })
            gsap.utils.toArray('.swiper-wrapper .filter-option').forEach(option => {
                option.classList.remove('active')
            })   

         }
        
        let length = document.querySelectorAll('.swiper-content .first .btn-filter-options button').length
         
        let arrayCount=document.querySelectorAll('.btn-fliter .count');
    
        arrayCount.forEach(count => {
            
            count.innerHTML=length.toString();
        });
    
    
        el.parentNode.remove();

    
        var isRemain = true;
        document.querySelectorAll("#"+selectType+" input").forEach(function(el){
            if(el.checked){
                isRemain = false;
            }
        })
        if(isRemain){
            document.querySelector('#'+selectType+'_tab').classList.remove("checked");
        }
    
    
    }else{
        console.log("내부")


        var itemLength = document.querySelectorAll('.bottomsheet .btn-filter-options button').length;
        if(itemLength == 1){
            // document.querySelector('.bottomsheet .btn-main-task').classList.remove("bg-black")
            //document.querySelector('.bottomsheet .btn-main-task').className += " disabled";
            document.querySelector('.bottomsheet .filter-option').style.display="none";
            document.querySelector('.bottomsheet.filter .body').style.height="";
        }
    
    
    
    
    
        var selectText = el.parentNode.firstChild.innerText;
        var selectType = '';
        document.querySelectorAll(".bottomsheet input[type='checkbox']").forEach(function(el){



            if(el.parentNode.querySelector("span").innerText == selectText){
                el.checked = false;
            
                selectType = el.parentNode.parentNode.id;
            }
        });
        document.querySelectorAll('.bottomsheet #filterItem').forEach(function(inner){
    
            if(inner.firstChild.innerText == selectText){
    
    
                    inner.remove();
                
    
            }
        })
    
    
    
        if (document.querySelectorAll('.swiper-content .first .btn-filter-options button').length == 0) {
            gsap.set('.btn-fliter i', { display: 'block'})
            gsap.set('.btn-fliter .count', { display: 'none'})
            gsap.utils.toArray('.btn-fliter').forEach(button => {
                button.classList.remove('active')
            })
            gsap.utils.toArray('.swiper-wrapper .filter-option').forEach(option => {
                option.classList.remove('active')
            })   
            
         }
        
    
        el.parentNode.remove();
    


        var isRemain = true;
        document.querySelectorAll("#"+selectType+" input").forEach(function(el){
            if(el.checked){
                isRemain = false;
            }
        })
        if(isRemain){
            document.querySelector('#'+selectType+'_tab').classList.remove("checked");
        }
    
    


    }
    var itemLength = document.querySelectorAll('.bottomsheet .btn-filter-options button').length;

    if(itemLength === 0){
// document.querySelector('.bottomsheet .btn-main-task').classList.remove("bg-black")
        //document.querySelector('.bottomsheet .btn-main-task').className += " disabled";
        document.querySelector('.bottomsheet .filter-option').style.display="none";
        document.querySelector('.bottomsheet.filter .body').style.height="";
        itemReset();
        filterCheckAction();
    }
}

// 카테고리 필터 리셋
function itemReset(){
    document.querySelectorAll('.bottomsheet .btn-filter-options button').forEach(function(el){
        el.remove()
    });

    document.querySelectorAll(".bottomsheet input").forEach(function(el){
        el.checked = false
    })

    document.querySelectorAll(".bottomsheet .tab-category button").forEach(function(el){
        el.classList.remove("checked")
    })



    // document.querySelector('.bottomsheet .btn-main-task').classList.remove("bg-black")
    //document.querySelector('.bottomsheet .btn-main-task').className += " disabled";
    document.querySelector('.bottomsheet .filter-option').style.display="none";
    document.querySelector('.bottomsheet.filter .body').style.height="";
    document.querySelectorAll('.bottomsheet.filter .list-button').forEach(function(el){
        el.scrollTo({ top: 0, behavior: "smooth" });   
    })
    
    

    try{
        priceReset(document.querySelector('priceItem'));
    }catch(e){

    }
    document.getElementById('sort_tab').click();
    document.querySelectorAll('.contentArea .tab-swipe .tabs .btn-med')[0].click();
    console.log('reset');
    filterDivScrollToTop();    
}




function itemAdd(el, type){

    console.log(el);
    var text = el.parentNode.querySelector("span").innerText;
    var isCheck = el.checked;

    if(isCheck){
        //체크
        console.log("체크 : "+text)
        document.querySelector('.bottomsheet .btn-filter-options').innerHTML +="<button class='btn-filter-option' id='filterItem' onclick='noSwiper22'><span>"+text+"</span><i onclick='itemDelete(this)'></i></button>";

        document.querySelector('#'+type+'_tab').classList.remove("bg-black")
        document.querySelector('#'+type+'_tab').className += " checked";

        document.querySelector('.bottomsheet .btn-main-task').classList.remove("disabled")
        document.querySelector('.bottomsheet .btn-main-task').className += " bg-black";
        document.querySelector('.bottomsheet .filter-option').style.display="flex";
        document.querySelector('.bottomsheet.filter .body').style.height="calc(100% - 193px)";
    
        
        document.querySelector('.bottomsheet.filter .btn-filter-scroll').scrollTo({ left: 1200, top: 0, behavior: "smooth" });

    }else{
        //체크 해지
        var itemLength = document.querySelectorAll('.bottomsheet .btn-filter-options button').length;

        if(itemLength == 1){
    // document.querySelector('.bottomsheet .btn-main-task').classList.remove("bg-black")
            //document.querySelector('.bottomsheet .btn-main-task').className += " disabled";
            document.querySelector('.bottomsheet .filter-option').style.display="none";
            document.querySelector('.bottomsheet.filter .body').style.height="";
            itemReset();
            filterCheckAction();
        }

        document.querySelectorAll('.bottomsheet .btn-filter-options button span').forEach(function(el){
            if(el.innerText == text){
                console.log(el)
                el.parentNode.remove();
            }
        });


        var isRemain = true;
        document.querySelectorAll('#'+type+" input").forEach(function(el){
            if(el.checked){
                isRemain = false;
            }
        })

        if(isRemain){
            document.querySelector('#'+type+'_tab').classList.remove("checked");
        }

    }
}




function handleHidePopup() {
    console.log('begin handleHidePopup');
    enableScrollTouch();
    document.body.style.overflow = '';

    let popup = document.querySelectorAll(".popup-dropdown");
    const background = document.querySelectorAll(".popup-dropdown .background");
    const body = document.querySelectorAll(".popup-dropdown-body");
    //const tab_categoty = document.querySelector(".tab-category");
    //const fliter = document.querySelector(".fliter");
    const iconDropUp = document.querySelectorAll(".btn-listorder i");
  

    background.forEach(function(el){
        gsap.set(el, { display: "flex", opacity: 0.5 });
        gsap.to(el, { opacity: 0, duration: 0.2, ease: "power2.out" });
        //gsap.to(tab_categoty, { opacity: 1, duration: 0.2, ease: "power2.out" });
        //gsap.to(fliter, { opacity: 1, duration: 0.2, ease: "power2.out" });
    })


    body.forEach(function(el){
        gsap.to(el, {
            y: 60,
            duration: 0.2,
            opacity: 0,
            ease: "power2.out",
            onComplete: () => {

                background.forEach(function(el){
                
                    gsap.set(el, { opacity: 0 });
                    gsap.set(el, { display: "none" });
                })

              popup.forEach(function(el){
                  el.classList.remove("show");
              })
      
            },
          });
    })

    iconDropUp.forEach(function(el){
        gsap.to(el, {
            transform: "scaleY(1)",
            delay: 0.1,
            duration: 0.35,
          });
    })

    gsap.utils.toArray('.bottomsheet .btn-filter-options').forEach(option => {
        if (document.querySelector('.swiper-slide.first .btn-filter-options')) {
            option.innerHTML = document.querySelector('.swiper-slide.first .btn-filter-options').innerHTML;
        }
    })
    


    var outerItem = document.querySelectorAll('.swiper-slide.first .btn-filter-scroll .btn-filter-option');
    document.querySelectorAll(".bottomsheet input").forEach(function(el){
        el.checked = false
        console.log('outerItem : ', outerItem)
        if (outerItem.length === 0) {

            itemReset();
        }
        outerItem.forEach(function(innerEl){
            console.log('parent : ', el.parentNode.lastChild.innerText)
            console.log('inner : ', innerEl.innerText);
            if(el.parentNode.lastChild.innerText === innerEl.innerText){
                el.checked = true;

                var id = el.parentNode.parentNode.id;
                console.log(id);
                document.querySelector('#'+id+'_tab').classList.add("checked");

                //document.querySelector('.bottomsheet .btn-main-task').classList.remove("disabled")
                //document.querySelector('.bottomsheet .btn-main-task').className += " bg-black";
                document.querySelector('.bottomsheet .filter-option').style.display="flex";
                document.querySelector('.bottomsheet.filter .body').style.height="calc(100% - 193px)";

            }
            // else if(innerEl.innerText.includes("~")){
            //     console.log("가격 있음");

            //     var regex = /[^0-9]/g;
            //     var arrString = innerEl.innerText.split("~");
            //     var startValue = arrString[0].replace(regex,"")
            //     var endValue = arrString[1].replace(regex,"")


            //     let minRange = 0;
            //     let maxRange = 10;
            //     rangeInput[0].value = startValue;
            //     minRange = startValue;
            //     rangeInput[1].value = endValue;
            //     maxRange = endValue;
			// 	let txt = document.querySelector('.txt-result-default')

			// 	txt.innerHTML = `<p>${minRange}${minRange > 0 ?"만 원":"원 "} ~ ${maxRange}만 원</p>`;
			// 	range.style.left = (minRange / rangeInput[0].max) * 100 + "%";
			// 	range.style.right = 100 - (maxRange / rangeInput[1].max) * 100 + "%";



            //     document.querySelector('.bottomsheet #price_tab').classList.add("checked");
                
            //document.querySelector('.bottomsheet .btn-main-task').classList.remove("disabled")
            //document.querySelector('.bottomsheet .btn-main-task').className += " bg-black";
            //     document.querySelector('.bottomsheet .filter-option').style.display="flex";
            //     document.querySelector('.bottomsheet.filter .body').style.height="calc(100% - 193px)";

            // }
        })
    })




}





function handleShowPopup() {
    filterDivScrollToTop();
    let popup = document.querySelectorAll(".popup-dropdown.DSP-MO-4-TB-001")[0];
    const background = document.querySelectorAll(".popup-dropdown .background")[0];
    const body = document.querySelectorAll(".popup-dropdown-body")[0];
    const tab_categoty = document.querySelectorAll(".tab-category")[0];
    const iconDropUp = document.querySelectorAll(".btn-listorder i")[0];
    const fliter = document.querySelectorAll(".fliter")[0];

    popup.classList.add("show");
    document.body.style.overflow = 'hidden';


    gsap.set(body, {
        y: 60,
        opacity: 0
    });
    gsap.set(tab_categoty, {
        opacity: 1
    });
    gsap.set(background, {
        display: "flex",
        opacity: 0
    });
    gsap.set(iconDropUp, {
        transform: "scaleY(1)",
        delay: 0.1,
        duration: 0.35,
    });

    gsap.to(background, {
        opacity: 0.5,
        duration: 0.3,
        ease: "power1.inOut",
    });
    gsap.to(body, {
        opacity: 1,
        duration: 0.35,
        ease: "power2.out",
        delay: 0.1,
    });
    /*
    gsap.to(tab_categoty, {
      opacity: 0,
      duration: 0.35,
      ease: "power2.out",
      delay: 0.1,
    });
    gsap.to(fliter, {
      opacity: 0,
      duration: 0.35,
      ease: "power2.out",
      delay: 0.1,
    });
    /**/
    gsap.to(body, {
        y: 0,
        duration: 0.35,
        ease: "power2.out",
        delay: 0.1
    });
}



function handleShowPopup2() {
    console.log('begin handleShowPopup2');
    filterDivScrollToTop();
    let popup = document.querySelectorAll(".popup-dropdown")[1];
    const background = document.querySelectorAll(".popup-dropdown .background")[1];
    const body = document.querySelectorAll(".popup-dropdown-body")[1];
    const tab_categoty = document.querySelectorAll(".tab-category")[1];
    const iconDropUp = document.querySelectorAll(".btn-listorder i")[1];
    const fliter = document.querySelectorAll(".fliter")[1];

    const sortTab = document.querySelector('#sort_tab')
    const priceTab = document.querySelector('#price_tab')
    const benefitsTab = document.querySelector('#benefits_tab')
    const subscribeTab = document.querySelector('#subscribe_tab')

    // document.querySelector('#'+type+'_tab').className += " checked";
    sortTab.classList.remove('checked')
    priceTab.classList.remove('checked')
    benefitsTab.classList.remove('checked')
    subscribeTab.classList.remove('checked')

    const sortItem = document.querySelectorAll('#sort .btn-bottomsheet-filter');
    let minPriceValue = document.querySelector('.slider .range .range-input .min').value;
    let maxPriceValue = document.querySelector('.slider .range .range-input .max').value;
    const benefitsItem = document.querySelectorAll('#benefits .btn-bottomsheet-filter');
    const subscribeItem = document.querySelectorAll('#subscribe .btn-bottomsheet-filter');
    console.log(minPriceValue, maxPriceValue)

    for(let i = 0; i < sortItem.length; i++) {
        if(sortItem[i].querySelector('.btn-radio').checked) {
            sortTab.classList += ' checked'
        }
    }
    // if (parseInt(minPriceValue) !== 0 || parseInt(maxPriceValue) !== 10) {
    //     priceTab.classList += ' checked'
    // }
    const priceItem = document.querySelector('.btn-filter-options .priceItem');
    console.log(priceItem)
    if (priceItem !== null) {
        priceTab.classList += ' checked'
    } else {
        document.querySelector('.slider .range .range-input .min').value = 0;
        document.querySelector('.slider .range .range-input .max').value = 10;
        document.querySelector('.range-selected').style.left = '0%';
        document.querySelector('.range-selected').style.right = '0%';
        document.querySelector('.txt-result-default').innerHTML = `<p>0원 ~ 10만 원</p>`;
    }
    // 0원  ~ 10만 원
    for(let i = 0; i < benefitsItem.length; i++) {
        if(benefitsItem[i].querySelector('.btn-radio').checked) {
            benefitsTab.classList += ' checked'
        }
    }
    for(let i = 0; i < subscribeItem.length; i++) {
        if(subscribeItem[i].querySelector('.btn-radio').checked) {
            subscribeTab.classList += ' checked'
        }
    }

    popup.classList.add("show");
    //disableScroll();
    document.body.style.overflow = 'hidden';

    gsap.set(body, {
        y: 60,
        opacity: 0
    });
    gsap.set(tab_categoty, {
        opacity: 1
    });
    gsap.set(background, {
        display: "flex",
        opacity: 0
    });
    gsap.set(iconDropUp, {
        transform: "scaleY(1)",
        delay: 0.1,
        duration: 0.35,
    });

    gsap.to(background, {
        opacity: 0.5,
        duration: 0.3,
        ease: "power1.inOut",
    });
    gsap.to(body, {
        opacity: 1,
        duration: 0.35,
        ease: "power2.out",
        delay: 0.1,
    });
    /*
    gsap.to(tab_categoty, {
      opacity: 0,
      duration: 0.35,
      ease: "power2.out",
      delay: 0.1,
    });
    gsap.to(fliter, {
      opacity: 0,
      duration: 0.35,
      ease: "power2.out",
      delay: 0.1,
    });
    /**/
    gsap.to(body, {
        y: 0,
        duration: 0.35,
        ease: "power2.out",
        delay: 0.1
    });
    var itemLength = document.querySelectorAll('.bottomsheet .btn-filter-options button').length;
    if(itemLength === 0){
        // .classList.remove("bg-black")
        //.className += " disabled";

        document.querySelector('.bottomsheet .filter-option').style.display="none";
        document.querySelector('.bottomsheet.filter .body').style.height="";
    }
     
    document.querySelector('.bottomsheet.filter .btn-filter-scroll').scrollTo({ left: 0, top: 0, behavior: "smooth" });
    
    document.querySelectorAll('.bottomsheet.filter .list-button').forEach(function(el){
        el.scrollTo({ top: 0, behavior: "smooth" });   
    })

    // 바텀시트 클릭 시 마다 상품유형 - 전체 탭 보이게 초기화
    document.getElementById('sort_tab').click();
    document.querySelectorAll('.contentArea .tab-swipe .tabs .btn-med')[0].click();
}




function handleHidePopup2() {
    enableScrollTouch();
    document.body.style.overflow = '';
    let popup = document.querySelectorAll(".popup-dropdown");
    const background = document.querySelectorAll(".popup-dropdown .background");
    const body = document.querySelectorAll(".popup-dropdown-body");
    //const tab_categoty = document.querySelector(".tab-category");
    //const fliter = document.querySelector(".fliter");
    const iconDropUp = document.querySelectorAll(".btn-listorder i");
  
  
    background.forEach(function(el){
        gsap.set(el, { display: "flex", opacity: 0.5 });
        gsap.to(el, { opacity: 0, duration: 0.2, ease: "power2.out" });
        //gsap.to(tab_categoty, { opacity: 1, duration: 0.2, ease: "power2.out" });
        //gsap.to(fliter, { opacity: 1, duration: 0.2, ease: "power2.out" });
    })
  
  
    body.forEach(function(el){
        gsap.to(el, {
            y: 60,
            duration: 0.2,
            opacity: 0,
            ease: "power2.out",
            onComplete: () => {
  
                background.forEach(function(el){
                
                    gsap.set(el, { opacity: 0 });
                    gsap.set(el, { display: "none" });
                })
  
              popup.forEach(function(el){
                  el.classList.remove("show");
              })
      
            },
          });
    })
  
    iconDropUp.forEach(function(el){
        gsap.to(el, {
            transform: "scaleY(1)",
            delay: 0.1,
            duration: 0.35,
          });
    })
  
  
    // itemReset();
    
  }
  
  


function checked(item) {
    console.log(('begin checked'));
    var listItems = document
        .querySelector("ul.listOptions")
        .getElementsByTagName("li");
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].innerHTML = listItems[i].textContent;
        listItems[i].classList.remove("active");
    }
    var checkIcon = document.createElement("i");
    checkIcon.classList.add("checked", "icon", "icon-check-active");
    item.classList.add("active");
    item.appendChild(checkIcon);



    document.querySelectorAll(".btn-listorder").forEach(function (el) {
        el.innerHTML = "<span>" + item.innerText + "</span><i></i>"
    })

    handleHidePopup();
    //enableScroll();
    document.body.style.overflow = '';

}
function filterDivScrollToTop() {
    const filterDiv = document.querySelector('.swiper-slide-active .box-fliter');

    if (filterDiv !== null) {
        console.log(filterDiv.getBoundingClientRect());
        window.scrollTo({ top: 0 });
        console.log(filterDiv.getBoundingClientRect());
        const top = filterDiv.getBoundingClientRect().top;
        console.log(top)
        window.scrollTo({ top: top - 50 });   
    }
}

const appendListEvent = () => {
    const btnListorder = document.querySelectorAll("button.btn-listorder");
        btnListorder.forEach((item) => {
        item.addEventListener("click", handleShowPopup);
    });

    const btnFliter = document.querySelectorAll("button.btn-fliter");
        btnFliter.forEach((item) => {
        item.addEventListener("click", handleShowPopup2);
    });

    const backgroundFilter = document.querySelectorAll(".popup-dropdown .background");
        backgroundFilter.forEach((el) => {
        el.addEventListener("click", handleHidePopup);
    });

    const btnHeaderClose = document.querySelectorAll("button.btn-header-close");
        btnHeaderClose.forEach((el) => {
        el.addEventListener("click", handleHidePopup);
    });

    const seLecTerDropdown = document.querySelector(
    ".popup-dropdown ul"
    );
    const liElements = seLecTerDropdown.querySelectorAll("li");
    liElements.forEach((li) => {
        li.addEventListener("click", function () {
            checked(this);
        });
    });

    const seLecTerTabs = document.querySelector(".tab-swipe .tabs");
    const btnElements = seLecTerTabs.querySelectorAll("button");
    btnElements.forEach((btn) => {
        btn.addEventListener("click", function () {
            sortChange(this);
        });
    });

    const btnFilterReset = document.querySelectorAll("button.btn-filter-reset");
    btnFilterReset.forEach((el) => {
    el.addEventListener("click", () => {
            itemReset();
            filterCheckAction();
        });
    });

    const actionButtons = document.querySelectorAll(".tab-category button");
    actionButtons.forEach((el) => {
        el.addEventListener("click", function () {
            const id = this.id || 'sort';
            componentChange(id.replace("_tab", ""), this);
        });
    });

    const listButtonSort = document.querySelectorAll(".list-button#sort .btn-radio");
    listButtonSort.forEach((el) => {
      el.addEventListener("click", function () {
        console.log(this)
        itemAdd(this, "sort");
      });
    });

    const listButtonBenefits = document.querySelectorAll(
      ".list-button#benefits .btn-radio"
    );
    listButtonBenefits.forEach((el) => {
      el.addEventListener("click", function () {
        itemAdd(this, "benefits");
      });
    });

    const listButtonSubscribe = document.querySelectorAll(
      ".list-button#subscribe .btn-radio"
    );
    listButtonSubscribe.forEach((el) => {
      el.addEventListener("click", function () {
        itemAdd(this, "subscribe");
      });
    });
}

window.onload = () => {
    appendListEvent();
}

