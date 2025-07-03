const toggleButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');

  // Alterna o ícone entre ☰ e ✖
  if (navLinks.classList.contains('active')) {
    toggleButton.textContent = '✖';
    toggleButton.setAttribute('aria-label', 'Fechar menu');
  } else {
    toggleButton.textContent = '☰';
    toggleButton.setAttribute('aria-label', 'Abrir menu');
  }
});


// === Funções para cookies ===
function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days*864e5).toUTCString();
  document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
}

function getCookie(name) {
  return document.cookie.split('; ').reduce((r, v) => {
    const parts = v.split('=');
    return parts[0] === name ? decodeURIComponent(parts[1]) : r
  }, '');
}




