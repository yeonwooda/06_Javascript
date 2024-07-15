// 문자 타입 : '', " ", ` `
// 숫자 : 100, 3.14

// 문자 -> 숫자
// 1. Number("문자")
// 2. parseInt("문자") parse[해석하다]Int[정수로]
const num = Number("100");
const num3 = parseInt("100");

// 유저한테 숫자 prompt로 두 번 입력받아서
// 두 숫자의 합을 alert으로 나타내기

const num1 = window.prompt("숫자입력");
const num2 = window.prompt("숫자입력 2");

window.alert(Number(num1) + Number(num2));

// 파트장님 코드
const first = window.prompt("첫 번째 수 입력");
const second = window.prompt("두 번째 수 입력");
const sum = Number(first) + Number(second);

window.alert(`두 수의 합은 ${sum}입니다.`);

// 숫자 -> 문자
// 1. String(숫자)
const str = String(100); // "100"
// 2. ""+ anyType
const str1 = 100 + ""; // "100"

// 불리언 타입 [true or false]
const bool = true;
const bool1 = false;
const bool2 = "true"; // 문자타입
const bool3 = "false"; // 문자타입

// Null 타입[비어있음]
// Undefined 타입[정의 되지 않음]

// truthy value : 아래꺼 빼고 다 true
// falsy value : "" , 0, -0, null, undefined 만 false
const i = Boolean(""); //false
