function setLanguage(lang) {
  const elements = document.querySelectorAll('[data-pt]');
  elements.forEach(el => {
    el.innerText = el.getAttribute(`data-${lang}`);
    if (el.placeholder) {
      el.placeholder = el.getAttribute(`data-${lang}`);
    }
  });
}
const avatar = document.querySelector('.avatar-flip');
  avatar.addEventListener('click', () => {
    avatar.style.animation = 'none';
    void avatar.offsetWidth; // reinicia o CSS animation
    avatar.style.animation = 'flipCoin 2s ease-in-out forwards';
  });