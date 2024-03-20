let dateSelect = document.querySelector(".date_select");
let ui_mem_mo_pg_002 = document.querySelector(".mem-mo-pg-002");
const KEY_TERMS_SELECTED = "TERMS_SELECTED";

// init
(function () {
    let itemSelected = window.localStorage.getItem(KEY_TERMS_SELECTED);
    console.log(itemSelected);

    // if (itemSelected ) {
    //     itemSelected = JSON.parse(itemSelected);
    //     ui_mem_mo_pg_002.querySelector(".title").innerHTML = itemSelected.titleElement;
    // } else {
    //ui_mem_mo_pg_002.querySelector(".title").innerHTML = "<span>본인 확인 서비스<br/>이용 약관 </span>";
    // }

    dateSelect.addEventListener("change", function (e) {

    })


}());