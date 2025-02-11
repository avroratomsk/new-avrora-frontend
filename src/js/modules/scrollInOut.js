const sections = document.querySelectorAll("[data-section]");

window.addEventListener('scroll', function() {
  let scroll = window.scrollY;
  let win = window.innerHeight / 2;

  sections?.forEach(section => {
    const sectionEl = document.querySelector(`.${section.dataset.section}`);
    const animateText = sectionEl.querySelector('.animate_text');

    if (!animateText) return; // Проверяем, есть ли внутри нужный элемент

    let textHeight = animateText.offsetHeight / 2;
    let vH = sectionEl.offsetTop;
    let offset = vH + sectionEl.offsetHeight / 2;

    if (scroll > vH - (win - textHeight) && scroll + 150 < offset) {
      animateText.classList.add('animate-in');
      animateText.classList.remove('animate-out');
    } else {
      animateText.classList.remove('animate-in');
      animateText.classList.add('animate-out');
    }
  });
});