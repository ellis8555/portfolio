import { routeChange, setNavBarScrollFade, isLoggedIn } from "../allUtilities";

const pageStartup = (root, ...startElements) => {
  startElements.forEach((element) => {
    root.append(element);
  });

  // if logged in display username
  const isUserLoggedIn = isLoggedIn().isSignedIn;
  if (isUserLoggedIn) {
    const username = isLoggedIn().user.username;
    // display user name on mediumn screens and larger
    const displayUsernameDiv = document.getElementById("loggedInUsername");
    displayUsernameDiv.innerHTML = `<span class="text-info">${username}</span>`;
    // display username on xs and small screens
    const mobileUsernameDisplayDiv = document.querySelector("#mobileLoggedIn");
    mobileUsernameDisplayDiv.innerHTML = `Signed in: <span class="text-info">${username}</span>`;
  }

  // set appropriate click listeners on navbar items
  routeChange();
  // sets the scroll effect on the navbar
  setNavBarScrollFade();
};

export { pageStartup };
