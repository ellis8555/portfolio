const navbarScrollOpacityChange = () => {
  let scrollY = window.pageYOffset;
  const getNavbar = document.querySelector(".navbar-menu");
  const getAuthMessageLargeText = document.querySelector(
    "#auth-text-large-screen"
  );
  const getAuthMessageSmall = document.querySelector("#auth-small-screen");
  if (scrollY > 100) {
    getNavbar.style.backgroundColor = "rgba(50, 131, 210, 0.93)";
    getAuthMessageLargeText.classList.remove("text-success");
    getAuthMessageLargeText.classList.add("text-light");
    getAuthMessageSmall.style.opacity = 0;
  } else if (scrollY < 50) {
    getNavbar.style.backgroundColor = "rgba(50, 131, 210, .25)";
    getAuthMessageLargeText.classList.remove("text-light");
    getAuthMessageLargeText.classList.add("text-success");

    getAuthMessageSmall.style.opacity = 1;
  }
};

const setNavBarScrollFade = () => {
  window.addEventListener("scroll", () => {
    navbarScrollOpacityChange();
  });
};

export { setNavBarScrollFade };
