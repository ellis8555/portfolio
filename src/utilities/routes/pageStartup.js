import { routeChange, setNavBarScrollFade } from "../allUtilities";

const pageStartup = (root, ...startElements) => {
  startElements.forEach((element) => {
    root.append(element);
  });
  // set appropriate click listeners on navbar items
  routeChange();
  // sets the scroll effect on the navbar
  setNavBarScrollFade();
};

export { pageStartup };
