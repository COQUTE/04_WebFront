// 정규표현식 객체 생성 + 확인하기
document.querySelector("#btn1").addEventListener("click", () => {

  // 정규표현식 객체 생성
  const regExp1 = new RegExp("script");
  // "script"와 일치하는 문자열이 있는지 검사하는 정규표현식

  const regExp2 = /java/;
  // "java"와 일치하는 문자열이 있는지 검사하는 정규표현식

  // 확인하기
  const str1 = "저희는 지금 javascript를 공부하고 있습니다";
  const str2 = "jsp(java server page)도 곧 할겁니다";
  const str3 = "java, java, java";

  console.log(regExp1.test(str1)); // true
  console.log(regExp1.exec(str1));
  
  console.log(regExp2.test(str2)); // true
  console.log(regExp2.exec(str2));
  
  console.log(regExp2.test(str3)); // true
  console.log(regExp2.exec(str3));
});

// 메타문자 확인하기
document.querySelector("#btn2").addEventListener("click", () => {

  const div1 = document.querySelector("#div1");

  // [abcd]
  const regExp1 = /[abcd]/;
  div1.innerHTML += "/[abcd]/, apple : " + regExp1.test("apple") + "<hr>";
  div1.innerHTML += "/[abcd]/, ssbss : " + regExp1.test("ssbss") + "<hr>";
  div1.innerHTML += "/[abcd]/, qwerty : " + regExp1.test("qwerty") + "<hr>";

  // ^ (캐럿)
  const regExp2 = /^group/; // 문자열이 시작이 group인지 확인
  div1.innerHTML += "/^group/, group100 : " + regExp2.test("group100") + "<hr>";
  div1.innerHTML += "/^group/, 100group : " + regExp2.test("100group") + "<hr>";

  // $ (달러)
  const regExp3 = /group$/; // 문자열의 끝이 group인지 확인
  div1.innerHTML += "/group$/, group100 : " + regExp3.test("group100") + "<hr>";
  div1.innerHTML += "/group$/, 100group : " + regExp3.test("100group") + "<hr>";

});


// 이름 유효성 검사하기
document.getElementById("inputName").addEventListener("keyup", (e) => {
  
  // 결과 출력용 span 얻어오기
  const span = document.getElementById("inputNameResult");

  // 한글 2~5글자 정규표현식 객체 만들기
  const regExp = /^[ㄱ-힣]{2,5}$/;

  // 빈칸인지 검사
  if(e.target.value.length == 0) {
    span.innerText = "";
    return;
  }

  // 유효성 검사
  if(regExp.test(e.target.value)) {
    span.innerText = "유효한 이름 형식입니다.";
    span.style.color = "green";
    span.style.fontWeight = "bold";
  } else {
    span.innerText = "이름 형식이 유효하지 않습니다.";
    span.style.color = "red";
    span.style.fontWeight = "bold";
  }
});

// 주민등록번호 유효성 검사하기
document.getElementById("inputPno").addEventListener("keyup", (e) => {

  const span = document.getElementById("inputPnoResult");

  if(e.target.value.length == 0) {
    span.innerText = "주민등록번호를 작성해주세요";

    span.classList.remove("confirm", "error");
    return;
  }

  // 생년월일(6)-고유번호(7)
  const regExp = /^\d{6}-\d{7}$/;
  
  if(regExp.test(e.target.value)) {
    span.innerText = "유효한 주민등록번호 형식입니다.";

    //span.classList.add("confirm");
    //span.classList.remove("error");

    span.classList.toggle("confirm", true);
    span.classList.toggle("error", false);
    
  } else {
    span.innerText = "유효하지 않습니다.";
    
    //span.classList.add("error");
    //span.classList.remove("confirm");

    span.classList.toggle("confirm", false);
    span.classList.toggle("error", true);
  }
});