import { createRouteContainer } from "../../../../utilities/allUtilities";

const signupForm = `
<form
  class="container-fluid card-opacity rounded pt-3 pb-3 px-sm-5"
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
    <div id="signupNameHelp" class="form-text">At least 2 characters required</div>
    <div id="signupName-invalid" class="invalid-feedback"></div>
  </div>
  <div class="my-3">
    <label for="password" class="form-label text-info">
      Password:
    </label>
    <input
      type="password"
      id="signupPassword"
      class="form-control"
      name="signupPassword"
      aria-describedby="singup-invalid"
    />
    <div id="signupPasswordHelp" class="form-text">8 characters required with one of (upper, lower, number, special)</div>
    <div id="signupPassword-invalid" class="invalid-feedback"></div>
  </div>
  <div id="signup-invalid" class="invalid-feedback text-danger pb-3"></div>
  <button type="submit" name="submit" class="btn btn-primary mb-3" disabled>Register</button>
</form>;
`;

const signupFormElement = createRouteContainer(signupForm, signupForm);

export { signupFormElement };
