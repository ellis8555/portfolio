import { eachWebdevImage } from "../../../../../images/allImages";

const webDevImageInjector = (...images) => {
  const containerDiv = document.createElement("div");
  images.forEach((img) => {
    const imgElement = document.createElement("img");
    imgElement.src = img.imageSrc;
    imgElement.alt = img.imageAlt;
    containerDiv.append(imgElement);
  });
  return containerDiv;
};

const webDevImages = webDevImageInjector(...eachWebdevImage).innerHTML;
export { webDevImages };
