// 유저에게 박스 갯수 물어보고
// 넓이와 높이 물어보고
// 배경색 물어보고
// 그리드 형태로 컬럼 몇개로 할건지 물어보고
// 갭도 물어보고
// 결과 나타내기

// const arr = [content, color, width, height, grid, gap]
//   .prompt("내용 색깔 넓이 높이 그리드 갭")
//   .split(" ");

// arr.forEach((v) => {
//   return v[0];
// });
// const div = document.createElement("div");

// div.style.width = width;
// div.style.height = height;
// div.style.backgroundColor = color;
// div.style.display = "grid";
// div.style.grid = grid;
// div.style.gap = gap;

// document.body.appendChild(div);

const [boxCount, width, height, bg, column, gap] = prompt(
  "박스갯수, 넓이, 높이, 배경색, 몇컬럼, 캡"
).split(" ");

const container = document.createElement("section");
container.style.display = "grid";
container.style.gridTemplateColumns = `repeat(${Number(column)},1fr)`;
container.style.gap = gap + "px";

Array(Number(boxCount))
  .fill()
  .forEach((v) => {
    const box = document.createElement("div");
    box.style.width = width + "px";
    box.style.height = height + "px";
    box.style.backgroundColor = bg;
    container.appendChild(box);
  });

document, body.appendChild(container);
