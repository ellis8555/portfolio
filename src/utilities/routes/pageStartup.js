const pageStartup = (root, ...startElements) => {
  startElements.forEach((element) => {
    root.append(element);
  });
};

export { pageStartup };
