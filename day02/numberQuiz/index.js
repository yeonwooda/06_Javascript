// 1. 태어난 년도 prompt 물어보고 만 나이 alert으로 출력
const year = window.prompt("태어난 연도:");
const age = 2024 - Number(year);
window.alert(`만 나이는 ${age}`);
// window.alert(`태어난 년도는 ${2024 - Number(year)}이군요`)

// 2. 한 변의 길이를 입력 받아 정사각형의 넓이를 출력
const square = window.prompt("한 변의 길이 입력 : ");
const side = Number(square) * Number(square);
window.alert(`정사각형의 넓이는 ${side}`);
// window.alert(`정사각형의 넓이 ${Number(side) * Number(side)}`);

// 3. 원화를 입력하면 현재 엔화를 출력하기 ex) 10000원 -> 1200엔
const won = window.prompt("원화 입력");
window.alert(`엔화 ${Number(won) * 0.12}`);
