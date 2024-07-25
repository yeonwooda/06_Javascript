const person = {
  name: "woo",
  age: 30,
  city: "Incheon",
  address: {
    home: "bupyeong",
    zip: "1004",
  },
};

// const name = person.name;
// const age = person.age;
const { name, age } = person; // 오브젝트 드스트럭팅
const { city: homeCity } = person; //별명 붙히기
console.log(homeCity);

// home 찾기
const { home } = person.address;

const price = 3500;
const coffee = {
  name: "americano",
  price,
  shot: 2,
};
