export const makeSeats = () =>
  Array(6 * 16)
    .fill()
    .map((v, i) => ({
      col: makeColumn(i),
      row: makeRow(i),
      state: makeState(i),
    }));

const makeColumn = (x) => [..."ABCDEF"][x % 6];
const makeRow = (x) => parseInt(x / 6) + 1;
const makeState = (i) => {
  const x = parseInt(i / 6);
  const redLine = [0, 14, 15, 16].some((v) => v == x) && "red";
  const blueLine = [1, 2, 3, 4].some((v) => v == x) && "blue";
  const greenLine =
    [5, 6, 7, 8, 9, 10, 11, 12, 13].some((v) => v == x) && "green";
  return redLine || blueLine || greenLine;
};
