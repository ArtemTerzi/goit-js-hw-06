function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const featureBlock = document.getElementById("controls");
const inputRef = featureBlock.firstElementChild;
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesRef = document.getElementById("boxes");

function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    const boxSize = 30 + 10 * i;
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  boxesRef.append(...boxes);
}

createBtn.addEventListener("click", () => {
  createBoxes(inputRef.value);
});

destroyBtn.addEventListener("click", () => (boxesRef.innerHTML = ""));
