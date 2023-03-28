import wywmLogoIcon from "../../../../images/projects/wywmLogo.jpg";

const catsApi = `
<div class="row text-center rounded mt-3">
  <div class="col">
    <div class="card h-100 card-opacity">
      <div class="row g-0 h-100">
        <div class="col-md-4">
          <img
            src="${wywmLogoIcon}"
            class="img-fluid rounded-start h-100 w-100"
            alt="..."
          />
        </div>
        <div class="col-md-8 align-self-center">
          <div class="card-body">
            <h5 class="card-title mb-2">Simple site fetch API</h5>
            <p class="card-text mb-2">
              This project shows two seperate fetches that both fetch some
              random information.
            </p>
            <p class="card-text">
              <small class="text-muted"
                ><a
                  href="https://ellis8555.github.io/cat-facts/"
                  class="btn btn-primary"
                  >API fetch example</a
                ></small
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

export { catsApi };
