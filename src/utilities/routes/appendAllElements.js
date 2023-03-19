const appendAllElements = (appendToElement, ...elements) => {
  elements.forEach((element) => {
    appendToElement.append(element);
  });
};

export { appendAllElements };
