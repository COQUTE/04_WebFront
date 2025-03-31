// 클래스 접근 테스트
function classTest() {
  
  // 유사 배열이란?
  // 배열처럼 index, length를 가지고 있으나
  // 배열 전용 기능(메서드)를 제공하지 않음.
  // 제공하지 않음 : pop(), push(), map(), filter() 등..
  // HTMLCollection, NodeList는 유사 배열.

  // .cls-test 요소 모두 얻어오기
  const divs = document.getElementsByClassName("cls-test");

  console.log(divs);

  // divs 0, 1, 2째 요소에 각각 배경색 변경하기
  divs[0].style.backgroundColor = "rgb(114, 203, 80)";
  divs[1].style.backgroundColor = "blue";
  divs[2].style.backgroundColor = "deepPink";
}

// 태그명으로 요소 접근하기
function tagNameTest() {

  const tagList = document.getElementsByTagName("li");

  console.log(tagList);

  for(let i = 0; i < tagList.length; i++) {

    console.log(tagList[i].innerText);

    tagList[i].style.backgroundColor = tagList[i].innerText;
  }
}

/*
HTMLCollection : 동적 Collection
-> DOM 변경 시 자동 업데이트 됨
-> getElementsByTagName(), getElementsByClassName()

NodeList : 정적 Collection
-> DOM 변경과 무관
-> getElementsByName(), querySelectorAll()
*/

// name으로 요소 접근하기
function nameTest() {
  // name 속성값이 hobby인 요소를 모두 얻어와 변수에 저장
  const hobbyList = document.getElementsByName("hobby");

  console.log(hobbyList);

  let str = ""; // 체크된 값 누적할 문자열
  let count = 0; // 체크된 수 카운트

  for(let i = 0; i < hobbyList.length; i++) {

    // checkbox, radio 전용 속성 (.checked)

    // input요소.checked 
    // -> 요소가 체크되어 있다면 true, 아니면 false
    // input요소.checked = true; -> 해당 요소를 체크하겠다.
    // input요소.checked = false; -> 해당 요소를 체크 해제하겠다.

    if(hobbyList[i].checked) {
      str += hobbyList[i].value + " ";
      count++;
    }

  }

  // #name-div 요소에 내용으로 결과 출력
  document.getElementById("name-div").innerHTML
  = `${str} <br><br>선택된 취미 개수 : ${count}`;

  // 요소.innerHTML
  // HTML 태그를 포함하여 문자열 등을 실제 HTML 요소로 해석함

  // 요소.innerText
  // 텍스트 내용만 요소 콘텐트 내부에 출력함. (HTML 코드로 해석 X)
}

function cssTest() {

  // target-div 속성값이 "css-div" 요소에 접근
  const container = document.querySelector("[target-div='css-div']");

  // 요소의 테두리 변경
  container.style.border = "10px solid red";

  // 첫번째 자식 div 접근해서
  // 내용을 "css선택자로 선택해서 값 변경됨" 변경해보기
  const div1 = document.querySelector("[target-div='css-div'] > div");
  
  div1.innerText = "css선택자로 선택해서 값 변경됨";
  
  const div2 = document.querySelector("[target-div='css-div'] > div:last-child");
  div2.innerText = "첫번째 요소가 아니면 querySelector() 특징 활용 못함";

  // 모든 자식 div 한 번에 선택(배열 - NodeList)
  const divList = document.querySelectorAll("[target-div='css-div'] > div");

  console.log(divList);

  // index를 이용해서 요소 하나씩 접근
  divList[0].style.fontFamily = "궁서";
  divList[1].style.fontSize = "20px";

  for(let i = 0; i < divList.length; i++) {
    divList[i].onclick = function() {
      alert(`${i} 번째 요소입니다!`);
    }
  }
}

// 카카오톡 채팅 화면 만들기
function readValue() {

  // 채팅이 출력되는 배경 요소
  const bg = document.querySelector("#chatting-bg");

  // 채팅 내용 입력 input 요소
  const input = document.querySelector("#user-input");

  // 입력된 값이 없을 경우
  // 1) 진짜 안 적음
  // 2) 공백만 적음

  // 문자열.trim() : 문자열 좌우 공백 제거
  if(input.value.trim().length == 0) {
    alert('채팅 내용을 입력해주세요');

    input.value = ""; // 이전 input에 작성된 값 삭제

    input.focus(); // input에 커서 활성화

    return; // 아래 수행 X, 현재 수행중인 함수 종료
  }

  bg.innerHTML += `<p><span>${input.value}<span><p>`;

  bg.scrollTop = bg.scrollHeight;
  // bg.scrollTop : 현재 스크롤 위치
  // (스크롤이 현재 얼마만큼 내려와있는지를 나타냄)

  // bg.scrollheight : bg의 크롤 전체 높이
  // (스크롤바를 이용해 스크롤 할 수 있는 전체 높이)

  // console.log(bg.scrollTop);
  // console.log(bg.scrollHeight);

  input.value = "";
  input.focus();
}

/*
아이디가 user-input인 input요소에서
키가 올라오는 동작이 발생했을 때(감지되었을 때)
올라온 키가 "Enter" 키이면 readValue() 함수를 호출
*/

// keydown : 키가 눌러졌을 때 (+ 꾹 누르고 있으면 계속 인식됨)
// keyup : 눌러지던 키가 떼어졌을 때(1회만 인식)

document.querySelector("#user-input")
.addEventListener("keyup", function(e) {

  // e : 이벤트 객체 (발생한 이벤트 정보를 담고있는 객체)
  console.log(e);

  if(e.key == "Enter") { // 엔터가 눌러지고 떼어졌을 때
    readValue();
  }
})