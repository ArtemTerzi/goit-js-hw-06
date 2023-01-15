const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені (All fields must be filled).");
  }

  const user = {
    email: email.value,
    password: password.value,
  };

  if (email.value !== "" && password.value !== "") {
    console.log(user);
    event.currentTarget.reset();
  }
});
