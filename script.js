// --- Тема ---
const toggle = document.querySelector('.theme-toggle');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    toggle.textContent = "🌞 Светлая тема";
  } else {
    localStorage.setItem('theme', 'light');
    toggle.textContent = "🌙 Темная тема";
  }
});

// --- Поиск ---
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const links = document.querySelectorAll('nav a');

  links.forEach(link => {
    link.style.display = link.textContent.toLowerCase().includes(query)
      ? 'block'
      : 'none';
  });
});
