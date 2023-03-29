import { createRouteContainer } from "../../../utilities/allUtilities";

const loginSmallScreen = `
<div
  id="auth-small-screen"
  class="rounded mx-md-5 my-5 d-flex flex-column d-lg-none text-center py-1"
>
  <div class="p-2 text-success">**Authentication** | **Authorization**</div>
  <div class="text-warning">coming soon</div>
</div>
`;

const smallScreenLoginElement = createRouteContainer(
  loginSmallScreen,
  "auth-small-screen"
).innerHTML;
export { smallScreenLoginElement };
