import { listItemInjector } from "./about-me-methods/about-me-list-injector";

// array items will appear as text listed in about me
const aboutMeItems = [
  "I am currently working towards becoming a full stack web developer.",
  "I have a strong foundation in HTML, CSS, and JavaScript",
  "Good solid base knowledge of front side technologies",
  "Good solid base knowledge of server side technologies",
  "Very adaptable and vesatile with change",
];

// method creates list/text nodes and extract contents using innerHTML
const aboutMeText = listItemInjector(...aboutMeItems).innerHTML;
export { aboutMeText };
