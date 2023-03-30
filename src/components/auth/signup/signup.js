import { createRouteContainer } from "../../../utilities/allUtilities";
import { signupFormElement } from "./signupFRAGS/signup-form-FRAG";

const signup = `
<div class="px-sm-5 py-3 mt-5">
<p class="display-5 text-center pb-5">Sign up</p>
<div class="row d-flex justify-content-center">
<div class="col-sm-9 col-md-8 col-lg-6 col-xl-4 rounded d-flex justify-content-center mt-5">
${signupFormElement.innerHTML}
</div>
</div>
</div>
`;

const signupElement = createRouteContainer(signup, "signup");
export { signupElement };
