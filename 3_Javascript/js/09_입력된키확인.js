// 문자열.toLowerCase() : 영어를 모두 소문자로 변경 (A -> a)
// 문자열.toUpperCase() : 영어를 모두 대문자로 변경 (a -> A)

// // 화면에 존재하는 key 모두 얻어오기
// const keyList = document.querySelectorAll(".key");
// console.log(keyList);

// // 화면(문서자체)에서 키가 눌러지는걸 감지했을 때
// document.addEventListener("keydown", function(e) {

//   console.log(e.key);
  
//   let idx; // 인덱스 값을 저장할 변수

//   // 입력된 키를 대문자로 바꿔서 일치하는 CASE 실행
//   switch(e.key.toUpperCase()) {
//     case "Q": idx = 0; break;
//     case "W": idx = 1; break;
//     case "E": idx = 2; break;
//     case "R": idx = 3; break;
//     default: return;
//   }

//   // idx번호와 일치하는 keyList 배열의 요소의 배경색을 변경
//   keyList[idx].style.backgroundColor = "yellowgreen";
// });

// // 화면(문서자체)에서 키가 떼어지는걸 감지했을 때
// document.addEventListener("keyup", function(e) {

//   console.log(e.key);
  
//   let idx; // 인덱스 값을 저장할 변수

//   // 입력된 키를 대문자로 바꿔서 일치하는 CASE 실행
//   switch(e.key.toUpperCase()) {
//     case "Q": idx = 0; break;
//     case "W": idx = 1; break;
//     case "E": idx = 2; break;
//     case "R": idx = 3; break;
//     default: return;
//   }

//   // idx번호와 일치하는 keyList 배열의 요소의 배경색을 변경
//   keyList[idx].style.backgroundColor = "transparent";
// });


// 화면에 존재하는 key 모두 얻어오기
const keyList = document.querySelectorAll(".key");

// 키보드 이벤트 핸들러 함수
function changeKeyColor(e, color) {
                    // e: 이벤트 종류 객체
                    // color: 색상

  const keyMap = {'Q' : 0, 'W' : 1, 'E' : 2, 'R' : 3};

  const idx = keyMap[e.key.toUpperCase()];
  // keyMap['Q'] -> 0
  // keyMap['W'] -> 1
  // keyMap['E'] -> 2
  // keyMap['R'] -> 3
  
  // keyMap에 없는 값 입력되었을 때 idx는 undefined
  if(idx != undefined) {
    keyList[idx].style.backgroundColor = color;
    // keyList[idx] 요소 배경색을 매개변수로 전달받은 color 변경
  }
}

// 키가 눌렸을 때 실행
document.addEventListener("keydown", (e) => changeKeyColor(e, "yellowgreen"));
document.addEventListener("keyup", (e) => changeKeyColor(e, "transparent"));