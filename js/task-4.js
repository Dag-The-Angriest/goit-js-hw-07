const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    form.elements.email.value.trim() === "" ||
    form.elements.password.value.trim() === ""
  ) {
    alert("All form fields must be filled in");
  }
  const obj = {};

  const formData = new FormData(form);
  const email = formData.get("email");
  const password = formData.get("password");
  obj.email = email.trim();
  obj.password = password.trim();
  console.log(obj);

  form.reset();
});
