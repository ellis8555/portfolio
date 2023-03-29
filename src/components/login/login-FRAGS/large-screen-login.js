import { createRouteContainer } from "../../../utilities/allUtilities";

const loginLargeScreen = `
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
`;

const largeScreenLoginElement = createRouteContainer(
  loginLargeScreen,
  "auth-large-screen"
).innerHTML;
export { largeScreenLoginElement };
