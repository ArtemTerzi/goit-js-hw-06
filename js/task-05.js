const inputRef = document.getElementById("name-input");
const outputRef = document.getElementById("name-output");

inputRef.addEventListener("input", (event) => {
  outputRef.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    outputRef.textContent = "Anonymous";
  }
});
