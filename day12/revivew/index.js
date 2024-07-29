import { data } from "./dummy.js";

// 1. credit_card: 뒤의 네자리는 남기고 나머지 *, file_name 확장자만 남기고
// money -> 반올림 첫번째 자리 $290
const newData = data.map((x) => {
  const card = [...x.credit_card]
    .map((v, i) => (i <= x.credit_card.length - 5 ? "*" : v))
    .join("");
  const [_, extension] = x.file_name.split(".");
  const newMoney = "$" + Math.round(Number(x.money.replace("$", "")) / 10) * 10;
  return { ...x, credit_card: card, file_name: extension, money: newMoney };
});

console.log(newData);

// 2. 위도, 경도, ->
// 유럽 : 위도 [10~70] and 경도 [30~60]
// 아시아 : 위도 [10~80] and 경도[60~180]
// 아메키라 : 위도[-60~60] and 경도 [-170~30]
