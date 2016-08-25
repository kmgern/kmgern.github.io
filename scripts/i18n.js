document.querySelector('[data-i18n-toggle]')
  .addEventListener('click', function () {
    var htmlElement = document.getElementsByTagName('html')[0]
    var currentLanguage = htmlElement.getAttribute('lang');

    if (currentLanguage === 'en') {
      htmlElement.setAttribute('lang', 'es');
    } else {
      htmlElement.setAttribute('lang', 'en');
    }
  });
