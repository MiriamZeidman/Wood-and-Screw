// פתיחה/סגירה של תפריט המבורגר במובייל
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navbar-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // סגירת התפריט בלחיצה על קישור
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

// הדגשת הקישור הפעיל בתפריט
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navbar-links a').forEach(link => {
  const linkPage = link.getAttribute('href').split('/').pop();
  if (linkPage === currentPage) {
    link.classList.add('active');
  }
});
