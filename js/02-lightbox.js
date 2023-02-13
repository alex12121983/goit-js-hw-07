import { galleryItems } from './gallery-items.js';
// Change code below this line
  
const gallery = document.querySelector('.gallery');

gallery.innerHTML = galleryItems.reduce(
    (html, current) => 
    html + `
    <a class="gallery__item" href="${current.original}">
        <img class="gallery__image" src="${current.preview}" alt="${current.description}" />
    </a>
    `, ""
    );

     let lightbox = new SimpleLightbox('.gallery a', { 
      captionsData: "alt",
      captionDelay: 250,
    });