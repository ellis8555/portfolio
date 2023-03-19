const certificatesImageInjector = (...items) => {
  const containerDiv = document.createElement("div");
  items.forEach((item) => {
    const imgDiv = document.createElement("div");
    imgDiv.classList = "carousel-item";
    const img = document.createElement("img");
    img.src = item.imageSrc;
    img.classList = "d-block w-100";
    img.alt = item.imageAlt;
    imgDiv.append(img);
    containerDiv.append(imgDiv);
  });
  // first image requires 'active' class for bootstrap slides to work
  containerDiv.firstChild.classList.add("active");
  return containerDiv;
};

export { certificatesImageInjector };
