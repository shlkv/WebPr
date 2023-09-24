const showFormBtn = document.getElementById("showFormBtn");
const hideFormBtn = document.getElementById("hideFormBtn");
const form__submiter = document.getElementById("form__submiter");
const myForm = document.getElementById("form__modal");


showFormBtn.addEventListener("click", () => {
  myForm.style.display = "block"; // показываем форму при клике на кнопку
});

hideFormBtn.addEventListener("click", () => {
  myForm.style.display = "none"; // скрываем форму при клике на кнопку
});
form__submiter.addEventListener("click", () => {
  myForm.style.display = "none"; // скрываем форму при клике на кнопку
});


