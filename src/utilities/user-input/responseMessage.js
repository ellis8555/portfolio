const appendTemporaryMessageReceived = (message, name) => {
  const container = document.createElement("div");
  container.id = "messageResponseContainer";
  container.classList.add("mx-5", "mb-5", "px-5", "py-3");
  const responseContainer = document.createElement("div");
  responseContainer.id = "messageResponse";
  responseContainer.classList.add(
    "px-5",
    "py-3",
    "text-center",
    "display-6",
    "rounded"
  );
  const messageToUser = `Thank you ${name}! ${message}`;
  const responseMessage = document.createTextNode(messageToUser);
  responseContainer.append(responseMessage);
  container.append(responseContainer);

  const elementToAppend = document.getElementById("construction-message");
  elementToAppend.prepend(container);

  const messageContainer = document.getElementById("messageResponseContainer");
  const messageResponseDiv = document.getElementById("messageResponse");

  setTimeout(() => {
    setInterval(() => {
      let messageContainerOpacity = getComputedStyle(messageContainer).opacity;
      if (messageContainerOpacity > 0) {
        messageContainer.style.opacity = messageContainerOpacity - 0.1;
      }
    }, 50);
  }, 2000);
  setTimeout(() => {
    messageResponseDiv.remove();
  }, 2520);
  setTimeout(() => {
    setInterval(() => {
      let messageContainerHeight = parseInt(
        getComputedStyle(messageContainer).height
      );
      if (messageContainerHeight > 0) {
        messageContainer.style.height = `${messageContainerHeight - 25}px`;
      }
    }, 50);
  }, 2550);
  setTimeout(() => {
    messageContainer.remove();
  }, 2565);
};
export { appendTemporaryMessageReceived };
