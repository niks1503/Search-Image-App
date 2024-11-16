const search = document.querySelector("#search");
const images_container = document.querySelector(".images_container");
const showMore_btn = document.querySelector("#showMore_btn");
const accessKey = "JpdOLI233Qb8Nvh3PTZmvXSaB5CAtVlj3V4ZkoZi0JM";
let inputData = "";
let page = 1;

async function searchImages() {
  inputData = search.value.toLowerCase();

  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
  page++;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  data.results.forEach((val) => {
    const img_div = document.createElement("div");
    img_div.classList.add("image_div");
    const title_h4 = document.createElement("h4");
    title_h4.classList.add("title_h4");
    title_h4.textContent = val.alt_description;
    const img = document.createElement("img");
    img.alt = val.alt_description;
    img.src = val.urls.regular;
    img_div.appendChild(img);
    img_div.appendChild(title_h4);
    images_container.appendChild(img_div);
  });
}

window.addEventListener("scroll", () => {
  if (window.innerHeight + 50 + window.scrollY >= document.body.offsetHeight) {
    showMore_btn.style.display = "block";
  }
});
