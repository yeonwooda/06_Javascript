// 현재 시간이 50분부터 정각이면 쉬는시간이다 아니면 수업시간이다
// 월요일부터 금요일

// const now = new Data();

// now.

// ? alert("수업시간"):
//  alert("수업시간")
const date = new Date();

const isWeekDay = date.getDay() != 0 && date.getDay() != 6;
const isClassTime = [19, 20].some((v) => v == now.getHours());
const isBreackTime = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59].some(
  (v) => v == date.getMinutes()
);
const isValid = isWeekDay && isClassTime && isBreackTime;

const msg = isValid ? "쉬는시간" : "수업시간";
alert(msg);
