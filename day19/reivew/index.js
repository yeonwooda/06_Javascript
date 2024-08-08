// width:100px, height: 100px 네모 박스 있음
// 크게 -> 200px 200px [작게]
// 바탕:검은색 -> 바탕: 흰색
// 테두리: 둥글게 -> 테두리: 직각

const object = document.createElement("div");
object.style.width = "100px";
object.style.height = "100px";
object.style.border = "1px solid black";

const sizeBtn = document.createElement("button");
sizeBtn.innerText = "크게";
sizeBtn.addEventListener("click", () => {
  if (sizeBtn.innerText == "크게") {
    object.style.width = "200px";
    object.style.height = "200px";
    sizeBtn.innerText = "작게";
  } else {
    object.style.width = "100px";
    object.style.height = "100px";
    sizeBtn.innerText = "크게";
  }
});

const colorBtn = document.createElement("button");
colorBtn.innerText = "검은색";
colorBtn.addEventListener("click", () => {
  if (colorBtn.innerText == "검은색") {
    object.style.backgroundColor = "black";
    colorBtn.innerText = "흰색";
  } else {
    object.style.backgroundColor = "white";
    colorBtn.innerText = "검은색";
  }
});

const shapeBtn = document.createElement("button");
shapeBtn.innerText = "둥글";
shapeBtn.addEventListener("click", () => {
  if (shapeBtn.innerText == "둥글") {
    object.style.borderRadius = "9999px";
    shapeBtn.innerText = "네모";
  } else {
    object.style.borderRadius = "0px";
    shapeBtn.innerText = "둥글";
  }
});

document.body.appendChild(object);
document.body.appendChild(sizeBtn);
document.body.appendChild(colorBtn);
document.body.appendChild(shapeBtn);
