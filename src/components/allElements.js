import { aboutMeElement } from "./about-me/about-me";
import { underConstructionElement } from "./construction/under-construction";
import { navbarElement } from "./navbar/navbar";
import { projectsElement } from "./projects/projects";
import { certificatesElement } from "./certificates/certificates";
import { todosElement } from "./Todos/todos";
import { hobbiesElement } from "./hobbies/hobbies";
// place components into array for when page initially starts up
// index.js imports this
const components = [
  navbarElement,
  underConstructionElement,
  aboutMeElement,
  projectsElement,
  certificatesElement,
  todosElement,
  hobbiesElement,
];
// export each component as well as the array
export {
  aboutMeElement,
  underConstructionElement,
  navbarElement,
  projectsElement,
  certificatesElement,
  todosElement,
  hobbiesElement,
  components,
};
