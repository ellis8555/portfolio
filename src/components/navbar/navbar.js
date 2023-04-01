import { createRouteContainer } from "../../utilities/allUtilities";
import { navbarLinkItems } from "./navbar-methods/links-injector";

const navbar = `
<div
  class="navbar-menu text-light rounded mb-5 mx-md-2 mx-lg-5 d-flex flex-md-row justify-content-center justify-content-lg-between"
>
  <nav class="navbar navbar-expand-md w-100 justify-content-center">
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon border border-light rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="hamburger-icon"
        >
          >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </span>
    </button>

    <div class="collapse navbar-collapse mt-3 mt-md-0 mx-md-2" id="navbarNavAltMarkup">
      <ul class="navbar-nav w-100 d-lg-flex">
  ${navbarLinkItems}
      </ul>
      <div id="loggedInUsername" class="text-light fs-6 border-start ps-2 d-none d-md-block"></div>
    </div>
  </nav>
</div>

`;

const navbarElement = createRouteContainer(navbar, "navbar");
export { navbarElement };
