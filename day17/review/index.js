import { trainers } from "./data.js";

const container = document.createElement("section");
container.style.display = "grid";
container.style.gridTemplateColumns = `repeat(2,1fr)`;
container.style.gap = "10px";

trainers.forEach((v) => {
  const tag = `
     <div class="trainer">
      <div class="imageBox">
        <img src="${v.profileImage}" alt="" />
      </div>
      <div class="info">
        <div class="title">
          <span class="name">${v.name}</span>
          <span class="position">${v.position}</span>
          <sapn class="location">${v.gymName}</sapn>
        </div>
        <div class="address">
          <span>${v.gymAddress}</span>
        </div>
        <div class="type">${v.exerciseTypes}</div>
      </div>
    </div>
    
    `;
  container.insertAdjacentHTML("beforeend", tag);
});
document.body.appendChild(container);
