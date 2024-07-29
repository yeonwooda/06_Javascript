const now = new Data();

const year = now.getFullYear();
const month = now.getMonth() + 1; // 월은 0 부터 시작하므로 1을 더합니다.
const date = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const day = now.getDay(); // 0[일요일] 1[월요일] ... 6[토요일]

now.toLocaleString(); // 7/29/2024, 2:23:45 PM(미국형식)
now.toLocaleDateString(); // 7/29/2024 (미국형식)
now.toLocaleTimeString(); // 2:23:45 PM (미국형식)
