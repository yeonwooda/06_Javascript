// 1. 좌석 그리드 만들기
// const container = document.createElement("section");
// container.style.display = "grid";
// container.style.gridTemplateColumns = "repeat(10,1fr)";

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// num.fill().forEach((v) => {
//   const box = document.createElement("div");
//   box.style.width = "100px";
//   box.style.height = "100px";
//   box.innerText = v;
//   box.style.backgroundColor = "pink";
//   container.appendChild(box);
// });

// document.body.appendChild(container);

const seatsBox = document.createElement("section");
seatsBox.style.display = "grid";
seatsBox.style.gridTemplateColumns = "repeat(10,1fr)";

const col = [..."ABCDEFGHIJKL"];
const row = [..."123456789"]; // ... -> 1부터 9까지 배열
row.push("10");
const seats = col.map((alpha) => row.map((num) => alpha + num));
console.log(seats);
seats.forEach((arr) =>
  arr.forEach((v) => {
    const box = document.createElement("div");
    box.style.width = "50px";
    box.style.height = "50px";
    box.style.display = "flex";
    box.style.alignItems = "center";
    box.style.justifyContent = "center";
    if ([..."ABCD"].some((x) => v.includes(x))) {
      box.style.border = "1px solid yellow";
    } else if ([..."EFGHI"].some((x) => v.includes(x))) {
      box.style.border = "1px solid red";
    } else {
      box.style.border = "1px solid black";
    }
    box.innerText = v;
    seatsBox.appendChild(box);
  })
);

document.body.appendChild(seatsBox);
