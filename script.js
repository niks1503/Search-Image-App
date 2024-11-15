const search = document.querySelector("#search");
const images_container = document.querySelector(".images_container");
const showMore_btn = document.querySelector("#showMore_btn");
const accessKey = "JpdOLI233Qb8Nvh3PTZmvXSaB5CAtVlj3V4ZkoZi0JM";
let inputData = "";
let page = 1;
async function searchImages() {
  inputData = search.value.toLowerCase();
  // if (inputData === "") {
  //   images_container.innerHTML = "";
  // }
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
  page++;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  data.results.forEach((val) => {
    const img = document.createElement("img");
    img.alt = val.alt_description;
    img.src = val.urls.regular;
    images_container.appendChild(img);
  });
}

window.addEventListener("scroll", () => {
  if (window.innerHeight + 50 + window.scrollY >= document.body.offsetHeight) {
    showMore_btn.style.display = "block";
  }
});
