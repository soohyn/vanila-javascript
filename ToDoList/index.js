function getCurrentTimeText() {
  var hour = new Date().getHours();
  var min = new Date().getMinutes();
  var sec = new Date().getSeconds();

  var currentTimeText = hour + ":" + min + ":" + sec;

  return currentTimeText;
}

function setCurrentTimeText(text) {
  var currentTimeElement = document.getElementById("current-time");
  console.log("[set]", currentTimeElement, text);
  currentTimeElement.innerText = text;
}

function prepareClock() {
  var currentTimeText = getCurrentTimeText();
  setCurrentTimeText(currentTimeText);
}

//id = current-time이 생성되기 전에 함수호출이 이뤄지면 에러나서 오버라이딩
window.onload = prepareClock;
setInterval(prepareClock, 1000);
