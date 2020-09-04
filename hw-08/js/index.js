"use strict";

import galleryItems from "./gallery-items.js";

const galleryRef = document.querySelector(".js-gallery");

/*
Добавляем коллекцию
*/

function createElement(name, attrs = {}) {
  const element = document.createElement(name);
  for (let key in attrs) {
    element.setAttribute(key, attrs[key]);
  }
  return element;
}

function createGalleryItem(item) {
  const galleryItem = createElement("li");
  galleryItem.classList.add("gallery__item");
  const galleryLink = createElement("a", {
    href: item.original,
  });
  galleryLink.classList.add("gallery__link");
  const galleryImage = createElement("img", {
    src: item.preview,
    "data-source": item.original,
    alt: item.description,
  });
  galleryImage.classList.add("gallery__image");
  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);
  return galleryItem;
}

function createGallery() {
  const gallery = galleryItems.map(createGalleryItem);
  galleryRef.append(...gallery);
}

createGallery();

/* const createGalleryItems = (imagesArr) => {
  return imagesArr.map((item) => {
    const { preview, original, description } = item;
    const li = document.createElement("li");
    li.classList.add("gallery__item");

    const link = document.createElement("a");
    link.classList.add("gallery__link");
    link.setAttribute("href", preview);

    const img = document.createElement("img");
    img.classList.add("gallery__image");
    img.setAttribute("src", preview);
    img.dataset.source = original;
    img.setAttribute("alt", description);

    link.appendChild(img);
    li.appendChild(link);

    return li;
  });
}; */

/* const imagesGallery = createGalleryItems(galleryItems);
galleryRef.append(...imagesGallery); */

/*
Делегируем клик на картинку / открываем большую картинку
*/

galleryRef.addEventListener("click", onImgClick);
const lightboxImageRef = document.querySelector(".lightbox__image");

function onImgClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
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

const lightboxRef = document.querySelector(".js-lightbox");
const lightboxBtnRef = document.querySelector(".lightbox__button");
const lightboxContentRef = document.querySelector(".lightbox__content");

lightboxBtnRef.addEventListener("click", closeOnBtn);
lightboxContentRef.addEventListener("click", closeOnContent);

function openModal() {
  lightboxRef.classList.add("is-open");

  window.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      closeModal();
    }
  });

  window.addEventListener("keydown", navigateArrows);
}

function closeModal() {
  lightboxRef.classList.remove("is-open");
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

/*
Стрелки
*/

function prevImage() {
  const currentSrc = lightboxImageRef.getAttribute("src");
  let currentIndex = galleryItems.findIndex((el) => el.original === currentSrc);
  const prevIndex = galleryItems.find((el, i) => i === currentIndex - 1);
  setLargeImageSrc(prevIndex.original);
}

function nextImage() {
  const currentSrc = lightboxImageRef.getAttribute("src");
  let currentIndex = galleryItems.findIndex((el) => el.original === currentSrc);
  const nextIndex = galleryItems.find((el, i) => i === currentIndex + 1);
  setLargeImageSrc(nextIndex.original);
}

function navigateArrows(event) {
  if (event.code === "ArrowLeft") {
    prevImage();
  } else if (event.code === "ArrowRight") {
    nextImage();
  }
}