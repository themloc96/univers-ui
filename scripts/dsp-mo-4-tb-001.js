var swiperIndexPage = 0;
let priceData = {
    'min': 0, // 바텀시트 내부 최소 가격
    'max': 10, // 바텀시트 내부 최대 가격
    'reset': true, // 초기화 여부(false일 때 바텀시트 내부 가격 탭에 활성화 표시)
    'changing': false, // 가격 변경 여부
}
let tempMinPriceValue = 0;
let tempMaxPriceValue = 10;

// 아이폰 스크롤 막기
function preventScroll(event) {
    if (event.target.closest('.popup-dropdown-body') === null) {
        event.preventDefault();
    }
    
} 
// 아이폰 스크롤 활성화
function enableScrollTouch() {
    console.log('enableScroll');
    document.removeEventListener('touchmove', preventScroll);
}
 
function tabSwipeHeader(scroll) {
    let tab_header = document.querySelector(".tab-swipe-header");
    let rect = tab_header.getBoundingClientRect();
    let eleme_scroll = rect.top + window.pageYOffset;
    let tab = tab_header.querySelector(".tab-category");
    let tab2 = tab_header.querySelector(".line");
    if (scroll >= eleme_scroll) {
        tab.classList.add("top");
        tab2.classList.add("top");
    } else {
        tab.classList.remove("top");
        tab2.classList.remove("top");
    }

    return tab.clientHeight;
}

function productFliter(scroll) {
    let box_fliter = document.querySelectorAll(".box-fliter")[swiperIndexPage];
    let rect = box_fliter.getBoundingClientRect();
    let eleme_scroll = rect.top + window.pageYOffset;
    let fliter = box_fliter.querySelector(".fliter");
    if (scroll >= eleme_scroll) {
        gsap.set('.top-box-fliter', {
            visibility: 'unset'
        })
    } else {
        gsap.set('.top-box-fliter', {
            visibility: 'hidden'
        })
    }
    return fliter.clientHeight;
}

function listHorizontalRecommend(scroll) {
    try {
        let box = document.querySelector(".list-horizontal-recommend");
        let rect = box.getBoundingClientRect();
        let eleme_scroll = rect.top - 50;
        if (window.innerHeight / 2 >= eleme_scroll) {
            let title = box.querySelector(".txt-title");
            box.classList.add("fadeInTop");
            document.querySelector('.main .list-product .list-horizontal-recommend').style = 'height: inherit !important';
            gsap.set('.main .list-product .list-horizontal-recommend', {
                padding: '0 24px'
            })


            swiper2.update();


            title.classList.add("fadeInUp");
            setTimeout(() => {
                let list = box.querySelector(".list-product");
                list.classList.add("fadeInRight");
            }, 500);
        }
    } catch (e) {

    }
}

console.log("ddff")
console.log('load');

class PassInteraction {

    constructor() {
        this.init()
    }

    init() {
        console.log('init')
        this.passList = document.querySelector('.maskingarea').querySelectorAll('.product');;
        this.length = this.passList.length;

        this.passList.forEach((pass, index) => {
            this.update(pass, index);
        })
    }

    update(pass, index) {
        const props = {
            duration: 0.8,
            ease: 'power2.out',
            delay: 1.4,
        }

        const info = pass.querySelector('.info-product-hor');

        let start = ((index) * props.delay) - props.duration;

        const tl = gsap.timeline({
            delay: start,
            onStart: () => {
                // 애니메이션 시작 시 실행할 코드
                pass.style.display = 'flex';
            },
            onComplete: () => {
                this.update(pass, this.length - 1);
                tl.addLabel('st');
                pass.style.display = 'none';
                //document.querySelector(".swiper-wrapper").style.transform = "none";
            },
        });

        tl.addLabel(0, 'st');

        tl.fromTo(
            pass, {
            y: '100%'
        }, // 시작 위치를 100%로 설정
            {
                y: '0%',
                duration: props.duration,
                ease: props.ease
            },
            'st'
        );

        tl.fromTo(
            pass, {
            y: '0%'
        }, // 이전 애니메이션의 종료 위치를 시작 위치로 설정
            {
                y: '-100%',
                duration: props.duration,
                ease: props.ease
            },
            `st+=${props.delay}`
        );

        tl.fromTo(
            info, {
            y: '20px'
        }, // 시작 위치를 20px로 설정
            {
                y: '0%',
                duration: props.duration,
                ease: props.ease,
                delay: props.duration * 0.1
            },
            'st'
        );
    }
}

