import { appendSingleElement } from "../allUtilities";
import { contactFormValidationTest } from "../allUtilities";
import {
  homeElement,
  aboutMeElement,
  projectsElement,
  certificatesElement,
  todosElement,
  contactElement,
} from "../../components/allElements";

const routeChange = () => {
  const links = document.querySelectorAll("nav li");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      const elementName = link.dataset.name;
      // defined below
      applyCorrectElement(elementName);
    });
  });
};

const applyCorrectElement = (elementName) => {
  switch (elementName) {
    case "aboutMeElement":
      appendSingleElement(root, aboutMeElement);
      break;
    case "projectsElement":
      appendSingleElement(root, projectsElement);
      break;
    case "certificatesElement":
      appendSingleElement(root, certificatesElement);
      break;
    case "todosElement":
      appendSingleElement(root, todosElement);
      break;
    case "contactElement":
      appendSingleElement(root, contactElement);
      // validates user input and applies listener to submit button
      contactFormValidationTest();
      break;
    default:
      appendSingleElement(root, homeElement);
  }
};

export { routeChange };
