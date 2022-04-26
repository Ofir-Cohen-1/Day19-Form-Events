const image = document.querySelector("img");
const checkBox = document.querySelector("#photo");
checkBox.addEventListener("input", () => {
  image.classList.toggle("appear");
  console.log(checkBox.checked);
});
