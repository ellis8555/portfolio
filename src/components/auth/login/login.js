import { createRouteContainer } from "../../../utilities/allUtilities";
import { loginFormElement } from "./loginFRAGS/login-form-FRAG";

const login = `
<div class="px-sm-5 py-3 mt-5">
<p class="display-5 text-center">Login</p>
<div class="rounded card-opacity">
    <div id="loginContent">
        ${loginFormElement}
    </div>
</div>
</div>
`;

const loginElement = createRouteContainer(login, "login");
export { loginElement };
