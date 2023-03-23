import { listItems } from "../navbar-list-items";

const createLinkItems = (...linkItems) => {
  const containerDiv = document.createElement("div");
  linkItems.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("p-2");
    li.classList.add("nav-item");
    li.classList.add("rounded");
    li.setAttribute("data-name", `${item.elementName}`);
    const a = document.createElement("a");
    a.href = `#${item.linkName}`;
    a.classList.add("text-light");
    a.classList.add("text-decoration-none");
    a.classList.add("nav-link");
    const listName = document.createTextNode(`${item.linkName}`);
    a.append(listName);
    li.append(a);
    containerDiv.append(li);
  });
  return containerDiv;
};

const navbarLinkItems = createLinkItems(...listItems).innerHTML;
export { navbarLinkItems };
