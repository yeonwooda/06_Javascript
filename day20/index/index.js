const price = document.querySelector("#price");
const sale = document.querySelector("#sale");
const btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
  const { value } = e.target;
  if (price && sale) {
    savedPrice = price * (sale / 100);
    resultPrice = price - savedPrice;
  }
});
