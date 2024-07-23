const products = [
  { name: "apple", price: 200 },
  { name: "banana", price: 300 },
  { name: "peach", price: 350 },
];

// 속성추가
const a = products.map((v) => {
  v.priceWihtTax = v.price * 1.1;
  return v;
});

console.log(a);

const starbucks = [
  {
    name: "아메리카노",
    price: 4500,
    kcal: 1,
  },
  {
    name: "카페 라떼",
    price: 5500,
    kcal: 180,
  },
  {
    name: "카페모카",
    price: 6000,
    kcal: 290,
  },
  {
    name: "프라푸치노",
    price: 6000,
    kcal: 145,
  },
  {
    name: "자바칩 프라푸치노",
    price: 5500,
    kcal: 340,
  },
];

// 이름에 라떼 또는 프라푸치노가 들어가면, 오프젝트에 hasMilk: true, hasMilk: false

starbucks.map((v) => {
  v.hasMilk = v.name.includes("라떼") || v.name.includes("프라푸치노");
  return v;
});
