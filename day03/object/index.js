const americano = {
  name: "아메리카노",
  price: 2000,
  shot: 2,
  bean: "에티오피아",
};

console.log(americano.name);
console.log(americano.bean);

console.log(americano["name"]);
console.log(americano["shot"]);

// object에 디카페인 속성 추가
americano.decaffein = false;
// console.log(americano);

// object에 속성 삭제
delete americano.shot;

// console.log(americano["shot"]); // undefined false

// object에 속성 존재 여부
console.log("price" in americano); // 있으면 true 없으면 false
