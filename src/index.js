import "./main.scss";
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
