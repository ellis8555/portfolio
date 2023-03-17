import "./main.scss";
import * as bootstrap from "bootstrap";
import {
  navbarElement,
  aboutMeElement,
  underConstructionElement,
  projectsElement,
  certificatesElement,
  todosElement,
  hobbiesElement,
} from "./components/elements";

// the root div in index.html for content to be injected
const root = document.getElementById("root");

root.append(navbarElement);
root.append(underConstructionElement);
root.append(aboutMeElement);
root.append(projectsElement);
root.append(certificatesElement);
root.append(todosElement);
root.append(hobbiesElement);

window.addEventListener("scroll", () => {
  navbarScrollOpacityChange();
});

const navbarScrollOpacityChange = () => {
  let scrollY = window.pageYOffset;
  const smallAuthClassList =
    "container rounded my-5 d-flex flex-column d-lg-none card-opacity text-center py-1";
  const getNavbar = document.querySelector(".navbar-menu");
  const getAuthMessageLargeText = document.querySelector(
    "#auth-text-large-screen"
  );
  const getAuthMessageSmall = document.querySelector("#auth-small-screen");
  if (scrollY > 100) {
    getNavbar.style.backgroundColor = "rgba(50, 131, 210, 0.93)";
    getAuthMessageLargeText.classList.remove("text-success");
    getAuthMessageLargeText.classList.add("text-light");
    getAuthMessageSmall.className = "a";
    getAuthMessageSmall.style.display = "none";
  } else if (scrollY === 0) {
    getNavbar.style.backgroundColor = "rgba(50, 131, 210, .25)";
    getAuthMessageLargeText.classList.remove("text-light");
    getAuthMessageLargeText.classList.add("text-success");
    getAuthMessageSmall.className = smallAuthClassList;
  }
};
