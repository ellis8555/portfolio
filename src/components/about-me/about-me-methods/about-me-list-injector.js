const listItemInjector = (...items) => {
  let div = document.createElement("div");
  items.forEach((item) => {
    const li = document.createElement("li");
    li.classList = "list-group-item border-0";
    const p = document.createElement("p");
    p.classList = "text-start";
    const text = document.createTextNode(item);
    p.append(text);
    li.append(p);
    div.append(li);
  });
  return div;
};

export { listItemInjector };
