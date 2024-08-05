// const button = document.createElement("button");
// button.innerText = "빨강";
// const button1 = document.createElement("button");
// button1.innerText = "노랑";
// const button2 = document.createElement("button");
// button2.innerText = "초록";

// button.addEventListener("click", (e) => {
//   alert("빨간버튼 눌렀습니다.");
// });
// button1.addEventListener("click", (e) => {
//   alert("노랑버튼 눌렀습니다.");
// });
// button2.addEventListener("click", (e) => {
//   const div = document.createElement("div");
//   div.innerText = "초록버튼 눌렀습니다.";
// });

// document.body.appendChild(button);
// document.body.appendChild(button1);
// document.body.appendChild(button2);
// // 1. 빨간, 노랑,초록 버튼 누르면
// // div태그로 **버튼 눌렀습니다.
const msg = document.createElement("div");
msg.innerText = "버튼을 눌러주세요.";
document.body.appendChild(msg);

const makeButton = (color) => {
  const button = document.createElement("button");
  button.innerText = `${color}버튼`;
  button.addEventListener("click", () => {
    msg.innerText = `${color}버튼 눌렀습니다.`;
  });
  document.body.appendChild(button);
};

["red", "yellow", "green"].forEach((v) => makeButton(v));

// const btn1 = document.createElement("button");
// const btn2 = document.createElement("button");
// const btn3 = document.createElement("button");

// btn1.innerText = "빨간버튼";
// btn2.innerText = "노란버튼";
// btn3.innerText = "초록버튼";

// btn1.addEventListener("click", () => {
//   msg.innerText = "빨간 버튼을 눌렀습니다.";
// });
// btn2.addEventListener("click", () => {
//   msg.innerText = "노란 버튼을 눌렀습니다.";
// });
// btn3.addEventListener("click", () => {
//   msg.innerText = "초록 버튼을 눌렀습니다.";
// });

// document.body.appendChild(btn1);
// document.body.appendChild(btn2);
// document.body.appendChild(btn3);
