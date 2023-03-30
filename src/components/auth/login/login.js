import { createRouteContainer } from "../../../utilities/allUtilities";

const login = `
<div class="px-sm-5">
<p class="display-5 text-center pb-5">Login</p>
<div class="rounded">
    <div id="loginContent">
        <h1 class="text-warning text-center">login under construction</h1>
    </div>
</div>
</div>
`;

const loginElement = createRouteContainer(login, "login");
export { loginElement };
