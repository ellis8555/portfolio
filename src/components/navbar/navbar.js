import { createRouteContainer } from "../../utilities/allUtilities";
import { navbarLinkItems } from "./navbar-methods/links-injector";
import { largeScreenLoginElement } from "../../components/login/login-FRAGS/large-screen-login";
import { smallScreenLoginElement } from "../../components/login/login-FRAGS/small-screen-login";

const navbar = `
<div
  class="navbar-menu text-light rounded mx-md-5 mb-5 ps-4 pe-4 d-flex flex-lg-row justify-content-center justify-content-lg-between"
>
  <nav class="navbar navbar-expand-md w-75 justify-content-center">
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

    <div class="collapse navbar-collapse mt-3 mt-md-0" id="navbarNavAltMarkup">
      <ul class="navbar-nav">
  ${navbarLinkItems}
      </ul>
    </div>
  </nav>
${largeScreenLoginElement}
</div>
${smallScreenLoginElement}
`;

const navbarElement = createRouteContainer(navbar, "navbar");
export { navbarElement };
