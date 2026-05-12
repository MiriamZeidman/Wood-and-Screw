// נתוני התמונות — כאן תוחלפנה בכתובות Cloudinary אמיתיות
const images = {
  pergolas: [
    'https://picsum.photos/seed/pergola1/1200/800',
    'https://picsum.photos/seed/pergola2/1200/800',
    'https://picsum.photos/seed/pergola3/1200/800',
  ],
  decks: [
    'https://picsum.photos/seed/deck1/1200/800',
    'https://picsum.photos/seed/deck2/1200/800',
    'https://picsum.photos/seed/deck3/1200/800',
  ],
  fences: [
    'https://picsum.photos/seed/fence1/1200/800',
    'https://picsum.photos/seed/fence2/1200/800',
    'https://picsum.photos/seed/fence3/1200/800',
  ],
};

function initSlideshows() {
  const panels = [
    { id: 'slides-pergolas', category: 'pergolas' },
    { id: 'slides-decks',    category: 'decks'    },
    { id: 'slides-fences',   category: 'fences'   },
  ];

  panels.forEach(({ id, category }) => {
    const container = document.getElementById(id);
    if (!container) return;

    const urls = images[category] || [];
    urls.forEach((url, index) => {
      const img = document.createElement('img');
      img.src = url;
      img.alt = category;
      if (index === 0) img.classList.add('active');
      container.appendChild(img);
    });

    startSlideshow(container, urls.length);
  });
}

function startSlideshow(container, total) {
  if (total <= 1) return;

  let current = 0;
  setInterval(() => {
    const imgs = container.querySelectorAll('img');
    imgs[current].classList.remove('active');
    current = (current + 1) % total;
    imgs[current].classList.add('active');
  }, 4000);
}

initSlideshows();
