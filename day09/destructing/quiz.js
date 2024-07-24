// 유저에게 두 단어를 입력 받고
// 배열로 바꾸기
// ex) ice coffee
// [i,c,e,c,o,f,f,e,e]

const [a, b] = prompt("단어 입력").split(" ");
const arr = [...a, ...b];
console.log(arr);
