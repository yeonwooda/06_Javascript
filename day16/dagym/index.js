import { data } from "./data.js";

const container = document.querySelector(".container");

data.forEach(({ gymName, gymPhotoSmall, tags, review, price }) => {
  const tag = `
        <div class="dagym">
      <div class="image">
        <div class="imageBox">
          <img
            src=${gymPhotoSmall}
          />
        </div>
      </div>
      <div class="box">
        <div class="info">
          <div class="tags">${tags}</div>
          <div class="gymName">${gymName}</div>
          <div class="review">${review}</div>
        </div>
        <div class="low">
            <span>${price}</span>
          </div>
        </div>
      </div>
    
    `;

  container.insertAdjacentHTML("beforeend", tag);
});

document.body.appendChild(container);
