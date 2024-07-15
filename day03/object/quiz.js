// // 1. 유저에게 책 제목, 책 가격, 책 출판사를 물어보고
// // 책을 콘솔로 오브젝트 타입으로 출력하기

// const title = window.prompt("책 제목");
// const price = window.prompt("책 가격");
// const publisher = window.prompt("책 출판사");

// const book = {
//   title: title,
//   price: price,
//   publisher: publisher,
// };

// // 2번째 방법
// // const book = {};
// // book.title = title;
// // book.price = price;
// // book.publisher = publisher;

// console.log(book);

// 2. 유저에게 mbit를 물어보고 성향을 알려주는 코드
// ex) E인가요 I인가요? E
// EX) N S N
// EX) T F T
// EX) J P J
// ->  외향적이고 상상력이 많고 이성적이고 계획적입니다.

// const use = window.prompt("E OR I ");
// const use1 = window.prompt("N OR S");
// const use2 = window.prompt("T OR F");
// const use3 = window.prompt("J OR P");

// const a = (use = true ? "외향적" : "소극적");
// const b = (use1 = true ? "직관" : "감각");
// const c = (use1 = true ? "사고" : "감정");
// const d = (use1 = true ? "판단" : "인식");

// console.log()

// const first = window.prompt("E OR I ");
// const second = window.prompt("N OR S");
// const third = window.prompt("T OR F");
// const fourth = window.prompt("J OR P");

// const mbti = {
//   e: "외향",
//   i: "내향",
//   s: "감각",
//   n: "상상",
//   t: "이상",
//   f: "감성",
//   p: "즉흥",
//   j: "계획",
// };
// console.log(
//   `당신은 ${mbti[first]} ${mbti[second]} ${mbti[third]} ${mbti[fourth]}`
// );

// 태어난 년도 입력하면 띠 나오는 프로그램
const year = Number(window.prompt("태어난 연도"));

const zodica = year % 12;

const animal = {
  0: "원숭이띠",
  1: "닭띠",
  2: "개띠",
  3: "돼지띠",
  4: "쥐띠",
  5: "소띠",
  6: "호랑이띠",
  7: "토끼띠",
  8: "용띠",
  9: "뱀띠",
  10: "양띠",
  11: "말띠",
};

console.log(`${animal[zodica]}`);
