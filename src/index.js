import "./main.scss";
import * as bootstrap from "bootstrap";
import { navbarElement, homeElement } from "./components/allElements";
import { pageStartup, navbarLayoutOnResize } from "./utilities/allUtilities";

window.addEventListener("DOMContentLoaded", () => {
  // the root div in index.html for content to be injected
  const root = document.getElementById("root");

  // intial page start up to load the navbar and home elements
  pageStartup(root, navbarElement, homeElement);

  // ensure correct navbar layout on window resize
  navbarLayoutOnResize();
});
