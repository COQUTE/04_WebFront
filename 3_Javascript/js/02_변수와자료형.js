// console.log(값)
// 브라우저 콘솔에 괄호() 내부의 값을 출력(기록)

console.log(1234);
console.log("문자열은 양쪽에 쌍따옴표 작성");
console.log('JS는 홑따옴표도 문자열로 취급!');

// ---------------------------------------------

// 변수의 선언
// 메모리에 값을 저장할 공간을 만들고 이름을 붙이는 것
// 작성법
// 변수종류 변수명;
var number1;

// 초기화 (== 변수에 처음 값을 할당하는 과정)
// [작성법]
// 변수명 = 값;
number1 = 10;

// 콘솔에 number1 값 출력하기
console.log(number1);

// 변수 선언 + 초기화
var number2 = 20;
console.log(number2);

// number1, number2의 합 출력하기
console.log(number1 + number2);

// 변수에 대입한 값 변경하기
number1 = 300; // number1에 300 재대입(기존 10값에 덮어쓰기)
number2 = 400; // number2에 400 재대입

// 변경된 두 변수의 값 출력
// 1) 문자열 + 문자열/숫자/변수 == 이어쓰기
console.log("number1의 값 : " + number1); // "number1의 값 : 300"
console.log("100" + 100); // "100100"

// 2) 괄호 내부에 , 를 작성해 각각의 값으 독립적으로
// 출력하기
// 형변환 없이 출력되어 문자열 따로, 다른 데이터타입
// 따로 독립되어 출력됨
console.log("number1 : ",number1, " number2 : ",number2);

// ---------------------------------------------------------------

// var, let, const의 차이점

// 1. var (변수, 변수 선언 시 중복되는 변수명으로 선언 가능)
//  -> 먼저 선언된 변수에 나중에 선언된 변수가 덮어씌워짐

var menu = "삼겹살";
console.log("menu : " + menu);

var menu = "초밥";
console.log("menu : " + menu);
// 변수명이 중복되어 값이 덮어쓰기 되면
// 이전에 선언 해놓은 변수를 쓸 수 없게되는 문제가 발생함.

// ------------------------------------------------------------

// 2. let (변수, var의 변수명 중복 문제 해결)

let number3 = 25;

// let number3 = 500; // 변수명 중복 불가

number3 = 500; // 기존 변수 number3에 새로운 값 재할당 가능

console.log("number3 : " + number3);

// ------------------------------------------------

// 3. const (상수, constant, 항[상] 같은 [수])
// 한 번 값이 대입되면 새로운 값 대입할 수 없음

const PI = 3.141592;

// const test; // 상수는 선언과 동시에 초기화 반드시!

// PI = 1.23;
// Uncaught TypeError: Assignment to constant variable.
// 상수로 배정되어있다.
// -> 상수에 새로운 값을 대입할 수 없는데,
// 재대입을 하고 있어 오류사항이다

// ---------------------------------------------

// 블록 레벨 scope / 함수 레벨 scope

// 블록 레벨 scope (let, const)
// let과 const로 선언된 변수는
// 변수가 선언된 블록 (중괄호 {}) 내부에서만 유효하다는 것을
// 의미함.
// 즉, 코드 블록 내부에서 선언한 변수(let, const)는
// 해당 블록 외부에서는 접근할 수 없다.

let foo1 = 123; // 전역 변수
const foo2 = 456; // 전역 변수

{ // 블록 레벨

  let num1 = 789; // 지역 변수
  const num2 = 0; // 지역 변수
}

console.log(foo1); // 전역변수이기 때문에(블록과 관계없음) 접근 가능
console.log(foo2); // 전역변수이기 때문에(블록과 관계없음) 접근 가능
// console.log(num1); // Uncaught ReferenceError: num1 is not defined
// console.log(num2); // Uncaught ReferenceError: num2 is not defined
//  -> 둘 다 블록레벨 스코프이기 때문에 블록 밖에서 접근할 수 없음

// -----------------------------------------------------------

// 함수 레벨 스코프 (var)
// var 키워드로 선언된 변수는 함수 내 어디서든 접근할 수 있음.
// if, for등의 일반블록은 무시하고, var로 선언된 변수가 있는
// 함수 전체에서 유효함.

var test1 = 123; // 전역 변수

{
  var test2 = 456;
}

console.log(test1);
console.log(test2);
// -> test2도 접근 가능.
// -> 왜? 함수레벨 스코프인 var는 일반블록은
//    무시하기 때문에

// 함수 안에서는 어떻게 될까?
function example() { // 이렇게 함수 형태로 만들어진
  // 코드 블록은 함수레벨 scope 라고 함.

  var test3 = '함수레벨 var 테스트';

  console.log(test3);

}

// console.log(test3);
// Uncaught ReferenceError: test3 is not defined
// -> var는 일반 블록레벨만 무시할 뿐
//    함수레벨 블록은 무시하지 못함.
// 즉, 함수 블록 안에서 선언된 var 변수는
// 함수 안에서만 사용 가능하다

example();

