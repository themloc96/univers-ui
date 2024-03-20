



/**
 * 
 * @param {*} id - view 하고 싶은 popup id
 * 
 * 
 * @example 
 * 
 * <!-- 팝업 정의 영역 -->
    <div class="popupAreaLib" id="popup1" onclick="popupCloseLib('popup1')">
        <div class="popup-center-01">
            <img src="" onerror="this.style.display='none'" style="display: none;">
            <div class="con-all-task-01">
                <p class="content">문의하실 상품을 선택해 주세요.</p>
            </div>
            <button type="button" class="btn-sub-task-48px full bg-black" onclick="popupCloseLib('popup1')"><span>확인</span></button>
        </div>
    </div>

    <!-- 팝업 호출 영역  -->

    <button onclick="popupViewLib('popup1')" >

    <!-- 팝업 닫기 영역 -->

    <button onclick="popupCloseLib('popup1')" >

 * 
 */



function popupViewLib(id){
    document.querySelector("#"+id).style.display = "block";
}


function popupCloseLib(id){
    document.querySelector("#"+id).style.display = "none";
}