try {
    new PassInteraction()
} catch (e) {
    console.log('fail init PassInteraction')
    console.log(e)
}

document.documentElement.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, false);

var swiperPresentIndex = 0;
gsap.utils.toArray('.noSwiper').forEach(s => {
    s.addEventListener('touchstart', () => {
        swiper2.allowTouchMove = false;
    })
    s.addEventListener('touchend', () => {
        swiper2.allowTouchMove = true;
    })
    s.addEventListener('mouseenter', () => {
        swiper2.allowTouchMove = false;
    })
    s.addEventListener('mouseleave', () => {
        swiper2.allowTouchMove = true;
    })
})

function swiperDestory() {
    gsap.utils.toArray(".tab-swipe-header .tab-category button").forEach((el, i) => {
        if (el.classList.contains('active')) {
            swiperIndexPage = i
        }
    })

    swiper2.destroy();

    gsap.utils.toArray('.swiper-wrapper').forEach(s => {
        gsap.set(s, { transform: "translate3d(" + (s.clientWidth * -1 * swiperPresentIndex) + "px, 0px, 0px)" })
    })

    gsap.utils.toArray(".tab-swipe-header .tab-category button").forEach((el, i) => {
        if (i == swiperPresentIndex) {
            el.classList.add('active')
        }
    })
}



gsap.utils.toArray(".swiper-wrapper .btn-filter-reset").forEach(button => {
    button.addEventListener('click', () => {
        gsap.set('.btn-fliter i', {
            display: 'block'
        })
        gsap.set('.btn-fliter .count', {
            display: 'none'
        })
        gsap.utils.toArray('.btn-fliter').forEach(b => b.classList.remove('active'))
        gsap.utils.toArray('.swiper-wrapper .filter-option').forEach(b => b.classList.remove('active'))

        document.querySelectorAll('.swiper-slide.first .btn-filter-scroll .btn-filter-option').forEach(function (el) {
            el.remove();
        })
        itemReset();
    })
})

if (document.querySelector('#filterCheck')) {
    document.querySelector('#filterCheck').addEventListener('click', () => {
        filterCheckAction();
        filterDivScrollToTop();
        handleHidePopup2();
    })
}

if (document.querySelector('.line')) {
    const line = document.querySelector('.line');
    gsap.to(line, {
        width: document.querySelector('.tab-category button.active').offsetWidth,
        duration: 0,
        ease: 'power2.out'
    })

    const activeButton = document.querySelector('.tab-category button.active');
    const {
        width,
        x
    } = activeButton.getBoundingClientRect();

    gsap.to(line, {
        x: x + document.querySelector('.tab-category').scrollLeft + document.querySelector(
            '.tab-category button:first-child').getBoundingClientRect().x - 24 - (document.querySelector('.tab-category').getBoundingClientRect().x * 2),
        duration: 0,
        ease: 'power2.out'
    })

    document.querySelectorAll('.tab-category button')[0].click();
}

