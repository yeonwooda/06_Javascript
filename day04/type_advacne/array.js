const array = [];
array.push(1);
array.push(2);
array.push(3);
console.log(array);

// 유저에게 커피메뉴 영어로 3번 물어보고
// 배열로 대문자화된 커피메뉴 출력하기

// americano, latte, mint
// [AMERICANO, LATTE, MINT]

const first = prompt("커피 입력").toUpperCase();
const second = prompt("커피입력").toUpperCase();
const third = prompt("커피입력").toUpperCase();

const menu = [];
menu.push(first);
menu.push(second);
menu.push(third);

console.log(menu);
