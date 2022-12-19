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

//parepareClock()만 실행했을 때 안되는 이유를 찾아야 함
setInterval(prepareClock, 1000);
