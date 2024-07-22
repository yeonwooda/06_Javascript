// const arr = [1, 2, 3, 4, 5];
// const test = (x) => {
//   console.log(x + 100);
// };

// arr.forEach(test);

const icecream = ["mint", "choco", "banana"];

const upper = (x) => {
  console.log(x.toUpperCase());
};

icecream.forEach(upper);

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = num.some((x) => {
  return x % 2;
});

// 1. 아이스크림 배열에 알파벳 a가 하나라도 있는지 확인해주는 코드
const result1 = icecream.some((x) => x.includes("a"));

console.log(result1);

const fruits = [
  "apple",
  "peach",
  "tomato",
  "plum",
  "pear",
  "durian",
  "grape",
  "lemon",
];

// 2. 글자가 4글자이면서 알파벳 r 포함하는 단어가 있나
const result2 = fruits.some((x) => x.length == 4 && x.includes("r"));

// 3. 글자가 홀수이면서, p로 시작하는 단어가 있니
const result3 = fruits.some((x) => x.length % 2 && x.startsWith("p"));

console.log(result2);
console.log(result3);

// 요약
const even = (x) => x % 2 == 0;
const isLength5 = (x) => x.length == 5;

// 4. 모음으로 시작하는 단어가 있나
const vowels = ["a", "e", "i", "u", "o"];
const result4 = fruits.some((fruits) =>
  vowels.some((x) => fruits.startsWith(x))
);
console.log(result4);

// 5. [k,b,s]에서 하나라도 포함하는 과일 단어가 있니?
const alphabet = ["k", "b", "s"];
const result5 = fruits.some((fruits) =>
  alphabet.some((word) => fruits.includes(word))
);

// // 6. 뉴스 기사를 가져오고, 유저가 입력한 단어들 포함되는지 물어보는 코드
// const news = prompt("입력한 단어");

// const result6 = news.some(() => {
//     news.includes(word) === news ? "포함" : "불포함";});

// - 뉴스기사는 변수에 넣고
const newsList = `What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

`.split(" ");

// - prompt로 찾고 싶은 단어들 입력 ; love party
const findWordList = prompt("찾고 싶은 단어들").split(" ");

// - 해당단어는 포함 합니다. 안합니다. 코드
const result7 = newsList.some((word) => findWordList.some((x) => word === x));
alert(`해당 단어들은 ${result7 ? "포함합니다" : "포함안합니다"}`);
