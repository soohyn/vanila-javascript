/**
 * 시간 두자리 수로 변경
 */
function setTextDoubleDigit(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return "" + number;
  }
}

/**
 * 현재 시간을 텍스트 가져오기
 * @returns
 */
function getCurrentTimeText() {
  var hour = new Date().getHours();
  var min = new Date().getMinutes();
  var sec = new Date().getSeconds();

  var parsedHour = setTextDoubleDigit(hour);
  var parsedMin = setTextDoubleDigit(min);
  var parsedSec = setTextDoubleDigit(sec);

  var currentTimeText = parsedHour + ":" + parsedMin + ":" + parsedSec;
  return currentTimeText;
}

/**
 * 시간 텍스트를 돔에 넣기
 * @param {} text
 */
function setCurrentTimeText(text) {
  var currentTimeElement = document.getElementById("current-time");
  currentTimeElement.innerText = text;
}

/**
 * 시계 생성
 */
function prepareClock() {
  var currentTimeText = getCurrentTimeText();
  setCurrentTimeText(currentTimeText);
}

//id = current-time이 생성되기 전에 함수호출이 이뤄지면 에러나서 오버라이딩
window.onload = prepareClock;
setInterval(prepareClock, 1000);
