const createRouteContainer = (content, id) => {
  const container = document.createElement("div");
  container.setAttribute("id", id);
  container.innerHTML = content;
  return container;
};

export { createRouteContainer };
