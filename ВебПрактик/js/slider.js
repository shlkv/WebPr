const sliders = document.querySelectorAll('.stocks__sliders input[type="radio"]');
sliders.forEach(slider => {
  slider.addEventListener('change', () => {
    const index = Array.from(sliders).indexOf(slider);
    document.querySelector('.stocks__sliders').style.transform = `translateX(-${index * 100}%)`;
  });
});