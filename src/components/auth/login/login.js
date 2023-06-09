import { createRouteContainer } from "../../../utilities/allUtilities";
import { loginFormElement } from "./loginFRAGS/login-form-FRAG";

const login = `
<div class="px-sm-5 py-3 mt-5">
<p class="display-5 text-center">Login</p>
<div class="text-center mt-5" id="loginResponseIndicator"></div>
<div class="row d-flex justify-content-center">
<div class="col-sm-12 col-md-9 col-lg-7 col-xl-6 rounded d-flex justify-content-center mt-3">
${loginFormElement.innerHTML}
</div>
</div>
</div>
`;

const loginElement = createRouteContainer(login, "login");
export { login, loginElement };
