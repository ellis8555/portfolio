const getContactMessage = async (e) => {
  e.preventDefault();
  const form = document.forms.contactForm;
  const userInput = {
    name: form.elements.name.value,
    userMessage: form.elements.comment.value,
  };

  const response = await fetch("https://angry-slug-peplum.cyclic.app/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInput),
  });

  const result = await response.json();
  console.log(result);

  form.reset();
};

const submitContactMe = () => {
  contactForm.addEventListener("submit", getContactMessage);
};

export { getContactMessage, submitContactMe };
