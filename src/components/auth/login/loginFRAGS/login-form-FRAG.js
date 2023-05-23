import { createRouteContainer } from "../../../../utilities/allUtilities";
import { loginForm } from "./login-form-snippet";

const loginFormElement = createRouteContainer(loginForm, "loginForm");

export { loginFormElement };
