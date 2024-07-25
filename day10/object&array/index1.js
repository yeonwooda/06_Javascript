// 기본 : 숫자, 문자, 불리언, Undefined, Null
// 참조 : object -> {}, array -> []
const book = Object();
const pizza = Array(10).fill("🍕"); // 피자 이모티콘으로 배열 10개가 채워지는 거
const arr = Array(10).fill(""); // 빈 문자열로 10개가 채워지는거
const arr1 = Array(10)
  .fill("")
  .map((v) => !!v); // false로 가득찬 배열 10개로 나옴

const ten = Array(1001)
  .fill(0)
  .map((v, i) => i);

console.log(ten);

// 0번째붕터 1000있는데 홀수는 그대로 나오고 짝수는 피자 이모티콘 나오게

const ten1 = Array(1001)
  .fill(0)
  .map((v, i) => (i % 2 == 1 ? i : "🍕"));

// 3, 6, 9 -> [1,1000] -> 3,6,9 아닌 친구들은 숫자, 이면 👏

const num = Array(1001)
  .fill(0)
  .map((v, i) => String(i + 1)) // 1 2 3 13
  .map((v) =>
    v.includes("3") || v.includes("6") || v.includes("9") ? "👏" : v
  )
  .map((v) => (v == "👏" ? "👏" : Number(v)));
