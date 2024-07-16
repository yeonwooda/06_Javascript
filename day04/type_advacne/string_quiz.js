// // 1. 유저에게 카페 음료를 물어보고
// // 에이드가 포함되면 에이드 주문 아니면 음료 주문 나오는 코드

// const beverage = prompt("음료 주문");
// const order = beverage.includes("에이드") ? "에이드 주문" : "음료 주문";
// alert(`${order}`);

// // 2. 영어단어 아무거나 물어보고
// // 알파벳 'e'가 몇번째인지 알려주는 코드 없으면 없음표시

// const word = prompt("영단어");
// const index = word.indexOf("e") == -1 ? "없음" : word.indexOf("e");
// alert(`알파벳 e는 ${index}`);

// 3. 영어 문장을 입력해서 배열화 시키기
// ex) i am hungry -> [i, am, hungry]

const semtemce = prompt("영어 문장 입력");
console.log(semtemce.split(""));

// 4. 영단어 입력하고, 알파벳 하나 입력하고, 숫자입력하고
// apple, 1, 3 -> appappapp
// banana, n , 3 -> bababa
// fine, i, 5 -> fffff

const word1 = prompt("영단어 입력");
const alpha = prompt("알파벳입력");
const num = Number(prompt("숫자입력"));

const result = word1.slice(0, word1.indexOf(alpha)).repeat(num);
console.log(result);
