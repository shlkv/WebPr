const openerBtn = document.getElementById('nav__btn--opener');
const closerBtn = document.getElementById('nav__btn--closer');
const mobileMenu = document.querySelector('.nav__mobile--menu');
const mobileNavLinks = document.querySelectorAll('.nav__mobile--links a');

openerBtn.addEventListener('click', function() {
  mobileMenu.style.transform = 'translateX(0)';
});

closerBtn.addEventListener('click', function() {
  mobileMenu.style.transform = 'translateX(100%)';
});

mobileNavLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Получите элемент мобильного меню по его идентификатору (предположим, что меню имеет id "mobileMenu")
    const mobileMenu = document.getElementById('mobileMenu');

    // Закройте мобильное меню, например, с помощью CSS-свойства transform
    mobileMenu.style.transform = 'translateX(100%)';
  });
});

mobileNavLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Получите элемент мобильного меню по его идентификатору (предположим, что меню имеет id "mobileMenu")

    // Закройте мобильное меню, например, с помощью CSS-свойства transform
    mobileMenu.style.transform = 'translateX(100%)';
  });
});