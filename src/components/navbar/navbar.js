import { createRouteContainer } from "../../utilities/allUtilities";
import { navbarLinkItems } from "./navbar-methods/links-injector";

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
          --
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
  <div
    id="auth-large-screen"
    class="p-2 d-none d-lg-block w-100 align-self-center"
    style="text-align: end"
  >
    <span id="auth-text-large-screen" class="text-success"
      >**Authentication** | **Authorization**</span
    >
    <span class="text-warning">coming soon</span>
  </div>
</div>

<div
  id="auth-small-screen"
  class="rounded mx-md-5 my-5 d-flex flex-column d-lg-none text-center py-1"
>
  <div class="p-2 text-success">**Authentication** | **Authorization**</div>
  <div class="text-warning">coming soon</div>
</div>`;

const navbarElement = createRouteContainer(navbar, "navbar");
export { navbarElement };
