const pizzas = [
    { id:1, name: 'Итальянская', type: 'spicy', filling:'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базиликТомат, шампиньон, сыр, оливки, чили, соус, тесто, базилик', img:'../img/pizzas/01.png', price: 699},
    { id:2, name: 'Маргарита', type: 'meaty', filling:'Тесто со шпинатом, молодой сыр и колбаски, много колбасок', img:'../img/pizzas/02.png', price: 479},
    { id:3, name: 'Барбекю', type: 'meaty', filling:'Циплёнок (маленький кура), оливки, моцарелла, соус барбекю', img:'../img/pizzas/03.png', price: 699},
    { id:4, name: 'Вегатерианская', type: 'vegan', filling:'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик', img:'../img/pizzas/04.png', price: 399},
    { id:5, name: 'Мясная', type: 'meaty', filling:'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик', img:'../img/pizzas/05.png', price: 699},
    { id:6, name: 'Овощная', type: 'vegan', filling:'Тесто со шпинатом, молодой сыр и колбаски, много колбасок', img:'../img/pizzas/06.png', price: 479},
    { id:7, name: 'Римская', type: 'spicy', filling:'Циплёнок (маленький кура), оливки, моцарелла, соус барбекю', img:'../img/pizzas/07.png', price: 699},
    { id:8, name: 'Грибная', type: 'cheese', filling:'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик', img:'../img/pizzas/08.png', price: 399},
    { id:9, name: 'Сырная', type: 'cheese', filling:'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик', img:'../img/pizzas/09.png', price: 699},
    { id:10, name: 'Четыре сыра', type: 'cheese', filling:'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик', img:'../img/pizzas/10.png', price: 479},
    { id:11, name: 'Пепперони Фреш с томатами', type: 'meaty', filling:'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик', img:'../img/pizzas/11.png', price: 699},
    { id:12, name: 'Ветчина и сыр', type: 'meaty', filling:'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик', img:'../img/pizzas/12.png', price: 399},
]



function createPizzaCard(pizza) {
  const card = document.createElement('li');
  card.classList.add('choice__card');
  card.innerHTML = `
  <img src="/img/icons_select/${pizza.type}.png" alt="${pizza.type}" class="choice__card-icon">
  <div class="choice__item--img">
    <img src="${pizza.img}" alt="${pizza.name}">
  </div>
  <div class="choice__item--body">
  
  <div class="choice__item-details">
    <h3>${pizza.name}</h3>
    <p>${pizza.filling}</p>
  </div>
  <h5>Размер, см</h5>
  <div class="choice__item--sizes">
    <input type="radio" id="size20${pizza.id}" name="size${pizza.id}" value="size20" >
    <input type="radio" id="size30${pizza.id}" name="size${pizza.id}" value="size30">
    <input type="radio" id="size40${pizza.id}" name="size${pizza.id}" value="size40"checked>
    <label for="size20${pizza.id}">20</label>
    <label for="size30${pizza.id}">30</label>
    <label for="size40${pizza.id}">40</label>
  </div>
  <div class="choice__item--price">от ${pizza.price} руб.</div>
  <button type="button" class="choice__item--btn btn"><span>Заказать</span></button>
  <button type="button" class="choice__item--btn-mobile btn"><span>От ${pizza.price} руб</span></button>
  </div>
  `;

  const sizeInputs = card.querySelectorAll(`input[name="size${pizza.id}"]`);
  const labels = card.querySelectorAll(`label[for^="size"]`);
  const choiceItemImg = card.querySelector('.choice__item--img');

  // Функция для обработки изменения размера
  function handleChange(sizeInput) {
    if (sizeInput.checked) {
      const sizeValue = sizeInput.value;
      if (window.matchMedia('(max-width: 790px)').matches) {
        // Если экран меньше или равен 770px, устанавливаем меньшие паддинги
        if (sizeValue === 'size20') {
          choiceItemImg.style.padding = '12px';
        } else if (sizeValue === 'size30') {
          choiceItemImg.style.padding = '7px';
        } else if (sizeValue === 'size40') {
          choiceItemImg.style.padding = '0px';
        }
      } else {
        // В противном случае, применяем стандартные паддинги
        if (sizeValue === 'size20') {
          choiceItemImg.style.padding = '30px';
        } else if (sizeValue === 'size30') {
          choiceItemImg.style.padding = '15px';
        } else if (sizeValue === 'size40') {
          choiceItemImg.style.padding = '0px';
        }
      }
    }
    updateLabelBackgroundColor(sizeInputs, labels);
  }

  // Добавляем обработчики для каждого размера
  sizeInputs.forEach((sizeInput) => {
    sizeInput.addEventListener('change', () => {
      handleChange(sizeInput);
    });
  });

  updateLabelBackgroundColor(sizeInputs, labels);
  return card;
}

const pizzaContainer = document.querySelector('.choice__cards');
pizzas.forEach(pizza => {
  const card = createPizzaCard(pizza);
  pizzaContainer.appendChild(card);
});

// функция для выбора размера пиццы
  function updateLabelBackgroundColor(sizeInputs, labels) {
    for (let i = 0; i < sizeInputs.length; i++) {
      const radioButton = sizeInputs[i];
      const labelId = radioButton.id;
      const label = labels[i];
  
      if (radioButton.checked) {
        label.style.backgroundColor = '#FFF';
      } else {
        label.style.backgroundColor = '';
      }
    }
  }




// фильтрация пицц по типу
function filterPizzas(type) {
  pizzaContainer.innerHTML = '';

  const filteredPizzas = type === 'all' ? pizzas : pizzas.filter(pizza => pizza.type === type);

  filteredPizzas.forEach(pizza => {
    const card = createPizzaCard(pizza);
    pizzaContainer.appendChild(card);
  });


  const labels = document.querySelectorAll('label');
  labels.forEach(label => {
    if (label.getAttribute('for') === type) {
      label.style.color = 'red';
  
      // Изменяем цвет всего SVG на красный
      label.querySelectorAll('svg').forEach(svg => {
        svg.style.fill = 'red';
      });
    } else {
      // сбрасываем цвет всего SVG на дефолтный
      label.querySelectorAll('svg').forEach(svg => {
        svg.style.fill = '#C5CBD1';
      });
  
      // сбрасываем цвет текста
      label.style.color = '';
    }
  });



}

document.querySelectorAll('input[name="filter"]').forEach(input => {
  input.addEventListener('change', event => {
    filterPizzas(event.target.value);
  });
});

filterPizzas('all');




