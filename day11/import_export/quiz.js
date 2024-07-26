import { data1 } from "./data.js";

data1;
// 1. 아까 받았던 모카루 데이터 여기로 import하기

// 2. full_name을 대소문자로 바꿔서 나타내고,
// 달러를 엔화로 바꾸기

// 3. credit_card = > 앞에 4자리만 살리고 나머지는 ***로 바꾸기
data.map((x) => {
  const credit_card = [...x.credit_card]
    .map((v, i) => (i < 4 ? v : "*"))
    .join("");
  return { ...x, credit_card };
});
