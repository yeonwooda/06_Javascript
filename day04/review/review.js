// megacoffee
// 메뉴 : 아아, 라떼, 아이스티
// 쿠키 메뉴 : 초코, 녹차, 마카다미아
// 아아 : 2000, 5
// 라떼 : 3000, 150
// 아이스티 : 2500, 200

// 쿠키 메뉴 : 초코, 녹차, 마카다미아
// 초코 : 2500, 300
// 녹차 : 2500, 300
// 마카다미아 ; 3000, 400

// 유저에게 커피 메뉴 (셋 중 하나 고르고), 쿠키 메뉴(셋중에 하나 고르고 )
// 구매한 메뉴는  아아와 녹차,
// 구매한 가격은: 4500
// 총 칼로리: 305

const coffee = window.prompt("아아, 라떼, 아이스티 중 하나고르세요");
const cookie = window.prompt("초코, 녹차, 마카다미아 중 하나고르세요");

const coffeeMenu = {
  아아: {
    price: 2000,
    kcal: 5,
  },
  라떼: {
    price: 3000,
    kcal: 150,
  },
  아이스티: {
    price: 2500,
    kcal: 200,
  },
};

const cookieMenu = {
  초코: {
    price: 2500,
    kcal: 300,
  },
  녹차: {
    price: 2500,
    kcal: 300,
  },
  마카다미아: {
    price: 3000,
    kcal: 400,
  },
};

window.alert(`선택한 메뉴 : ${coffee}, ${cookie} 가격 : ${
  coffeeMenu[coffee]["price"] + cookieMenu[cookie]["price"]
} 칼로리 : ${coffeeMenu[coffee]["kcal"] + cookieMenu[cookie["kcal"]]}
  `);
