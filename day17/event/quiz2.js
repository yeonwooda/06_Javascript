// 유저에게 품목과 가격을 입력받고
// 장바구니 프로그램을 만들기

// 치킨 15000
// - 0 + 구매하기

// 3 구매하기 -> 치킨 값 : 45000원 알럿으로 나타내기 프로그램

const [item, price] = prompt("품목 가격").split(" ");

const minusBtn = document.createElement("button");
const plusBtn = document.createElement("button");
const num = document.createElement("span");
const basket = document.createElement("button");

minusBtn.innerText = `-`;
num.innerText = `0`;
plusBtn.innerText = `+`;
basket.innerText = `${item} 구매하기`;

minusBtn.addEventListener("click", () => {
  num.innerText = Number(num.innerText) === 0 ? 0 : Number(num.innerText) - 1;
});

plusBtn.addEventListener("click", () => {
  num.innerText = Number(num.innerText) + 1;
});

basket.addEventListener("click", () => {
  alert(
    `${item}의 ${num.innerText}개의 가격은 : ${
      Number(price) * Number(num.innerText)
    }원`
  );
});

document.body.appendChild(minusBtn);
document.body.appendChild(num);
document.body.appendChild(plusBtn);
document.body.appendChild(basket);