function example2() {

  if(true) { // 블록문(if, for, while 등) 내에서
            // 선언된 var 변수는 일반 블록 무시함
    var x = 10; // x는 블록 내부에서 선언되었지만
              // 함수 레벨 스코프를 가진 var 변수임.
  }

  console.log(x); // 블록 밖에서 변수에 접근
}

example2();

// ----------------------------------------------------------------

// 1. var의 호이스팅
// : var로 선언된 변수는 선언만 해당 스코프의 최상단으로
// 호이스팅 됨. 초기화는 원래 코드 위치에서 수행된다.

// 에러가 안나고 undefined가 찍힘.
// -> 호이스팅 되어 var a; 선언부는 최상단으로 올라감.
// -> 선언은 되어있으나 a에 값이 대입되진 않았기 때문에
// undefined를 반환하는 것임.

// 내부적으로 var a; 이렇게 선언된 상태..
console.log(a);

// 변수의 선언과 초기화
var a = 10; // 변수의 선언만이 호이스팅됨.
// 초기화 코드는 원래 위치에서 이뤄짐.


// 2. let / const 의 호이스팅
// : let/const로 선언된 변수는 선언만 해당
//  스코프의 최상단으로 호이스팅됨.
//  var와 달리, let/const로 선언된 변수는 초기화가 이루어지기
//  전에는 사용될 수 없음.

// TDZ(Temporal Dead Zone)
// 시간적으로 죽은 구역..
// 코드 실행 과정에서 특정 시점까지 변수가 접근 불가능한 상태를 의미함.
// Javascript에서 let/const 키워드로 선언된 변수가
// 초기화되기 전까지 접근할 수 없는 구간을 말함.

// let x; (내부적으로 선언은 끌어올려진 상태)
// -> x의 선언이 호이스팅됨.
//    그러나 TDZ에 놓여 초기화 전까지 접근 불가
// -> 초기화가 이루어지기 전까지 해당 변수는 TDZ에 놓이며,
// 이 기간동안 변수에 접근하려고 하면
// Cannot access 'x' before initialization 라는 에러 발생.

// console.log(x); // Uncaught ReferenceError: Cannot access 'x' before initialization

let x = 50;

console.log(x); // 50 출력

// console.log(n); // Cannot access 'n' before initialization
const n = 100;

console.log(n); // 100 출력

// -> 이러한 특성때문에 let/const 는 var보다
//    예측 가능한 코드를 작성할 수 있음 (오늘날 지향)

// ----------------------------------------------------------------------------

// JS 자료형 확인하기

// typeof 연산자 : 변수/값의 자료형을 출력하는 연산자

// undefined : 정의되지 않은 변수 / 값이 아직 대입되지 않았다.
let undef; // 변수 선언
console.log("undef : ", undef, typeof undef);


// string(문자열) : "" 또는 ''로 작성된 값
const userName = "홍길동";
console.log("name : ", userName, typeof userName);

const phone = '01012341234';
console.log("phone : ", phone, typeof phone);

const gender = 'M'; // 한 글자만 작성해도 문자열(string)
console.log("gender : ", gender, typeof gender);

// number (정수, 실수, 양수, 음수, 0 등 모든 숫자)
const age = 25;
const height = 160.5;
const eyesight = -5;

console.log("age : ", age, typeof age);
console.log("height : ", height, typeof height);
console.log("eyesight : ", eyesight, typeof eyesight);

// boolean (논리값 true/false)
const isTrue = true;
const isFalse = false;

console.log("isTrue : ", isTrue, typeof isTrue);
console.log("isFalse : ", isFalse, typeof isFalse);

// object (객체)
// 값을 여러개 저장할 수 있는 형태

// 1) 배열(Array) : 여러 값이 나열되어 있는 것의 묶음
const numbers = [10, 20, 30];

console.log("numbers:", numbers, typeof numbers);

console.log("numbers 배열 값 중 0번째:", numbers[0], typeof numbers[0]);
console.log("numbers 배열 값 중 1번째:", numbers[1], typeof numbers[1]);
console.log("numbers 배열 값 중 2번째:", numbers[2], typeof numbers[2]);
console.log("numbers 배열 값 중 3번째:", numbers[3], typeof numbers[3]);

// javascript에서의 배열은 값 추가 및 삭제 가능
// 크기가 고정되지 않고 필요에 따라 자동으로 늘어나거나
// 줄어든다.

// 2) JS 객체
// 값을 K:V (Map) 형식으로 여러개 저장하는 형태
// -> { K:V, K:V, K:V ...}

// K(key) : 값을 구분하는 이름 (변수명 비슷)
// V(value) : K에 대응되는 값 (변수에 대입되는 값 비슷)

const user = { id: "user01",
               pw: "pass01",
               userName: "홍길동"};

console.log("user:", user, typeof user);

// 객체에 존재하는 값 하나씩 얻어오기

// 방법 1 : 변수명['key']
console.log(user['id']);

// 방법 2 : 변수명.key
console.log(user.id, user.pw, user.userName);

// 함수 (function)

// 작성법
// const 변수명 = funtion() {};
// (변수명 == 함수명)

const sumFn = function(a, b) { return a + b };

/*
function sumFn(a, b) {
  return a + b
}
*/

console.log(typeof sumFn); // function

console.log(sumFn(3, 5));

// null
console.log(typeof null); // object