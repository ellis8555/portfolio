import { createRouteContainer } from "../../../utilities/allUtilities";
import { signupFormElement } from "./signupFRAGS/signup-form-FRAG";

const signup = `
<div class="px-sm-5 py-3 mt-5">
<p class="display-5 text-center">Sign up</p>
<div class="row d-flex justify-content-center">
<div class="card-opacity col-sm-12 col-md-9 col-lg-7 col-xl-6 rounded d-flex justify-content-center mt-3 px-3 py-2">As of now account creation is for demonstration purposes. Setting up authorized endpoints will come in the future</div>
</div>
<div class="text-center mt-5" id="signupResponseIndicator"></div>
<div class="row d-flex justify-content-center">
<div class="col-sm-12 col-md-9 col-lg-7 col-xl-6 rounded d-flex justify-content-center mt-3">
${signupFormElement.innerHTML}
</div>
</div>
</div>
`;

const signupElement = createRouteContainer(signup, "signup");
export { signupElement };
