console.log("Task 3");

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryRef = document.querySelector("#gallery");

const createGallery = (imagesArr) => {
  return imagesArr.map((item) => {
    const { url, alt } = item;
    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", url);
    imageElement.setAttribute("alt", alt);
    const listItem = document.createElement("li");
    listItem.appendChild(imageElement);
    listItem.classList.add("gallery__item");
    return listItem;
  });
};

const imagesGallery = createGallery(images);
galleryRef.append(...imagesGallery);
