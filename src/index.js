import "./main.scss";
import * as bootstrap from "bootstrap";
import { components } from "./components/allElements";
import { setNavBarScrollFade, appendElements } from "./utilities/allEffects";

// the root div in index.html for content to be injected
const root = document.getElementById("root");

// method loops through components array and appends each item to root div
appendElements(root, ...components);

// apply listeners

setNavBarScrollFade();
