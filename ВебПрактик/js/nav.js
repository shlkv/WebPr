document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  

      const sectionId = this.getAttribute('href').substring(1);
  

      const targetSection = document.getElementById(sectionId);

      const navHeight = document.querySelector('nav').offsetHeight;
  
      // Выполняем плавный скролл к секции с учетом высоты меню
      window.scrollTo({
        top: targetSection.offsetTop - navHeight,
        behavior: 'smooth'
      });
    });
  });