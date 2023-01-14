const inputRef = document.getElementById("validation-input");

const validationByLength = (event) => {
  if (inputRef.dataset.length == event.currentTarget.value.length) {
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.add("invalid");
  }
};

inputRef.addEventListener("blur", validationByLength);
