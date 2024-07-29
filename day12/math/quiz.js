// 유저에게 숫자 6개 물어보고
// 0개 1개 2개 3개 꽝 4개3등 5개 2등 6개 1등

import { getRandomInt } from "./index.js";

const lotto = Array(6)
  .fill()
  .map((v) => getRandomInt(1, 46));
const answer = [...prompt("숫자 6개 입력")].map((v) => Number(v));
const not = answer.filter((x) => lotto.some((v) => v == x));

const prize = {
  0: "1등",
  1: "2등",
  2: "3등",
};

console.log(`${prize[not.length] || "꽝"}입니다.`);
