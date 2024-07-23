const menu = [americano, latte, mint, choco, valina];

// 1. 5글자 이하면 소문자로 콘솔보여주고 아니면 대문자로 콘솔
menu.forEach((v) => {
  const result = v.length <= 5 ? v.toLowerCase() : v.toUpperCase();
  console.log(result);
});

// 2. 글자가 짝수개 이면서, n이 들어가는지 확인 하는 코드
menu.some((v) => {
  return v.length % 2 == 0 && v.includes("n");
});
