import { createRouteContainer } from "../../../utilities/allUtilities";

const signup = `
<div class="px-sm-5">
<p class="display-5 text-center pb-5">Sign up</p>
<div class="rounded">
    <div id="loginContent">
        <h1 class="text-warning text-center"> sign up under construction</h1>
    </div>
</div>
</div>
`;

const signupElement = createRouteContainer(signup, "signup");
export { signupElement };
