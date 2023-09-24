let value = 1; // начальное значение

function increaseValue(id, buttonId)  {
  let valueElement = document.getElementById(id);
  let value = parseInt(valueElement.innerHTML);
  let buttonElement = document.getElementById(buttonId);
  value++;
  valueElement.innerHTML = value;
  if (value === 1) {
    buttonElement.style.opacity = '0.5';
  } else {
    buttonElement.style.opacity = '1';
  }
}

function decreaseValue(id, buttonId) {
  let valueElement = document.getElementById(id);
  let value = parseInt(valueElement.innerHTML);
  let buttonElement = document.getElementById(buttonId);
  if (value > 1) { // проверяем, что значение больше нуля
    value--;
    valueElement.innerHTML = value;
    if (value === 1) {
      buttonElement.style.opacity = '0.5';
    } else {
      buttonElement.style.opacity = '1';
    }
  }
}



// if (value = 1) {
//     buttonElement.disabled = true;
//   } else {
//     buttonElement.disabled = false;
//   