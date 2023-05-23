import { createRouteContainer } from "../../../../utilities/allUtilities";
import { signupForm } from "./signupSnippet";

const signupFormElement = createRouteContainer(signupForm, signupForm);

export { signupFormElement };
