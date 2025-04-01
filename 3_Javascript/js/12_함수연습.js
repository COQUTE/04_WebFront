// 1. name이라는 매개변수를 받아 "Hello, [name]!"를 출력하는 함수를 선언 및 정의하고 호출하시오
function fn1(name) {
  console.log(`1번 : Hello, ${name}`);
}

fn1("김지호");

// 2. 두 개의 숫자를 매개변수로 받아 그 합을 반환하는 함수를 선언 및 정의하고 호출하시오
const fn2 = (num1, num2) => num1 + num2;

console.log("2번 : ", fn2(1, 3));

// 3. 두 개의 숫자를 매개변수로 받아 곱한 결과를 반환하는 화살표 함수를 작성
const fn3 = (num1, num2) => num1 * num2;

console.log("3번 : ", fn3(2, 2));

// 4. 두 개의 숫자를 매개변수로 받아, 첫 번째 숫자가 두 번째 숫자보다 크면 "첫 번째 숫자가 더 큽니다"를 출력하고,
// 그렇지 않으면 "두 번째 숫자가 더 크거나 같습니다"를 출력하는 함수를 선언 및 정의하고 호출하시오
function fn4(num1, num2) {
  if(num1 > num2) {
    console.log("4번 : ", "첫 번째 숫자가 더 큽니다");
  } else {
    console.log("4번 : ", "두 번째 숫자가 더 크거나 같습니다");
  }
}

fn4(1, 0);

// 5. 문자열을 매개변수로 받아 문자열의 길이를 출력하는 함수를 선언 및 정의하고 호출하시오
const calcLenth = (str) => console.log("5번 : ", String(str).length);

calcLenth("안녕하세요.");

// 6. 문자열과 반복 횟수를 매개변수로 받아, 해당 문자열을 주어진 횟수만큼 반복하여 출력하는 함수를 선언 및 정의하고 호출하시오
const reStr = (str, times) => {
  for(let i = 0; i < times; i++) {
    console.log("6번 : ", `${i}번째 ${str}`);
  }
}

reStr("홍진호", 5);

// 7. 숫자를 매개변수로 받아 그 숫자가 짝수인지 아닌지를 true 또는 false로 반환하는 함수를 선언 및 정의하고 호출하시오
function isEven(num) {
  return num % 2 === 0;
}

console.log("7번 : ", isEven(15781));

// 8. 세 개의 숫자를 매개변수로 받아 그 중 가장 큰 숫자를 반환하는 함수를 선언 및 정의하고 호출하시오
const max = (num1, num2, num3) => {
  let max = num1 > num2 ? num1 : num2;

  max = max > num3 ? max : num3;

  return max;
  
  // 내장함수 Math.max() : 전달받은 값 중 가장 큰 수 반환
  // return Math.max(num1, num2, num3);
}

console.log("8번 : ", max(19, 8, 11));

// 9. 배열을 매개변수로 받아 첫 번째 요소를 반환하는 화살표 함수를 선언 및 정의하고 호출하시오
const firstEl = (arr) => {return arr[0]};

console.log("9번 : ", firstEl([9, 4, 6]));

// 10. 배열을 매개변수로 받아 배열의 모든 숫자의 합과 평균을 객체 형태로 반환하는 함수를 선언 및 정의하고 호출하시오
const total = (arr) => {
  // let sum = 0;
  // for(let i = 0; i < arr.length; i++) {
  //   sum += arr[i];
  // }

  // [5, 7, 9]
  let sum = arr.reduce((acc, curr) => {
    return acc + curr
  });
  // 배열.reduce() : JS 배열의 메서드로(함수), 배열의 모든 요소를 순회하면서
  // 하나의 결과값을 누적하여 반환
  // acc (accumulator) : 이전 콜백 호출에서 반환된 값 (누산기 - 결과를 누적)
  // curr (currentValue) : 현재값 - 현재 처리중인 배열 요소 값

  let avg = sum / arr.length;

  return {"합" : sum, "평균" : avg};
}

console.log("10번 : ", total([5, 7, 9]));

// 11. 숫자 두 개와 연산을 수행하는 함수를 매개변수로 받아, 두 숫자에 해당 연산을 적용한 결과를 반환하는 함수를 선언 및 정의하고 호출하시오
const add = (num1, num2) => num1 + num2;

function calculate(num1, num2, operation) {
  return operation(num1, num2);
}

console.log("11번 : ", calculate(1, 3, add));

// 12. (사람의 이름)과 (인사말을 출력하는 함수)를 매개변수로 받아, 해당 이름과 인사말을 사용하여 인사를 출력하는 함수를 선언 및 정의하고 호출하시오
function greet(name, callback) {
  callback(name);
}

function sayHello(name) {
  console.log(`12번 : Hello, ${name}`);
}

function sayGoodbye(name) {
  console.log(`12번 : Bye, ${name}`);
}

greet("길동", sayHello);
greet("영희", sayGoodbye);