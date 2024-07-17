// 코드 치면 위에서 아래로  감
// 제어문 [코드 컨트롤] - 조건문

// const num = Number(prompt("숫자 입력"));
// if (num % 2) {
//   alert(`${num}은 홀수입니다.`);
// } else {
//   alert(`${num}은 짝수입니다.`);
// }

// if (num % 2 == 0) {
//   alert(`${num}은 짝수입니다.`);
// }

// num % 2 == 1 홀수

// if (num % 2) {
//   alert(`${num}은 짝수입니다.`);
// } 코드 성립 가능

// 1. 숫자 입력받고, 양수인지 양수가 아닌지

// const num = Number(prompt("입력"));
// if (num > 0) {
//   alert("양수");
// } else {
//   alert("음수");
// }

// 2. 마포, 강남, 신사, 압구정, 신촌, 노원, 화곡, 화양
// 사는곳이 어디냐고 묻고, 위의 동네 중 하나라도 해당되면
// 사는 곳이 서울이군요
// 아니면 촌사람이군요

// const city = ["마포", "강남", "신사", "압구정", "신촌", "노원", "화곡", "화양"];
// const live = prompt("사는 곳");

// if (city.includes(live)) {
//   alert("서울사람");
// } else {
//   alert("촌사람");
// }

if (true) {
} else if (true) {
} else if (true) {
} else if (true) {
} else {
}

// 3.정수를 입력받고, 양의 홀수, 양의 짝수, 음의 홀수, 음의 짝수를
// 나타내보기

// const num1 = Number(prompt("정수입력"));

// const positive = num1 > 0;
// const negative = num1 < 0;
// const odd = num1 % 2;
// const even = !(num % 2);

// if (positive && num % odd) {
//   alert("양의 홀수");
// } else if (positive && even) {
//   alert("양의 짝수");
// } else if (negative && odd) {
//   alert("음의 홀수");
// } else if (negative && even) {
//   alert("음의 짝수");
// } else {
//   alert("0 입니다.");
// }

// // if (num1 > 0 && num % 2 {
// //     alert("양의 홀수");
// //   } else if (num1 > 0 && !(num % 2)){
// //     alert("양의 짝수");
// //   } else if (num1 < 0 && num % 2) {
// //     alert("음의 홀수");
// //   } else if (num1 < 0 && !(num % 2)){
// //     alert("음의 짝수");
// //   } else {
// //     alert("0 입니다.");
// //   }

// 4. 영어 점수를 입력 받고, 100이면 만점
// 90점 이상 A
// 80 B
// 70 C
// 그 외 F

// const score = Number(prompt("영어 점수"));
// if (score == 100) {
//   alert("만점");
// } else if (score >= 90) {
//   alert("A");
// } else if (score >= 80) {
//   alert("B");
// } else if (score >= 70) {
//   alert("C");
// } else {
//   alert("F");
// }

// 5. 각도 물어보고, 평각, 둔각, 예각, 직각을 알려주는 프로그램

const num = Number(prompt("각도"));

if (num === 180) {
  alert("평각");
} else if (num >= 91) {
  alert("둔각");
} else if (num >= 90) {
  alert("직각");
} else {
  alert("예각");
}

// 6. 키와 몸무게를 물어보고, 몸무게/ 키의 제곱을 한 결과
// 25를 넘으면 비만, 25~23이면 과체중, 18.5 ~ 23 정상, 18.5 저체중
// 알려주는 프로그램

const num1 = Number(prompt("키"));
const num2 = Number(prompt("몸무게"));

const num3 = num2 % num1;

if (num3 >= 25) {
  alert("비만");
} else if (num3 >= 23) {
  alert("과체중");
} else if (num3 >= 18.5) {
  alert("정상");
} else {
  alert("저체중");
}
