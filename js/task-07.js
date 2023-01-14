const textRef = document.getElementById("text");
const inputRef = document.getElementById("font-size-control");

const fontSizeChanger = (event) =>
  (textRef.style.fontSize = `${event.currentTarget.value}px`);

inputRef.addEventListener("input", fontSizeChanger);
