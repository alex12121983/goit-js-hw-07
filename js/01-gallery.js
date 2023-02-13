import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'basiclightbox';
// Change code below this line

const gallery = document.querySelector('.gallery');

const showImage = (event) => {
    event.preventDefault();
    if( event.target.dataset.source === "" ) return;
    basicLightbox
    .create(`<img width="90vh" height="90vh" src="${event.target.dataset.source}">`)
    .show()
};

gallery.innerHTML = galleryItems.reduce(
    (html, current) => 
    html + `
    <div class="gallery__item">
        <a class="gallery__link" href="${current.original}">
            <img
            class="gallery__image"
            src="${current.preview}"
            data-source="${current.original}"
            alt="${current.description}"
            />
        </a>
    </div>
    `, ""
    );

    gallery.addEventListener('click', showImage);
