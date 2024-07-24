// String -> Array

const a = "coffee".split("");
const b = [..."coffee"];
//"abCdeFGHijklM" -> 소문자만 있는 배열로 바꾸셈
const arr = [..."abCdeFGHijklM"];

const arr1 = arr.filter((v) => v === v.toLocaleLowerCase());
const arr2 = arr.map((v) =>
  v === v.toLowerCase() ? v.toUpperCase() : v.toLowerCase()
);

// 1. ... -> String -> Array
// 2. ... 배열을 찢다.
const fruist = ["tomato", "mango", "melon", "apple"];
const a0 = fruist;
const [a1, b1] = fruist;
const [a2, ...rest] = fruist;
console.log(rest[2]);
