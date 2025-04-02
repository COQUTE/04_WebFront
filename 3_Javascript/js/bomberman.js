let charX = 0;
let charY = 0;

document.addEventListener("keydown", (e) => {

  const bomberman = document.querySelector("#bomberman");

  console.log(e.key);

  switch(e.key) {
    case "ArrowUp" : charY -= 10; break;
    case "ArrowRight" : charX += 10; break;
    case "ArrowDown" : charY += 10; break;
    case "ArrowLeft" : charX -= 10; break;
    case "x": addBomb(); break;
    case "z": explosion(); break;
    default: alert("방향키, z, x만 가능");
  }

  bomberman.style.transform = `translate(${charX}px, ${charY}px)`;
});

const box = document.querySelector("#box");

const addBomb = () => {
  box.innerHTML += 
  `<img src="../../images/bomb.png"
  class='bomb' style="transform: translate(${charX}px, ${charY}px);
  position: absolute">`;
  // box.innerHTML += ..을 실행하는 과정에서 DOM이 리렌더링됨.
  // 기존에 bomberman을 가리키던 const bomberman = document.querySelector("#bomberman");
  // 더이상 유효하지 않은 변수가 됨.
  // bomberman.style.transform = 변경된 좌표;
  // 기존변수인 bomberman은 더이상 유효한 DOM 요소가 아니기 때문에 스타일 변경이 적용X
};

const explosion = () => {
  const bombs = document.querySelectorAll(".bomb");
  
  // for .. of 문 :
  // 배열같은 반복 가능한 객체의 요소를 순차적으로 순회하는 반복문
  for(let bomb of bombs) {
    bomb.src = "../../images/boomm.png";
  }
  
  // for(let i = 0; i < bomb.length; i++) {
  //   bomb[i].src = "../../images/boomm.png";
  // }
}