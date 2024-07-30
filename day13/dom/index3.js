// 1. 컨테이너 새로 만들어서 넣기
// document.createElement("div");

// 2. 만들어진 컨테이너를 가져와서 넣기
// const container = document.querySelector(".container");

// const colors = [
//   "#55efc4",
//   "#81ecec",
//   "#74b9ff",
//   "#a29bfe",
//   "#dfe6e9",
//   "#00b894",
//   "#00cec9",
// ];

// colors.forEach((v) => {
//   const div = document.createElement("div");
//   div.className = "box";
//   div.style.backgroundColor = v;
// //   container.appendChild(div);
// });

// 200개
const container = document.querySelector(".container");

const hex = [..."123456789abcdef"];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min); // 최댓값은 제외, 최솟값은 포함
}

// 헥사코드 색깔 만들기 함수
const makeColor = () => {
  "#" +
    Array(6)
      .fill()
      .map((v) => hex[getRandomInt(0, hex.length)])
      .join();
};

// 200개 배열에 컬러함수 실행 채우기
const colors = Array(200).fill.map((v) => {
  makeColor();
});

// 200개 배열을 순회해서 div 만들고 색채우고 컨테이너에 넣기

colors.forEach((v) => {
  const div = document.createElement("div");
  div.className = "box";
  div.style.backgroundColor = v;
  container.appendChild(div);
});
