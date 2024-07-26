//reduce : 누적시키다

// 0 스타드 1값
[1, 2, 3, 4].reduce((acc, cur) => {
  console.log({ acc, cur });
  return acc + cur;
}, 0);

// [0 ~ 100]까지의 합

// Array(100).fill().map((v,i)=> i + 1)  1부터 100까지 채워지는
Array(100)
  .fill()
  .map((v, i) => i + 1)
  .reduce((acc, cur) => acc + cur, 0);

const a = [..."hello"].join(); // 쉼표
const b = [..."hello"].join(""); // 쉼표 없음

// ["AAA", "BBB","CCC","DDD"] -> ["aaa","bbb","ccc","ddd"]

const a1 = ["AAA", "BBB", "CCC", "DDD"].map((v) => v.toLowerCase);

// "abstract algebra" => A만 대문자
const word = "abstract algebra";
const result = [...word].map((v) =>
  [..."aA"].some((i) => v === i) ? v.toUpperCase() : v.toLowerCase
);
