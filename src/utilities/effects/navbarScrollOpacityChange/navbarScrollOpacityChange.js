const navbarScrollOpacityChange = () => {
  let scrollY = window.pageYOffset;
  const getNavbar = document.querySelector(".navbar-menu");
  if (scrollY > 100) {
    getNavbar.style.backgroundColor = "rgba(50, 131, 210, 0.93)";
  } else if (scrollY < 50) {
    getNavbar.style.backgroundColor = "rgba(50, 131, 210, .25)";
  }
};

const setNavBarScrollFade = () => {
  window.addEventListener("scroll", () => {
    navbarScrollOpacityChange();
  });
};

export { setNavBarScrollFade };
