import { createRouteContainer } from "../../../../utilities/allUtilities";

const signupForm = `
<form
  class="container-fluid card-opacity rounded pt-2 pb-3 px-sm-5"
  name="signupForm"
>
  <div class="my-3">
    <label for="signupName" class="form-label text-info">
      Name:
    </label>
    <input
      type="text"
      class="form-control"
      id="signupName"
      name="signupName"
      aria-describedby="singup-invalid"
    />
    
  </div>
  <div class="my-3">
    <label for="password" class="form-label text-info">
      Password:
    </label>
    <input
      type="password"
      id="password"
      class="form-control"
      name="password"
      aria-describedby="singup-invalid"
    />
  </div>
  <div id="singup-invalid" class="invalid-feedback"></div>
</form>;
`;

const signupFormElement = createRouteContainer(signupForm, signupForm);

export { signupFormElement };
