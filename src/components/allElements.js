import { aboutMeElement } from "./about-me/about-me";
import { underConstructionElement } from "./construction/under-construction";
import { navbarElement } from "./navbar/navbar";
import { projectsElement } from "./projects/projects";
import { certificatesElement } from "./certificates/certificates";
import { todosElement } from "./Todos/todos";
import { hobbiesElement } from "./hobbies/hobbies";
import { homeElement } from "./Home/home";
// place components into array for when page initially starts up
// index.js imports this
const components = [
  navbarElement,
  homeElement,
  aboutMeElement,
  projectsElement,
  certificatesElement,
  todosElement,
  hobbiesElement,
];
// export each component
export {
  homeElement,
  aboutMeElement,
  underConstructionElement,
  navbarElement,
  projectsElement,
  certificatesElement,
  todosElement,
  hobbiesElement,
  components,
};
