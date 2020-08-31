"use strict";

import galleryItems from "./gallery-items.js";

const galleryRef = document.querySelector(".js-gallery");

/*
Добавляем коллекцию
*/

const createGalleryItems = (imagesArr) => {
    return imagesArr.map((item) => {
      const { preview, original, description } = item;
      const li = document.createElement("li");
      li.classList.add("gallery__item");

      const link = document.createElement("a");
      link.classList.add("gallery__link");
      link.setAttribute("href", preview);
        
      const img = document.createElement("img");
      img.classList.add("gallery__image")
      img.setAttribute("src", preview);
      img.dataset.source = original;
      img.setAttribute("alt", description);
    
      link.appendChild(img)
      li.appendChild(link);

      return li;
    });
  };

const imagesGallery = createGalleryItems(galleryItems);
galleryRef.append(...imagesGallery);

/*
Делегируем клик на картинку / открываем большую картинку
*/

galleryRef.addEventListener('click', onImgClick);
const lightboxImageRef = document.querySelector('.lightbox__image');

function onImgClick (event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  openModal();

  setLargeImageSrc(event.target.dataset.source);
  setLargeImageAlt(event.target.alt);
}

function setLargeImageSrc(url) {
  lightboxImageRef.src = url;
}

function setLargeImageAlt(alt) {
  lightboxImageRef.alt = alt;
}

/*
Модальное окно
*/

const lightboxRef = document.querySelector('.js-lightbox');
const lightboxBtnRef = document.querySelector('.lightbox__button');
const lightboxContentRef = document.querySelector('.lightbox__content');


lightboxBtnRef.addEventListener('click', closeOnBtn);
lightboxContentRef.addEventListener('click', closeOnContent);

function openModal() {
  lightboxRef.classList.add('is-open');

  window.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  })
}

function closeModal() {
  lightboxRef.classList.remove('is-open');
  deleteLargeImageSrc();
}

function deleteLargeImageSrc() {
  lightboxImageRef.src = "";
}

function closeOnBtn() {
  closeModal();
}

function closeOnContent(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}

