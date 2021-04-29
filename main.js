import parsePhoneNumber from "libphonenumber-js";

const convertToDomestic = document.getElementById("convertToDomestic");
const convertToInternational = document.getElementById(
  "convertToInternational"
);
const format = document.getElementById("format");

const ConvertToDomesticLogic = () => {
  const phoneNumber = parsePhoneNumber(getTextValue());
  numberCheck(phoneNumber);
  htmlOutPut(phoneNumber.formatNational(), "国際電話を国内電話に変換");
};

const ConvertToInternationalLogic = () => {
  const phoneNumber = parsePhoneNumber(getTextValue(), "JP");
  numberCheck(phoneNumber);
  htmlOutPut(phoneNumber.number, "国内電話を国際電話形式に変換");
};

const formatConversion = () => {
  const phoneNumber = parsePhoneNumber(getTextValue(), "JP");
  numberCheck(phoneNumber);
  htmlOutPut(phoneNumber.formatNational(), "フォーマット");
};

function getTextValue() {
  return document.getElementById("number").value;
}

function numberCheck(number) {
  if (typeof number === "undefined") {
    alert("変換エラー");
  }
}

function htmlOutPut(phoneNumber, message) {
  const result = document.getElementById("result");
  result.innerHTML = message + "</br>" + phoneNumber;
}

convertToDomestic.onclick = ConvertToDomesticLogic;
convertToInternational.onclick = ConvertToInternationalLogic;
format.onclick = formatConversion;
