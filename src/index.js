import "./main.scss";
import { aboutMeElement } from "./components/elements";

// the root div in index.html for content to be injected
const root = document.getElementById("root");

root.append(aboutMeElement);
