import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryPhotos = galleryItems.map(item => {
  return `<div class="gallery__photo">
  <a class="gallery__link" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
  </a>
  </div>`;
}).join("");

const gallery = document.querySelector('.gallery');
gallery.innerHTML = galleryPhotos;

gallery.addEventListener('click', onClick);

function onClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  
  const instance = basicLightbox.create(`
<img width="1400" height="900" src="${e.target.dataset.source}">`,
    {
      onShow: () => window.addEventListener('keydown', onEscExit),
      onClose: () => window.removeEventListener('keydown', onEscExit),
    }
  );
  instance.show();

function onEscExit(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }
}