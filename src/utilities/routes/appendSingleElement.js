const appendSingleElement = (root, elementToAppend) => {
  const navbarElement = root.firstElementChild;
  const elementToRemove = navbarElement.nextElementSibling;
  elementToRemove.remove();
  root.append(elementToAppend);
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);
};

export { appendSingleElement };
