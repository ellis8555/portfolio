// used in ./index.js
// this method properly aligns the login and sign up items to the right side on the navbar
// when on smaller screens it converts the contact link into block level

function navbarLayoutOnResize() {
  const contactLink = document.querySelector("[data-name='contactElement']");

  window.addEventListener("resize", function () {
    let screenWidthAboveQueryLimit = this.innerWidth > 767;
    let containsMeAuto = contactLink.classList.contains("me-auto");
    if (screenWidthAboveQueryLimit && !containsMeAuto) {
      contactLink.classList.add("me-auto");
    } else if (!screenWidthAboveQueryLimit && containsMeAuto) {
      contactLink.classList.remove("me-auto");
    }
  });
}

export { navbarLayoutOnResize };
