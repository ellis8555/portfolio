const appendElements = (appendToElement, ...elements) => {
  elements.forEach((element) => {
    appendToElement.append(element);
  });
};

export { appendElements };
