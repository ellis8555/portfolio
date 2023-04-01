const isLoggedIn = () => {
  let isSignedIn = false;
  let username;
  const cookies = document.cookie.split(";");
  cookies.forEach((cookie) => {
    if (cookie.includes("access-token")) {
      isSignedIn = true;
    }
    if (cookie.includes("username")) {
      const usernameString = cookie.split("=");
      username = usernameString[1];
    }
  });

  const details = {
    isSignedIn,
    username,
  };
  return details;
};

export { isLoggedIn };
