// 1. 밑변과 높이 입력받고, 정삼각형 넓이 alert으로 출력
const num = Number(window.prompt("밑변"));
const num1 = Number(window.prompt("높이"));
window.alert(`${num * num1 * 0.5}`);

// 2. 정수 입력하고 양수 입력하면, 양수! 아니면 0 또는 음수 출력
const num2 = Number(prompt("정수 : "));
const isPositive = num > 0 ? "양수" : "음수 또는 0";
console.log(`${num2}은 ${isPositive}`);

// 3. 10000~99999 중 아무 숫자 입력하면 만천백십 붙혀서 출력
// ex) 12345 -> 1만 2천 3백 4십 5
// ex) 23232 -> 2만 3천 2백 3십 2
const num3 = Number(prompt("정수 : "));
const tenThousand = parseInt(num1 / 10000);
const thousand = parseInt((num1 % 10000) / 1000);
const hundred = parseInt((num1 % 1000) / 100);
const ten = parseInt((num1 % 100) / 10);
const one = num1 % 10;

window.alert(`${tenThousand}만 ${thousand}천 ${hundred}백 ${ten}십 ${one}`);

// 4. 정수 10000 ~ 99999 입력 받고, 100의 자리만 출력하기!
// ex) 12735 -> 700, 74636 -> 600

const num4 = Number(prompt("정수 : "));
const hundred1 = parseInt((num4 % 1000) / 100) * 100;
window.alert(`${hundred1}`);
