// 1. 영단어 입력 받고 대문자화해서 콘솔 찍기

// const word = prompt("영단어 입력");
// console.log(`${word.toUpperCase()}`);

const word = prompt("영단어 입력").toUpperCase();
console.log(word); /* 재사용 */

console.log(prompt("영단어 입력").toUpperCase()); /* 재사용 불가 */

// 2. 영문장 입력 받고 배열화 시켜서 두번째 단어 출력
// ex) I am hungry -> am

// const word1 = prompt("문장 입력");
// const result = word1.split("".indexOf());

console.log(prompt("영문장 입력").split("")[1]);

// 3. 유저에게 커피 음료 한번에 3개 입력 받고
// ex) 아아 라떼 초코우유 ['아아', '라떼', '초코우유']

// const coffee = prompt("음료1");
// const coffee1 = prompt("음료2");
// const coffee2 = prompt("음료3");

console.log(prompt("커피 여러개 입력").split(" "));
