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

// 가격에 천원 더해줘 +=
const newStatusbar = statusbar.map((v) => (v.price += 1000));

// map 프라푸치노는 할인율 30% 먹여서 다시 콘솔로 보여주셈

starbucks.map((v) => {
  //   if (v.name.includes("프라푸치노")) {
  //     v.price = v.price * 0.7;
  //   }

  v.price = v.name.includes("프라푸치노") ? v.price * 0.7 : v.price;

  return v;
});

// kcal < 200 작으면 천원 할인, 아니면 천원 추가 이벤트
starbucks.map((v) => {
  v.price = v.kcal < 200 ? v.price - 1000 : v.price + 1000;
  return v;
});

// 모든 메뉴 이름 앞에 제로 붙히고, kcal 0
starbucks.map((v) => {
  v.name = "제로" + v.name;
  kcal = 0;
  return v;
});

// 프라푸치노만 살리기
starbucks.filter((v) => v.name.includes("프라푸치노"));

// 가격이 5500원 이하인 친구들만 보고싶어
starbucks.filter((v) => v.price <= 5500);

// 5000원보다 비싸고 200칼로리보다 작은거 보고시퍼
starbucks.filter((v) => v.price > 5000 && v.kcal <= 200);
