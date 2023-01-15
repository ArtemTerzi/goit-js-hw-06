const inputRef = document.getElementById("validation-input");

const validationByLength = (event) => {
  if (inputRef.dataset.length == event.currentTarget.value.length) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
};

inputRef.addEventListener("blur", validationByLength);
