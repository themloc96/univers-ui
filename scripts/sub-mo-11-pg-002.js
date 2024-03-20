function addressInfo(classPage) {
  const addressInfo = document.querySelectorAll(
    `${classPage} .address-info .item`
  );
  addressInfo?.forEach((item) => {
    addressInfoItem(item);
  });
}

function addressInfoItem(addressItem) {
  const btnOpen = addressItem.querySelector('.item-header .txt-address')

  btnOpen?.addEventListener('click', () => { 
    addressItem.classList.toggle('open')
  })
}


function productAdd(classPage) {
  const productsAdd = document.querySelectorAll(
    `${classPage} .card_product .group-all`
  );

  productsAdd?.forEach((productAdd) => {
    cardProductAdd(productAdd);
  });
}

function cardProductAdd(productAdd) {
  const allView = productAdd.querySelector('.all-view')

  const items = productAdd.querySelectorAll('.item')

  let isShow= false
    
  allView?.addEventListener('click',() => {
    productAdd.classList.toggle('show')
    isShow = !isShow

    items?.forEach((item, idx) => {
      if (isShow && idx > 4) {
      item.classList.remove('hide')    
      }
      if (!isShow && idx > 4) {
        item.classList.add('hide')
      }
    })
  })
  
}

function productDelivery(classPage) {
  const productsDelivery = document.querySelectorAll(
    `${classPage} .card-product-delivery`
  );

  productsDelivery?.forEach((productDelivery) => {
    cardProductDelivery(productDelivery);
  });
}

function cardProductDelivery(productsDelivery) {
  const boxSteps = productsDelivery.querySelectorAll(".progressbar .box-step");
  const progressBar = productsDelivery.querySelector(
    ".progressbar .progress-bar"
  );

  const steps = productsDelivery.querySelectorAll(
    ".progressbar .box-step .step"
  );

  let currentIndex = 0;

  boxSteps?.forEach((boxStep,boxStepIdx) => {
    console.log(boxStep);

    const isCurrent = boxStep.className.includes('active') &&boxStep.className.includes('current') 
    if (isCurrent) {
      progressBar.style.width = `calc(${boxStepIdx ? boxStepIdx * 50 : 0}% - 8px - ${
        boxStepIdx > 1 ? boxStepIdx * 1 : 0
      }px )`;
    }
    })

  steps?.forEach((step, stepIdx) => {

    step.addEventListener("click", () => {
      currentIndex = stepIdx;
      progressBar.style.width = `calc(${stepIdx ? stepIdx * 50 : 0}% - 8px - ${
        stepIdx > 1 ? stepIdx * 1 : 0
      }px )`;

      boxSteps?.forEach((boxStep, boxStepIdx) => {
        if (currentIndex < boxStepIdx) {
          boxStep.classList.remove("active");
          boxStep.classList.remove("current");
        } else if (currentIndex === boxStepIdx) {
          boxStep.classList.remove("active");
          boxStep.classList.add("active");
          boxStep.classList.remove("current");
          boxStep.classList.add("current");
        } else {
          boxStep.classList.add("active");
          boxStep.classList.remove("current");
        }
      });
    });
  });
}

function appendListener(classPage) {
  try {
    productAdd(classPage);
    addressInfo(classPage);
    productDelivery(classPage);
  } catch (error) {
    console.log(error);
  }
}

window.onload = function () {
  appendListener('.sub-management-sub-mo-11-pg-002');
};
