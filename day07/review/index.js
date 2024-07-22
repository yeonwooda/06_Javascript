// // 1. 두 매개변수를 받고 큰 수를 돌려주는 화살표 함수 만들기

// const bigger = (num, num2) => {
//     const num = prompt("첫번째 수:");
//     const num2 = prompt("두번째 수 :");
//     return num > num2 ? num : num2;
// };

const bigger = (x, y) => {
  return x > y ? x : y;
};

// // 2. 하나의 매개변수를 받고 홀수 or 짝수 알려주는 함수

// const a = () => {
//   const num3 = prompt("숫자를 입력하시오.");
//   return num3 % 2 === 1 ? "짝수" : "홀수";
// };

const evenOrOdd = (x) => {
  return x % 2 == 1 ? "홀수" : "짝수";
};

// // 3. 하나의 매개변수를 받고 홀수이면 제곱해서 돌려주고, 짝수이면 두배해서 돌려주기

// const b = () => {
//   const num4 = prompt("숫자 입력");
//   return num4 % 2 === 0 ? Number(num4 ** num4) : Number(num4 * 2);
// };

const multipleOrDouble = (x) => {
  return x % 2 === 1 ? x ** x : x * 2;
};

// // 4. 하나의 매개변수를 받고 문자 길이가 6글자 보다 크면 🥕 돌려주기 아니며 🍅
// const c = () => {
//   const num5 = prompt("숫자입력");
//   return num5.length() >=6 ? num5.map(🥕) : num5.map(🍅)
// };

const isOver6 = (x) => {
  return x.length > 6 ? "🥕" : "🍅";
};
