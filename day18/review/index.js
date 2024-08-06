// 1. 유저에게 3개의 품목과 3개의 가격을 입력받고
// 수량에 따라서 총 가격이 바뀌는 프로그램 만들기
// 아아 2000 - 0 +
// 라떼 3000 - 0 +
// 총 가격 =

// 아메리카노 2500: - 0 +
// 라떼 3000: - 0 +
// 바닐라 3500: - 0 +
// 총액: 0

const [fName, sName, tName, fPrice, sPrice, tPrice] =
  prompt("3개 품목과 가격").split(" ");

const makeItem = (name, price) => {
  const itemName = document.createElement("span");
  const itemPrice = document.createElement("spna");
  const minus = document.createElement("button");
  const num = document.createElement("span");
  const plus = document.createElement("button");
  itemName.innerText = name;
  itemPrice.innerText = price;
  minus.innerText = "-";
  num.innerText = "0";
  plus.innerText = "+";
  plus.addEventListener("click", () => {
    num.innerText = Number(num.innerText) + 1;
    total.innerText = Number(total.innerText) + Number(itemPrice.innerText);
  });
  minus.addEventListener("click", () => {
    // num.innerText = num.innerText === "0" ? "0" : Number(num.innerText) - 1;

    // total.innerText =
    //   total.innerText === "0"
    //     ? "0"
    //     : Number(total.innerText) - Number(itemPrice.innerText);
    const quantity = Number(num.innerText);
    if (quantity === 0) {
      num.innerText = "0";
    } else {
      num.innerText = Number(num.innerText) - 1;
      total.innerText = Number(total.innerText) - Number(itemPrice.innerText);
    }
  });
  document.body.appendChild(itemName);
  document.body.appendChild(itemPrice);
  document.body.appendChild(minus);
  document.body.appendChild(num);
  document.body.appendChild(plus);
};

makeItem(fName, fPrice);
makeItem(sName, sPrice);
makeItem(tName, tPrice);

const total = document.createElement("span");
total.innerText = "0";
document.body.appendChild(total);
