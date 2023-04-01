const logout = () => {
  // clear cookies which hold token information
  document.cookie = "access-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

  // get the auth type links
  const usernameDisplayDiv = document.querySelector("#loggedInUsername");
  const logoutLink = document.querySelector("[data-name='logoutElement']");
  const loginLink = document.querySelector("[data-name='loginElement']");
  const signupLink = document.querySelector("[data-name='signupElement']");

  // hide the logout link and display the login/signup links
  usernameDisplayDiv.innerHTML = "";
  logoutLink.classList.add("d-none");
  loginLink.classList.remove("d-none");
  signupLink.classList.remove("d-none");
};

// apply logout click listener on logout link once window loads
window.addEventListener("load", () => {
  const logoutElement = document.querySelector("a[href='#Logout']");
  logoutElement.addEventListener("click", logout);
});

export { logout };
