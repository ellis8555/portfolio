import { cleanUp } from "../clean-up/clean-up";

const appendSingleElement = (root, elementToAppend) => {
  // if moving away from contact form then remove listener on submit button
  cleanUp();
  const navbarElement = root.firstElementChild;
  const elementToRemove = navbarElement.nextElementSibling;
  elementToRemove.remove();
  root.append(elementToAppend);
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);
};

export { appendSingleElement };