function filterCheckAction() {
    console.log('filter ok button click')

    if (document.querySelectorAll('.bottomsheet .btn-filter-options button').length !== 0) {
        
        gsap.utils.toArray('.btn-fliter').forEach(button => {

            button.classList.add('active')
            gsap.set(button.querySelector('i'), {
                display: 'none'
            })
            gsap.set(button.querySelector('.count'), {
                display: 'block'
            })

            gsap.utils.toArray('.swiper-wrapper .filter-option').forEach(option => option.classList.add('active'))
            gsap.utils.toArray('.swiper-wrapper .btn-filter-options').forEach(option => {
                option.innerHTML = document.querySelector('.bottomsheet .btn-filter-options').innerHTML;
            })
        })

        document.body.style.overflow = '';

        let length = document.querySelectorAll('.swiper-content .first .btn-filter-options button').length;
        console.log(["dasdsa선택한 옵션 ", length])
        console.log([document.querySelector('.btn-fliter .count'), document.querySelector('.btn-fliter .count').innerHTML])

        let arrayCount = document.querySelectorAll('.btn-fliter .count');

        arrayCount.forEach(count => {

            count.innerHTML = length.toString();
        });

        // 가격 슬라이드 이후 상품보기 버튼 클릭 시 가격 탭 활성화 표시
        if (priceData.changing === true) {
            priceData.min = tempMinPriceValue;
            priceData.max = tempMaxPriceValue;
            priceData.reset = false;
            priceData.changing = false;
        }
        console.log([document.querySelector('.btn-fliter .count'), document.querySelector('.btn-fliter .count').innerHTML])
        document.querySelector('.list-product .btn-filter-scroll').scrollTo({ left: 1200, top: 0, behavior: "smooth" });
        return;
    }
    // 필터 설정을 안한 채로 상품 보기 버튼 클릭 시
    console.log('select count : 0')

    let arrayCount = document.querySelectorAll('.btn-fliter .count');
    gsap.utils.toArray('.btn-fliter').forEach(button => {
        button.classList.remove('active')

        gsap.set(button.querySelector('i'), {
            display: 'block'
        })
        gsap.set(button.querySelector('.count'), {
            display: 'none'
        })
        gsap.utils.toArray('.swiper-wrapper .filter-option').forEach(option => option.classList.remove('active'))
        gsap.utils.toArray('.swiper-wrapper .btn-filter-options').forEach(option => {
            option.innerHTML = '';
        })
    });

    arrayCount.forEach(count => {
        count.innerHTML = length.toString();
    });
}

