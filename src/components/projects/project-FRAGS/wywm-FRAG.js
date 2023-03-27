import wywmLogoIcon from "../../../images/projects/wywmLogo.jpg";
import githubIcon from "../../../images/projects/gitHub.jpg";

const wywmProjectsFrag = `
<!-- WYWM projects -->
<h4 class="text-center my-5">-- WYWM Projects --</h4>
<!-- time collision java project -->
<div class="row text-center rounded mt-3">
  <div class="col mb-3">
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
            <h5 class="card-title mb-2">Java text turn based game</h5>
            <h6 class="card-subtitle text-success text mb-2">Time Collision</h6>
            <p class="card-text mb-2">
              Basic java demonstrating OOP, looping and file organization
            </p>
              <small class="text-muted"
                ><a
                  href="https://github.com/ellis8555/time_collision"
                  class="btn btn-primary"
                  >Java game source code</a
                ></small
              >
            <p class="card-text mt-2">Project details on github readme</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Coding knights project -->
<div class="row text-center rounded mt-3">
  <div class="col mb-3">
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
            <h5 class="card-title mb-2">
              Python program that demonstrates CRUD OOP
            </h5>
            <h6 class="card-subtitle text-success text mb-2">Coding Knights</h6>
            <p class="card-text mb-2">
              Basic python allowing user to perform CRUD operations on objects
            </p>
            <p class="card-text">
              <small class="text-muted"
                ><a
                  href="https://github.com/ellis8555/WYWM-CodingKnights"
                  class="btn btn-primary"
                  >Python project source code</a
                ></small
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- goblin store project TEMPLATE -->
<div class="row text-center rounded pt-2 pb-3">
  <div class="col-md-6 mb-3">
    <div class="card mb-3 h-100 card-opacity">
      <div class="row g-0 h-100">
        <div class="col-md-4">
          <img
            src="${wywmLogoIcon}"
            class="img-fluid rounded-start h-100 w-100"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Project Template</h5>
            <p class="card-text">Project template for building a storefront</p>
            <p class="card-text">
              <small class="text-muted"
                ><a
                  href="https://ellis8555.github.io/The-Gobblin-Store-TEMPLATE/"
                  class="btn btn-warning"
                  >Project template</a
                ></small
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- My Goblin store front -->
  <div class="col-md-6">
    <div class="card h-100 card-opacity">
      <div class="row g-0 h-100">
        <div class="col-md-4">
          <img
            src="${wywmLogoIcon}"
            class="img-fluid rounded-start h-100 w-100"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">My logic</h5>
            <p class="card-text">
              My storefront logic built upon the project template
            </p>
            <p class="card-text">
              <small class="text-muted"
                ><a
                  href="https://ellis8555.github.io/WYWM-My-GoblinGames-Shop/"
                  class="btn btn-primary"
                  >My store project</a
                ></small
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- cat facts project -->
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
<!-- my github -->
<h4 class="text-center my-5">-- Github --</h4>
<div class="row text-center rounded mt-3">
  <div class="col">
    <div class="card h-100 card-opacity">
      <div class="row g-0 h-100">
        <div class="col-md-4">
          <img
            src="${githubIcon}"
            class="img-fluid rounded-start h-100 w-100"
            alt="..."
          />
        </div>
        <div class="col-md-8 align-self-center">
          <div class="card-body">
            <h5 class="card-title">My github account</h5>
            <p class="card-text">
              Projects that I currently have published to my account plus more
              coming!
            </p>
            <p class="card-text">
              <small class="text-muted"
                ><a href="https://github.com/ellis8555" class="btn btn-primary"
                  >My github</a
                ></small
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;

export { wywmProjectsFrag };
