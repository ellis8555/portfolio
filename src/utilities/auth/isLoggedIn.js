const isLoggedIn = () => {
  let isSignedIn = false;
  let user;

  if (localStorage.getItem("user") !== null) {
    user = JSON.parse(localStorage.getItem("user"));
    isSignedIn = true;
  }

  const userDetails = {
    isSignedIn,
    user,
  };

  return userDetails;
};

export { isLoggedIn };
