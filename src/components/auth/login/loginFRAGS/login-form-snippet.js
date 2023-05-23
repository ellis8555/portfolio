const loginForm = `
<form
  class="container-fluid card-opacity rounded pt-3 pb-3 px-sm-5"
  name="loginForm"
>
  <div class="my-3">
    <label for="loginName" class="form-label text-info">
      Name:
    </label>
       <input
      type="text"
      class="form-control"
      id="loginName"
      name="loginName"
    />
    <div id="loginName-invalid" class="invalid-feedback"></div>
  </div>
  <div class="my-3">
    <label for="password" class="form-label text-info">
      Password:
    </label>
    <input
      type="password"
      id="loginPassword"
      class="form-control"
      name="loginPassword"
    />
    <div id="loginPassword-invalid" class="invalid-feedback"></div>
  </div>
  <div id="login-invalid" class="invalid-feedback pb-3"></div>
  <button type="submit" name="submit" class="btn btn-primary mb-3" disabled>Login</button>
</form>;
`;

export { loginForm };
