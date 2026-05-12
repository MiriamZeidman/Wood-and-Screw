// טוען את נתוני התמונות ומפעיל את הסליידשו בדף הבית
async function initSlideshows() {
  const response = await fetch('data/images.json');
  const images = await response.json();

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
