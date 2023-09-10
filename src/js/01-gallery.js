// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

//Створення галереї
const galleryList = document.querySelector(".gallery");
let arrGalleryItems = [];

galleryItems.forEach(galleryItem => {
    const item = `
        <li class="gallery__item">
            <a class="gallery__link" href="${galleryItem.original}">
                <img
                    class="gallery__image"
                    src="${galleryItem.preview}"
                    data-source="${galleryItem.original}"
                    alt="${galleryItem.description}"
                />
            </a>
        </li>
    `;
    arrGalleryItems.push(item);
})
const newArrGalleryItems = arrGalleryItems.join("");
galleryList.insertAdjacentHTML("beforeend", newArrGalleryItems);
//Створення галереї


//Використання бібліотеки створення модального вікна із зображеннями
let galleryItem = new SimpleLightbox('.gallery__link', {
    captions: true,
    captionsType: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom'
});
//Використання бібліотеки створення модального вікна із зображеннями
