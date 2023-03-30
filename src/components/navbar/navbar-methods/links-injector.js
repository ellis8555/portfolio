import { listItems } from "../navbar-list-items";

const createLinkItems = (...linkItems) => {
  const containerDiv = document.createElement("div");
  linkItems.forEach((item) => {
    // enclosing li element
    const li = document.createElement("li");
    li.classList.add("ps-3", "px-md-1", "py-2", "nav-item", "rounded");
    // align right login/sign up
    if (item.marginAuto) {
      li.classList.add(`${item.marginAuto}`);
    }
    li.setAttribute("data-name", `${item.elementName}`);

    // inner a element
    const a = document.createElement("a");
    a.href = `#${item.linkName}`;
    // assign different color to login/sign up
    if (item.color) {
      a.classList.add(`${item.color}`, "text-decoration-none", "nav-link");
    } else {
      a.classList.add("text-light", "text-decoration-none", "nav-link");
    }
    const listName = document.createTextNode(`${item.linkName}`);
    a.append(listName);
    li.append(a);
    containerDiv.append(li);
  });
  return containerDiv;
};

const navbarLinkItems = createLinkItems(...listItems).innerHTML;
export { navbarLinkItems };
