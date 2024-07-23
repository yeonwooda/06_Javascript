const arr = [1, 2, 3, 4, 5];

// map : 새롭게 바꿀게
const allOneArr = arr.map(() => 1); // 모두 1
const restArr = arr.map((v) => v % 2); // 나머지 수
const chickOrHam = arr.map((v) => (v % 2 ? "🍔" : "🍗")); // 홀수면 "🍔" 짝수면 "🍗"

const menu = ["toast", "sandwich", "taco", "pizza", "ramen", "cookie"];

// t로 시작하면 문자의 길이로 바꾸고, 아니면 대문자로 바꾸기
const newmenu = menu.map((v) =>
  v.startsWith("t") ? v.length : v.toUpperCase()
);

// 첫 번째 글자와 마지막 글자가 같다면 "🥚" 아니면 대문자
menu.map((v) => (v[0] == v[v.length - 1] ? "🥚" : v.toUpperCase()));

// filter : 걸러주기
const arr1 = [1, 2, 3, 4, 5];

// return true 이면 남고 false 이면 사라짐
const under3 = arr1.filter((v) => v < 3);

const oddArr = arr1.filter((v) => v % 2 == 1);

const arr2 = [5, 2, 12, 7, 3, 9];
arr2.sort((v, i) => v - i);
