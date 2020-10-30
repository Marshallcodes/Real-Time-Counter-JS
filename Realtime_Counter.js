document.addEventListener("DOMContentLoaded", function() {
  // 시간을 딜레이 없이 나타내기위한 선 실행
  realTimer();

  // 이후 0.5초에 한번씩 시간을 갱신
  setInterval(realTimer, 500);
});

// 시간 출력
function realTimer() {
  var nowDate = new Date();
  const hour = nowDate.getHours();
  const min = nowDate.getMinutes();
  const sec = nowDate.getSeconds();
  document.getElementById("nowTimes").innerHTML =
  hour + "시 " + addzero(min) + "분 " + addzero(sec) + "초";

  // 배경 색상 변경 : 짝수 = 바이올렛, 홀수 = 블루
  if(nowDate.getSeconds() % 2 == 0)
    document.body.style.backgroundColor = "violet";
  else
   document.body.style.backgroundColor = "lightskyblue";
}

// 1자리수의 숫자인 경우 앞에 0을 붙임
function addzero(num) {
  if(num < 10) { num = "0" + num; }
  return num;
}
