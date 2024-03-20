const CENTURY_IDENTIFIERS_20ST = { male: "1", female: "2" };
const CENTURY_IDENTIFIERS_21ST = { male: "3", female: "4" };

const alertTimeOut = (message = "", time = 0) => {
  setTimeout(function () {
    alert(message);
  }, time);
};

const ConfirmAlert = (messageConfirm = "") => {
  confirm(messageConfirm);
};

const hasKoreanCharacters = (str = "") => {
  const pattern = /[\p{L}ㄱ-ㅎㅏ-ㅣ가-힣]+/gu;
  return str.match(pattern);
};
