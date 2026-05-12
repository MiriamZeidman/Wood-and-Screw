// ===== תפריט מובייל =====
const hamburger = document.getElementById('hamburger');

// בונה תפריט מובייל אחד מכל הקישורים
function buildMobileMenu() {
  const existing = document.getElementById('mobile-menu');
  if (existing) return existing;

  const menu = document.createElement('ul');
  menu.id = 'mobile-menu';
  menu.className = 'mobile-menu';

  document.querySelectorAll('.navbar-links a').forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.textContent;
    li.appendChild(a);
    menu.appendChild(li);
  });

  document.querySelector('.navbar').after(menu);
  return menu;
}

if (hamburger) {
  const menu = buildMobileMenu();

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    menu.classList.toggle('open');
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      menu.classList.remove('open');
    });
  });
}

// ===== הדגשת קישור פעיל =====
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navbar-links a').forEach(link => {
  const linkPage = link.getAttribute('href').split('/').pop();
  if (linkPage === currentPage) link.classList.add('active');
});
