// 1.각도 구하기

const angle = Number(prompt("각도"));

if (angle === 1800) {
  alert("평각");
} else if (180 > angle && angle > 90) {
  alert("둔각");
} else if (180 === 90) {
  alert("직각");
} else if (90 > angle && angle > 0) {
  alert("예각");
} else {
  alert("오류");
}
// 2. 유저에게 비밀번호 설정을 물어보고
// !@#* 중 하나라도 없으면 특수문자를 넣으세요
// 비밀번호 시작이 IT로 시작안하면  IT로 시작하세요
// 비밀번호 길이가 6글자 이하이면 6글자 보다 길어야해요
// 위 설정이 모두 통과되면 비밀번호 설정 완료

// const use = prompt("비밀번호");
// const use1 = use.includes[("!", "@", "#", "*")];
// const use2 = use.startsWith("IT");
// const use3 = use.length >= 6;

// if (use1) {
//   alert("특수문자 다시");
// } else if (use2) {
//   alert("IT 시작");
// } else if (use3) {
//   alert("6글자보다 길어야함");
// } else {
//   완료;
// }

const pw = prompt("비밀번호");

if (
  !pw.includes("!") &&
  !pw.includes("@") &&
  !pw.includes("#") &&
  !pw.includes("*")
) {
  alert("특수문자");
} else if (!pw.startsWith("IT")) {
  alert("IT시작");
} else if (pw.length <= 6) {
  alert("6글자 이상");
} else {
  alert("설정 완료");
}