// 스크롤 막기 함수
function disableScroll() {
    // 현재 스크롤 위치 저장
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // 스크롤 위치 고정 및 오버플로우 숨김
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollTop}px`;
    document.body.style.left = `-${scrollLeft}px`;

    console.log("스크롤 방지");
}

// 스크롤 허용 함수
function enableScroll() {
    // 이전 스크롤 위치 복원
    var scrollTop = Math.abs(parseInt(document.body.style.top, 10));
    var scrollLeft = Math.abs(parseInt(document.body.style.left, 10));

    // 스크롤 위치 해제 및 오버플로우 복원
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';

    // 이전 스크롤 위치로 스크롤 이동
    window.scrollTo(scrollLeft, scrollTop);
    console.log("스크롤 방지 풀림");
}

function handleShowPopup() {
    document.body.style.overflow = 'hidden';
    document.addEventListener('touchmove', preventScroll, { passive: false });

    let popup = document.querySelectorAll(".popup-dropdown.DSP-MO-4-TB-001")[0];
    const background = document.querySelectorAll(".popup-dropdown .background")[0];
    const body = document.querySelectorAll(".popup-dropdown-body")[0];
    const tab_category = document.querySelectorAll(".tab-category")[0];
    const iconDropUp = document.querySelectorAll(".btn-listorder i")[0];
    const fliter = document.querySelectorAll(".fliter")[0];

    popup.classList.add("show");

    gsap.set(body, {
        y: 60,
        opacity: 0
    });
    gsap.set(tab_category, {
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
    document.body.style.overflow = 'hidden';
    document.addEventListener('touchmove', preventScroll, { passive: false });

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
    console.log(priceTab.classList);
    // document.querySelector('#'+type+'_tab').className += " checked";
    sortTab.classList.remove('checked')
    priceTab.classList.remove('checked')
    benefitsTab.classList.remove('checked')
    subscribeTab.classList.remove('checked')
    console.log(priceTab.classList);
    const sortItem = document.querySelectorAll('#sort .btn-bottomsheet-filter');
    let minPriceValue = document.querySelector('.slider .range .range-input .min').value;
    let maxPriceValue = document.querySelector('.slider .range .range-input .max').value;
    const benefitsItem = document.querySelectorAll('#benefits .btn-bottomsheet-filter');
    const subscribeItem = document.querySelectorAll('#subscribe .btn-bottomsheet-filter');

    for(let i = 0; i < sortItem.length; i++) {
        if(sortItem[i].querySelector('.btn-radio').checked) {
            sortTab.classList += ' checked'
        }
    }

    // 가격 탭 리셋 여부

    if (priceData.reset === false) {
        priceTab.classList += ' checked'
    }
    document.querySelector('.slider .range .range-input .min').value = priceData.min;
    document.querySelector('.slider .range .range-input .max').value = priceData.max;
    document.querySelector('.range-selected').style.left = `${0 + priceData.min}0%`;
    document.querySelector('.range-selected').style.right = `${10 - priceData.max}0%`;
    let txt = document.querySelector('.txt-result-default')
    txt.innerHTML = `<p>${priceData.min}${priceData.min > 0 ? "만 원" : "원 "} ~ ${priceData.max}만 원</p>`;

    tempMinPriceValue = priceData.min;
    tempMaxPriceValue = priceData.max;

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
        //document.querySelector('.bottomsheet .btn-main-task').classList.remove("bg-black")
        //document.querySelector('.bottomsheet .btn-main-task').className += " disabled";

        document.querySelector('.bottomsheet .filter-option').style.display="none";
        document.querySelector('.bottomsheet.filter .body').style.height="";
    }
     
    document.querySelector('.bottomsheet.filter .btn-filter-scroll').scrollTo({ left: 0, top: 0, behavior: "smooth" });
    
    document.querySelectorAll('.bottomsheet.filter .list-button').forEach(function(el){
        el.scrollTo({ top: 0, behavior: "smooth" });   
    })

    // 바텀시트 클릭 시 마다 상품유형 - 전체 탭 보이게 초기화
    document.getElementById('sort_tab').click();
    // document.querySelectorAll('.contentArea .tab-swipe .tabs .btn-med')[0].click();
}

function checked(item) {
    console.log('begin checked');
    filterDivScrollToTop();
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

(function () {
    document.addEventListener("scroll", (event) => {
        let top_parent = tabSwipeHeader(window.scrollY);
        productFliter(window.scrollY + (top_parent - 1));
        listHorizontalRecommend(window.scrollY);
    });
})();

function toast(dur) {
    const toast = document.querySelector(".popup-toast");
    const toastContent = toast.querySelector("p");

    gsap.killTweensOf([toast, toastContent], "all");

    gsap.set(toast, {
        opacity: 0
    });
    gsap.set(toastContent, {
        opacity: 0
    });

    const sv = 0.95;

    gsap.set(toast, {
        display: "flex"
    });
    gsap.from(toast, {
        scale: sv,
        duration: 0.35,
        ease: "power1.out"
    });
    gsap.to(toast, {
        opacity: 1,
        duration: 0.3,
        ease: "power1.out",
        onComplete: () => {
            gsap.delayedCall(dur ?? 2, () => {
                gsap.to(toast, {
                    opacity: 0,
                    duration: 0.2,
                    ease: "power1.out",
                    onComplete: () => {
                        gsap.set(toast, {
                            display: "none"
                        });
                    },
                });
            });
        },
    });

    gsap.set(toastContent, {
        display: "block"
    });
    gsap.from(toastContent, {
        scale: sv,
        duration: 0.35,
        ease: "power1.out"
    });
    gsap.to(toastContent, {
        opacity: 1,
        duration: 0.3,
        ease: "power1.out",
        onComplete: () => {
            gsap.delayedCall(dur ?? 2, () => {
                gsap.to(toastContent, {
                    opacity: 0,
                    duration: 0.2,
                    ease: "power1.out",
                    onComplete: () => {
                        gsap.set(toastContent, {
                            display: "none"
                        });
                    },
                });
            });
        },
    });
}




let target = document.querySelectorAll(".tab-category > *");

target.forEach(function (el) {
    el.addEventListener("click", (e) => handleEvent(e));
})

function handleEvent(e) {
    target.forEach(function (el) {
        el.classList.remove("active")
    })

    if (e.srcElement.tagName == 'SPAN') {
        e.srcElement.parentNode.classList.add("active")
    } else {
        e.srcElement.classList.add("active")
    }

}

const btnAddPlusTxt = document.querySelector("button.btn-add-plus-txt");
btnAddPlusTxt.addEventListener("click", () => {
    gsap.delayedCall(0.5, () => {
        toast();
    });
});



/**
 *  바텀 팝업 가격 필터 관련 내용 시작
 */
let rangeMin = 1;
const range = document.querySelector(".range-selected");
const rangeInput = document.querySelectorAll(".range-input input");
const rangePrice = document.querySelectorAll(".range-price input");
rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
        let minRange = parseInt(rangeInput[0].value);
        let maxRange = parseInt(rangeInput[1].value);
        console.log('change range\nmin : ', minRange, '\nmax : ', maxRange);
        priceData.changing = true;
        if (maxRange - minRange < rangeMin) {
            if (e.target.className === "min") {
                rangeInput[0].value = maxRange - rangeMin;
            } else {
                rangeInput[1].value = minRange + rangeMin;
            }
        } else {
            // rangePrice[0].value = minRange;
            // rangePrice[1].value = maxRange;
            let txt = document.querySelector('.txt-result-default')
            txt.innerHTML = `<p>${minRange}${minRange > 0 ? "만 원" : "원 "} ~ ${maxRange}만 원</p>`;
            range.style.left = (minRange / rangeInput[0].max) * 100 + "%";
            range.style.right = 100 - (maxRange / rangeInput[1].max) * 100 + "%";

            document.querySelectorAll('.bottomsheet .btn-filter-options .priceItem').forEach(function (el) {
                el.remove();
            })

            document.querySelector('.bottomsheet .btn-filter-options').innerHTML +=
                "<button class='btn-filter-option priceItem' ><span>" + minRange + "만원 ~ " +
                maxRange + "만원</span><i onclick='priceReset(this)'></i></button>";

            try {
                document.querySelector('.bottomsheet .filter-option').style.display = "flex";
                document.querySelector('.bottomsheet #price_tab').classList.remove("bg-black")
                document.querySelector('.bottomsheet #price_tab').className += " checked";
                document.querySelector('.bottomsheet .btn-main-task').classList.remove("disabled")
                document.querySelector('.bottomsheet .btn-main-task').className += " bg-black";
                document.querySelector('.bottomsheet.filter .body').style.height =
                    "calc(100% - 193px)";

                document.querySelector('.bottomsheet.filter .btn-filter-scroll').scrollTo({ left: 1500, top: 0, behavior: "smooth" });
            } catch (e) {
            }
        }
        tempMinPriceValue = rangeInput[0].value;
        tempMaxPriceValue = rangeInput[1].value;
        document.querySelector('.bottomsheet.filter .btn-filter-scroll').scrollTo({ left: 1200, top: 0, behavior: "smooth" });
    });
});

function priceReset(el) {

    let minRange = 0;
    let maxRange = 10;
    if (maxRange - minRange < rangeMin) {
        if (e.target.className === "min") {
            rangeInput[0].value = maxRange - rangeMin;
        } else {
            rangeInput[1].value = minRange + rangeMin;
        }
    } else {
        // rangePrice[0].value = minRange;
        // rangePrice[1].value = maxRange;
        let txt = document.querySelector('.txt-result-default')
        txt.innerHTML = `<p>${minRange}${minRange > 0 ? "만 원" : "원 "} ~ ${maxRange}만 원</p>`;
        range.style.left = (minRange / rangeInput[0].max) * 100 + "%";
        range.style.right = 100 - (maxRange / rangeInput[1].max) * 100 + "%";
    }

    rangeInput[0].value = 0;
    rangeInput[1].value = 10;
    
    priceData.min = 0;
    priceData.max = 10;
    priceData.reset = true;
    if (el.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains("swiper-slide")) {

        console.log("외부")

        var itemLength = document.querySelectorAll('.bottomsheet .btn-filter-options button').length;
        if (itemLength == 1) {
            //document.querySelector('.bottomsheet .btn-main-task').classList.remove("bg-black")
            //document.querySelector('.bottomsheet .btn-main-task').className += " disabled";
            document.querySelector('.bottomsheet .filter-option').style.display = "none";
            document.querySelector('.bottomsheet.filter .body').style.height = "";
        }

        document.querySelector('.bottomsheet #price_tab').classList.remove("checked");
        document.querySelector('.bottomsheet .priceItem').remove();
        document.querySelector('.priceItem').remove();

        if (document.querySelectorAll('.swiper-content .first .btn-filter-options button').length == 0) {
            gsap.set('.btn-fliter i', { display: 'block' })
            gsap.set('.btn-fliter .count', { display: 'none' })
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
    
    } else {
        console.log("내부")
        var itemLength = document.querySelectorAll('.bottomsheet .btn-filter-options button').length;
        if (itemLength == 1) {
            //document.querySelector('.bottomsheet .btn-main-task').classList.remove("bg-black")
            //document.querySelector('.bottomsheet .btn-main-task').className += " disabled";
            document.querySelector('.bottomsheet .filter-option').style.display = "none";
            document.querySelector('.bottomsheet.filter .body').style.height = "";
        }
        document.querySelector('.bottomsheet #price_tab').classList.remove("checked");
        document.querySelector('.bottomsheet .priceItem').remove();
        document.querySelector('.priceItem').remove();
        if (document.querySelectorAll('.swiper-content .first .btn-filter-options button').length == 0) {
            gsap.set('.btn-fliter i', { display: 'block' })
            gsap.set('.btn-fliter .count', { display: 'none' })
            gsap.utils.toArray('.btn-fliter').forEach(button => {
                button.classList.remove('active')
            })
            gsap.utils.toArray('.swiper-wrapper .filter-option').forEach(option => {
                option.classList.remove('active')
            })
        }

        arrayCount.forEach(count => {
            
            count.innerHTML=length.toString();
        });
    }
}

/**
 *  바텀 팝업 가격 필터 관련 내용 끝
 */


/**
 *  Swiper 관련 내용 시작
 */
var swiper1 = new Swiper(".banner", {
    pagination: {
        el: ".pageindicator",
        clickable: true,
        bulletActiveClass: 'selected',
        renderBullet: function (index, className) {
            return '<div class="unselected ' + className + '"></div>';
        },
    },
    on: {
        init: function (sw) {
            let number = sw.el.querySelector('.pageindicator-num')
            number.innerHTML =
                `<div><span>${(sw.activeIndex + 1)}</span><span>/</span><span>${(sw.slides.length)}</span></div>`;
        },
        slideChange: function (sw) {
            let number = sw.el.querySelector('.pageindicator-num')
            number.innerHTML =
                `<div><span>${(sw.activeIndex + 1)}</span><span>/</span><span>${(sw.slides.length)}</span></div>`;
        },
    }
});

var navigation = [
    '전체',
    '식음료',
    '문화</span><span class="dot"></span><span>취미',
    '쇼핑',
    '생활용품</span><span class="dot"></span><span>리빙',
    '헬스</span><span class="dot"></span><span>뷰티',
    '키즈',
    '반려동물',
    '여행</span><span class="dot"></span><span>교통'
];

var swiper2 = new Swiper(".swiper-content", {
    observer: true,	// 추가
    observeParents: true,	// 추가
    autoHeight: true,
    threshold: 60,
    pagination: {
        el: ".tab-swipe-header .tab-category",
        clickable: true,
        bulletActiveClass: 'active',
        bulletClass: ' index',
        renderBullet: function (index, className) {
            return '<button class="unselected ' + className + '"><span>' + navigation[index] +
                '</span></button>';
        },
    },

    on: {
        slideChange: function (sw) {
            swiper1 = null;
            // 필터 리셋
            itemReset();

            let arrayCount = document.querySelectorAll('.btn-fliter .count');
            gsap.utils.toArray('.btn-fliter').forEach(button => {
                button.classList.remove('active')

                gsap.set(button.querySelector('i'), {
                    display: 'block'
                })
                gsap.set(button.querySelector('.count'), {
                    display: 'none'
                })
                gsap.utils.toArray('.swiper-wrapper .filter-option').forEach(option => option.classList.remove('active'))
                gsap.utils.toArray('.swiper-wrapper .btn-filter-options').forEach(option => {
                    option.innerHTML = '';
                })
            });

            arrayCount.forEach(count => {
                count.innerHTML = length.toString();
            });

            const sortTab = document.querySelector('#sort_tab');
            componentChange('sort', sortTab)

            const btnMeds = document.querySelectorAll('.btn-product .tab-swipe .tabs .btn-med');
            sortChange(btnMeds[0])

            

            
            swiperIndexPage = sw.activeIndex;
            let target = document.querySelectorAll(".tab-category > *");
            var index = 0;
            target.forEach(function (el) {
                el.classList.remove("active")
            })


            target.forEach(function (el) {
                if (index == sw.activeIndex) {
                    el.classList.add("active")
                    el.click();
                }
                index++;
            })
            window.scrollTo({ left: 0, top: 0 });
            
        }
    }
});

/**
 *  Swiper 관련 내용 끝
 */


/**
 *  Tab 메뉴 변경 관련 내용 시작
 */
const tabs = gsap.utils.toArray('.tab-category button');
		// 탭 버튼 클릭 이벤트 핸들러
		function handleTabButtonClick(event) {

			const line = document.querySelector('.line');
			const tab = event.currentTarget;

			const {
				width,
				x
			} = tab.getBoundingClientRect();
			let spd = 0.35;

			gsap.to('.tab-category', {
				scrollTo: {
					x: tab,
					offsetX: (window.innerWidth / 2) - width / 2
				},
				duration: spd,
				ease: 'power2.out'
			})

			gsap.to(line, {
				width: width,
				duration: spd,
				ease: 'power2.out'
			})

			var realWidth = 0;

			gsap.to(line, {
				x: x + document.querySelector('.tab-category').scrollLeft + document.querySelector(
					'.tab-category button:first-child').getBoundingClientRect().x - 24 - (document.querySelector('.tab-category').getBoundingClientRect().x * 2),
				duration: spd,
				ease: 'power2.out'
			})

			const activeButton = document.querySelector('.tab-category button.active');
			activeButton.classList.remove('active');
			tab.classList.add('active');
		}

		// 각 탭 버튼에 클릭 이벤트 리스너 추가
		const tabButtons = document.querySelectorAll('.tab-swipe-header .tab-category button');
		tabButtons.forEach((tabButton) => {
			tabButton.addEventListener('click', handleTabButtonClick);
		});

		const tabButtons2 = document.querySelector('.tab-category');

		function handleTabButtonScroll() {
			let spd = 0.35;
			const line = document.querySelector('.line');
			const parentDom = document.querySelector('.tab-category').getBoundingClientRect();
			const childDom = document.querySelector(".tab-category .active").getBoundingClientRect();

			if (document.body.offsetWidth <= 520) {
				gsap.to(line, {
					x: (childDom.x - parentDom.x),
					duration: 0.35,
					ease: 'power2.out'
				})
			} else {
				gsap.to(line, {
					x: (childDom.x - parentDom.x) - (document.body.offsetWidth - 520),
					duration: 0.35,
					ease: 'power2.out'
				})
			}
			setTimeout(function () {
				if (document.body.offsetWidth <= 520) {
					gsap.to(line, {
						x: (childDom.x - parentDom.x),
						duration: 0.35,
						ease: 'power2.out'
					})
				} else {
					gsap.to(line, {
						x: (childDom.x - parentDom.x) - (document.body.offsetWidth - 520),
						duration: 0.35,
						ease: 'power2.out'
					})
				}
			}, 1)
		}
		tabButtons2.addEventListener('scroll', handleTabButtonScroll);

/**
 *  Tab 변경 관련 내용 끝
 */