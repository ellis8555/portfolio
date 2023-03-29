import { listItemInjector } from "./about-me-methods/about-me-list-injector";

// array items will appear as text listed in about me
const aboutMeItems = [
  "I have a passion for coding!",
  "I find I really enjoy javascript and java",
  "I have a strong foundation in HTML, CSS, and javascript",
  "Good solid base knowledge of front and back side technologies",
  "Have experience with SQL and noSQL db's",
  "Am always aware of the latest frameworks and willing to learn anything new",
];

// method creates list/text nodes and extract contents using innerHTML
const aboutMeText = listItemInjector(...aboutMeItems).innerHTML;
export { aboutMeText };
