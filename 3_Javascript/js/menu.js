document.querySelector(".title").addEventListener("click", (e) => {
  
  e.target.style.display = "none";

  const input = document.querySelector(".i-hidden");

  input.style.display = "block";
  input.focus();
});

document.querySelector(".i-hidden").addEventListener("blur", (e) => {
  
  const input = e.target;

  if(input.value.length == 0) {
    input.style.display = "none";
  
    document.querySelector(".title").style.display = "block";
  }
});

document.querySelector(".ed").addEventListener("click", (e) => {
  
  // footer 내 버튼을 감싸고 있는 div 태그 서치
  const div = e.target.parentElement;
  const nextDiv = div.nextElementSibling;

  // 메뉴 목록을 모두 가져옴
  const items = document.querySelectorAll(".item");

  // 가져온 메뉴 목록(div)에서
  // 1. span 태그 내의 innerText를 받아와
  // 2. 새로운 input 태그 내의 value로 넣고
  // 3. input 태그 append
  // 4. 기존 span 태그를 삭제
  for(let item of items) {
    const div = document.createElement("div");
    div.classList.add("item");
    
    const input1 = document.createElement("input");
    const input2 = document.createElement("input");

    input1.value = item.firstElementChild.innerText;
    input2.value = item.lastElementChild.innerText;

    div.append(input1, input2);
    item.parentElement.append(div);

    item.remove();
  }

  // 수정 버튼 숨기고, 추가/삭제/종료 버튼 보이기
  div.classList.add("b-hidden");
  nextDiv.classList.remove("b-hidden");
});

document.querySelector(".exit").addEventListener("click", (e) => {
  
  // 버튼을 감싸고 있는 div 태그 서치
  const div = e.target.parentElement;
  const prevDiv = div.previousElementSibling;

  // 메뉴 목록을 모두 가져옴
  const items = document.querySelectorAll(".item");

  // 가져온 메뉴 목록(div)에서
  // 1. input 태그 내의 value를 받아와
  // 2. 새로운 span 태그 내의 innerText로 넣고
  // 3. 기존 input 태그를 삭제
  for(let item of items) {
    const div = document.createElement("div");
    div.classList.add("item");
    
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");

    span1.innerText = item.firstElementChild.value;
    span2.innerText = item.lastElementChild.value;

    div.append(span1, span2);
    item.parentElement.append(div);

    item.remove();
  }

  // 추가/삭제/종료 버튼 숨기고, 수정 버튼 보이기
  div.classList.add("b-hidden");
  prevDiv.classList.remove("b-hidden");

});

document.querySelector(".add").addEventListener("click", () => {
  
  const list = document.getElementById("list");

  const div = document.createElement("div");
  div.classList.add("item");

  const check = document.createElement("input");
  check.type = "checkbox";
  check.style.width = "12px";

  const input1 = document.createElement("input");
  const input2 = document.createElement("input");

  div.append(check, input1, input2);
  list.append(div);
});

document.querySelector(".del").addEventListener("click", (e) => {
  
});