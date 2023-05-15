//////////////////////////////////////////////
// EMAIL FROM CONTACT FORM
//////////////////////////////////////////////

// returns the body of the email
function createEmail(
  // user name from form input
  nameInput,
  // comment from form input
  commentInput
) {
  // email body message
  let emailMessage = `
  ${commentInput}\n\n
  ${nameInput}
  `;
  // return the composed message which will be the body of email received
  return emailMessage;
}

// sends the email
function sendMail(createEmailCallback, name) {
  const params = {
    name: name,
    comment: createEmailCallback,
  };

  // keys required as part of emailJs
  const serviceID = "default_service";
  const templateID = "template_ll6ubij";

  emailjs
    .send(serviceID, templateID, params)
    .then(() => {
      return;
    })
    .catch((err) => console.log(err));
}

export { sendMail, createEmail };
