  const tabs = document.querySelectorAll('.tabs__item');
  const tabsButtonsWrapper = document.querySelector('.tabs__buttons');
  const tabsButtons = tabsButtonsWrapper.querySelectorAll('.tabs__button');
  let slideIndex = 1;

  const showSlides = (n) => {
    if (n > tabs.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = tabs.length;
    }
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].style.display = 'none';
    };

    for (let j = 0; j < tabsButtons.length; j++) {
      tabsButtons[j].classList.remove('tabs__button--active');
    };

    tabs[slideIndex - 1].style.display = 'flex';
    tabsButtons[slideIndex - 1].classList.add('tabs__button--active');
  };

  showSlides(slideIndex);

  const plusSlides = (n) => {
    showSlides(slideIndex += n)
  };

  const currentSlide = (n) => {
    showSlides(slideIndex = n)
  };

  tabsButtonsWrapper.addEventListener('click', (evt) => {
    for (let i = 0; i < tabsButtons.length + 1; i++) {
      if (evt.target.classList.contains('tabs__button') && evt.target === tabsButtons[i - 1]) {
        currentSlide(i);
      }
    }
  });

