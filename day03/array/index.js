// 기본 타입 : 문자열, 숫자, 불리언, null, undefined
// 참조 타입 : 배열

// 변수 담기
const ages = [18, 21, 22, 31, 23, 28];
console.log(ages);
console.log(ages[0]); // 0번째 나이가 나옴 18
console.log(ages[3]); // 3번째 나이가 나옴 31

const food = ["짜장면", "떡볶이", "마라탕", "마라샹궈", "우동", "삼계탕"];
console.log(`오늘은 복날이니 ${food[5]} 먹자`);

const paik = [
  ["아메리카노", "라떼", "바닐라라떼"],
  ["미숫가루", "빽스치노", "레몬에이드"],
];

console.log(`${paik[0][1]}와 ${paik[1][2]}`); // 라떼와 레몬에이드 마실래

const coffee = ["메가리카노", "꿀아메리카노", "카라멜마끼야또"];
const beverage = ["아이스티", "자몽에이드", "체리콕"];
const dessert = ["쿠키", "마카롱", "케이크"];
const megacoffee = [coffee, beverage, dessert];
