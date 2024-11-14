const search = document.querySelector("#search");
const accessKey = "JpdOLI233Qb8Nvh3PTZmvXSaB5CAtVlj3V4ZkoZi0JM";
let inputData = "";
let page = 1;
async function searchImages() {
  inputData = search.value.toLowerCase();
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
  const res = await fetch(url);
  const data = await res.json();
}
