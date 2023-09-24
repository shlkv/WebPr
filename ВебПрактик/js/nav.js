document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      // Получаем id секции из атрибута href ссылки
      const sectionId = this.getAttribute('href').substring(1);
  
      // Находим соответствующую секцию
      const targetSection = document.getElementById(sectionId);
  
      // Получаем высоту навигационного меню
      const navHeight = document.querySelector('nav').offsetHeight;
  
      // Выполняем плавный скролл к секции с учетом высоты меню
      window.scrollTo({
        top: targetSection.offsetTop - navHeight,
        behavior: 'smooth'
      });
    });
  });