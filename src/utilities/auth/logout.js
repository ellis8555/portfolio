import {
  isLoggedIn,
  appendSingleElement,
  appendTemporaryMessageReceived,
} from "../allUtilities";
import { homeElement } from "../../components/allElements";

const logout = () => {
  // get the auth type links
  const usernameDisplayDiv = document.querySelector("#loggedInUsername");
  const mobileUsernameDisplayDiv = document.querySelector("#mobileLoggedIn");
  const logoutLink = document.querySelector("[data-name='logoutElement']");
  const loginLink = document.querySelector("[data-name='loginElement']");
  const signupLink = document.querySelector("[data-name='signupElement']");

  // hide the logout link and display the login/signup links
  usernameDisplayDiv.innerHTML = "";
  mobileUsernameDisplayDiv.innerHTML = "";
  logoutLink.classList.add("d-none");
  loginLink.classList.remove("d-none");
  signupLink.classList.remove("d-none");

  // let the user know they have logged out
  const username = isLoggedIn().user.username;
  const logoutMessage = `${username} you are now logged out`;

  // logoutInnerMethods(homeElement, logoutMessage);
  appendTheseElements(homeElement, logoutMessage);

  // if check is for jest testing
  if (typeof localStorage !== "undefined") {
    // remove user token from localstorage
    localStorage.removeItem("user");
  }
};

const appendTheseElements = (homeElement, logoutMessage) => {
  const root = document.getElementById("root");
  appendSingleElement(root, homeElement);
  appendTemporaryMessageReceived(logoutMessage);
};

// if test is for jest testing
if (typeof window !== "undefined") {
  // apply logout click listener on logout link once window loads
  window.addEventListener("load", () => {
    const logoutElement = document.querySelector("a[href='#Logout']");
    logoutElement.addEventListener("click", logout);
  });
}

export { logout, appendTheseElements };
