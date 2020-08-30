"use strict";

import galleryItems from "./gallery-items.js";

const galleryRef = document.querySelector(".js-gallery");

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
    
      link,appendChild(img)
      li.appendChild(link);

      return li;
    });
  };

const imagesGallery = createGalleryItems(galleryItems);
galleryRef.append(...imagesGallery);