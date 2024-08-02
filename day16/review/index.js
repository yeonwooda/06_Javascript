import { data } from "./data.js";

const container = document.querySelector(".container");

const makeIcon = (sns) => {
  const snsMap = {
    facebook: `<i class="fa-brands fa-facebook"></i>`,
    instargram: `<i class="fa-brands fa-instagram"></i>`,
    tictok: `<i class="fa-brands fa-tiktok"></i>`,
    youtube: `<i class="fa-brands fa-youtube"></i>`,
  };
  const target = Object.keys(snsMap).find(() => v == sns);
  return snsMap[target];
};

data.forEach(({ full_name, company_name, university, email, avatar, sns }) => {
  const tag = `
     <div class="profile">
      <div class="image">
        <div class="imageBox">
          <img src="${avatar}/>
        </div>
        <div class="name">${full_name}</div>
      </div>
      <div class="company">
        <span>Company:</span>
        <span>${company_name}</span>
      </div>
      <div class="university">
        <span>University</span>s
        <span>${university}</span>
      </div>
      <div class="email">
        <span>Email</span>
        <span>${email}</span>
      </div>
      <div class="sns">${makeIcon}</div>
    </div>`;

  container.insertAdjacentHTML("beforeend", tag);
});
