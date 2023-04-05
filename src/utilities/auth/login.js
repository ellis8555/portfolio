import { isLoggedIn } from "../allUtilities";

const login = () => {
  const username = isLoggedIn().user.username;

  const usernameDisplayDiv = document.querySelector("#loggedInUsername");
  const mobileUsernameDisplayDiv = document.querySelector("#mobileLoggedIn");
  const logoutLink = document.querySelector("[data-name='logoutElement']");
  const loginLink = document.querySelector("[data-name='loginElement']");
  const signupLink = document.querySelector("[data-name='signupElement']");

  usernameDisplayDiv.innerHTML = username;
  mobileUsernameDisplayDiv.innerHTML = username;
  logoutLink.classList.remove("d-none");
  loginLink.classList.add("d-none");
  signupLink.classList.add("d-none");
};

export { login };
