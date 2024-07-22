// const test = (x) => {
//   console.log("코리아");
//   x();
//   console.log("아이티");
// };

// const icecream = () => {
//   alert("아이스크림");
// };

// test(icecream);

// f(x) -> f(g(x)) [합성함수 | 콜백함수]
const cook = (recipe) => {
  console.log("요리 준비");
  recipe();
  console.log("요리 완료");
};

const taco = () => {
  console.log("살사소스 준비");
  console.log("나초칩 준비");
  console.log("난 준비");
  console.log("고기 준비");
  console.log("타코 완성");
};

const rame = () => {
  console.log("물");
  console.log("물");
  console.log("물");
  console.log("물");
};

cook(taco);
cook(ramen);

cook(() => {
  console.log("밀가루");
  console.log("물");
  console.log("물");
});
