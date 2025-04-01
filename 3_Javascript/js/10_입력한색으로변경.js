document.getElementById("changeButton").addEventListener("click", function() {
  // 배경색 적용할 div 배열
  const boxList = document.querySelectorAll(".box");
  // 배경색 입력할 input 배열
  const inputList = document.querySelectorAll(".color-input");

  for(let i = 0; i < boxList.length; i++) {
    boxList[i].style.backgroundColor = inputList[i].value;
  }
});