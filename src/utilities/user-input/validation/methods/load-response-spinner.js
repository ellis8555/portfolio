const loadResponseSpinner = (elementToAppend) => {
  const appendTo = elementToAppend;

  const container = document.createElement("div");
  container.classList.add("spinner-border", "text-info");
  container.id = "contactFormSpinner";
  container.role = "status";

  const spinnerSpan = document.createElement("span");
  spinnerSpan.classList.add("visually-hidden");
  const spinnerSpanText = document.createTextNode("Loading...");
  spinnerSpan.append(spinnerSpanText);
  container.append(spinnerSpan);

  appendTo.append(container);
};

export { loadResponseSpinner };
